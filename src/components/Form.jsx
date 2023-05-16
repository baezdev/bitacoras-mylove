import { Input, InputSelect } from './Input'

export function Form () {
  return (
    <main>
      <form className='w-11/12 my-9 md:w-[550px] border p-5 md:p-8 mx-auto'>
        <div className='flex flex-col gap-8'>
          <Input type='number' name='imei' label='imei' placeholder='Deben ser 15 números' />
          <Input type='number' name='iccid' label='iccid' placeholder='Deben ser 19 números' />
          <Input type='number' name='number' label='número de teléfono' placeholder='Deben ser 10 números' />
          <div className='grid grid-cols-2 gap-3'>
            <InputSelect label='marca' name='brand' />
            <Input type='text' name='model' label='modelo' placeholder='Escribe el modelo' />
          </div>
          <div className='grid grid-cols-2 gap-3'>
            <Input type='text' name='client' label='cliente' placeholder='nombre del cliente' />
            <Input type='date' name='date' label='fecha de venta' />
          </div>
          <button className='py-4 mt-4 font-medium text-lg capitalize bg-[#3b1d91] text-white rounded-2xl'>
            guardar
          </button>
        </div>
      </form>
    </main>
  )
}
