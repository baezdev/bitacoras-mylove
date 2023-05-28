import { ButtonLink } from './ButtonLink'

export function BitacoraItem ({ bitacora }) {
  return (
    <li className='pb-5 md:p-8 flex flex-col gap-4 md:gap-8 border-b border-[#cac7e1]'>
      <h3 className='capitalize text-2xl md:text-4xl font-medium text-center'>{bitacora}</h3>
      <div className='flex flex-col md:flex-row gap-5 md:gap-10 justify-center'>
        <div className='flex flex-col items-center gap-1 md:gap-3'>
          <p className='text-lg'>Primer Quincena</p>
          <ButtonLink href={`/download?quincena=1&date=${bitacora}`}>
            Generar Excel
          </ButtonLink>
        </div>
        <div className='flex flex-col items-center gap-1 md:gap-3'>
          <p className='text-lg'>Segunda Quincena</p>
          <ButtonLink href={`/download?quincena=2&date=${bitacora}`}>
            Generar Excel
          </ButtonLink>
        </div>
      </div>
    </li>
  )
}
