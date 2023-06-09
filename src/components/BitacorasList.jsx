import { BitacoraItem } from './BitacoraItem'
import { useBitacoras } from '../hooks/useBitacoras'

export function BitacorasList () {
  const { listBitacoras, loading } = useBitacoras()

  return (
    <ul className='mx-auto py-2 md:py-0 md:w-3/4 flex flex-col gap-5'>
      {
        !loading
          ? (
              listBitacoras.map((item) => (
                <BitacoraItem key={item} bitacora={item} />
              ))
            )
          : <p className='capitalize text-2xl md:text-4xl font-medium text-center'>Cargando...</p>
      }
    </ul>
  )
}
