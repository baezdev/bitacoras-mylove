import { Button } from './Button'
import { getRegisterByQuincena } from '../service/bitacoras'
import { createExcel } from '../service/excel'

export function BitacoraItem ({ bitacora }) {
  const handleDownloadFile = async (bitacora, quincena) => {
    const result = await getRegisterByQuincena(bitacora, quincena)
    console.log(result)
    createExcel()
  }

  return (
    <li className='p-8 flex flex-col gap-8 border-b border-[#cac7e1]'>
      <h3 className='capitalize text-4xl font-medium text-center'>{bitacora}</h3>
      <div className='flex gap-10 justify-center'>
        <div className='flex flex-col items-center gap-3'>
          <p className='text-xl'>Primer Quincena</p>
          <Button onClick={() => handleDownloadFile(bitacora, 1)}>
            Descargar Bitacora
          </Button>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <p className='text-xl'>Segunda Quincena</p>
          <Button onClick={() => handleDownloadFile(bitacora, 2)}>
            Descargar Bitacora
          </Button>
        </div>
      </div>
    </li>
  )
}
