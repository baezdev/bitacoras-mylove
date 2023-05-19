import { db, doc, setDoc, getDoc } from '../config/firebase.config'

export async function addNewRegister (newRegister) {
  const optionsDate = { month: 'long', year: 'numeric' }
  const getDate = new Date().toLocaleDateString(undefined, optionsDate).replace(' de', ',')

  try {
    const docRef = doc(db, 'logbooks', `${getDate}`)
    const sales = (await getDoc(docRef)).data().sales || []
    await setDoc(docRef, {
      sales: [...sales, newRegister]
    })

    return 'Registro Guardado'
  } catch (error) {
    return `Error: ${error}`
  }
}
