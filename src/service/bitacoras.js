import { db, doc, setDoc, getDoc, collection, getDocs } from '../config/firebase.config'
import { splitForQuincenas } from '../helpers/quincenas'

export async function addNewRegister (newRegister) {
  const optionsDate = { month: 'long', year: 'numeric' }
  const getMontAndYear = new Date().toLocaleDateString(undefined, optionsDate).replace(' de', ',')

  try {
    const docRef = doc(db, 'bitacoras', `${getMontAndYear}`)
    const bitacora = (await getDoc(docRef)).data()?.bitacora || []
    await setDoc(docRef, {
      bitacora: [...bitacora, newRegister]
    })

    return 'Registro Guardado con Exito!'
  } catch (error) {
    return `Error: ${error}`
  }
}

export async function getRegisters () {
  const querySnapshot = await getDocs(collection(db, 'bitacoras'))
  const listLogs = []

  querySnapshot.forEach((doc) => {
    listLogs.push(doc.id)
  })

  return listLogs
}

export async function getRegisterByQuincena (month, quincena = 1) {
  const docRef = doc(db, 'bitacoras', month)
  const bitacora = await (await getDoc(docRef)).data()?.bitacora

  return splitForQuincenas(quincena, bitacora)
}
