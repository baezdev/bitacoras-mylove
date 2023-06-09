import { Form as FormikForm, Formik } from 'formik'

import { Input, InputSelect } from './Input'
import { SaveIcon, TrashIcon } from './Icons'

import { brands } from '../data/phoneBrands.json'
import { addNewRegister } from '../service/bitacoras'
import { createToast, makeConfetti, validateForm } from '../helpers'

export const initialValues = {
  imei: '',
  iccid: '',
  number: '',
  date: '',
  brand: '',
  model: ''
}

export function Form () {
  const handleSubmit = async (values) => {
    createToast({ message: 'Guardando...', color: 'pink' })
    console.log(values)

    const addRegister = await addNewRegister(values)
    createToast({ message: addRegister, color: 'purple' })

    makeConfetti()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => handleSubmit(values)}
      validationSchema={validateForm}
    >
      <FormikForm className='basis-1/2 md:px-20 py-10 mx-auto bg-white'>
        <h4 className='text-2xl md:text-4xl font-semibold mb-6'>Información de venta</h4>
        <div className='flex flex-col gap-8'>
          <Input
            type='number'
            name='imei'
            label='imei'
            placeholder='Deben ser 15 números'
          />
          <Input
            type='text'
            name='iccid'
            label='iccid'
            placeholder='Deben ser 19 números'
            inputMode='numeric'
          />
          <div className='grid grid-cols-2 gap-3'>
            <Input
              type='number'
              name='number'
              label='número de teléfono'
              placeholder='Deben ser 10 números'
            />
            <Input
              type='date'
              name='date'
              label='fecha de venta'
            />
          </div>
          <div className='grid grid-cols-2 gap-3'>
            <InputSelect
              label='marca'
              name='brand'
              options={brands}
              placeholder='Marca del equipo'
            />
            <Input
              type='text'
              name='model'
              label='modelo'
              placeholder='Escribe el modelo'
            />
          </div>
          <div className='flex justify-end gap-3'>
            <FormButtonReset>
              <TrashIcon />
            </FormButtonReset>
            <FormButton>
              guardar <SaveIcon />
            </FormButton>
          </div>
        </div>
      </FormikForm>
    </Formik>
  )
}

export function FormButton ({ children }) {
  return (
    <button
      className='py-3 px-20 w-fit mt-4 font-semibold text-lg capitalize bg-pink-400 text-white rounded flex items-center gap-1 transition-all hover:scale-105 hover:bg-pink-500'
      type='submit'
    >
      {children}
    </button>
  )
}

export function FormButtonReset ({ children }) {
  return (
    <button
      className='py-3 px-5 w-fit mt-4 font-semibold text-lg capitalize bg-purple-400 text-white rounded flex items-center gap-1 transition-all hover:scale-105 hover:bg-purple-500'
      type='reset'
    >
      {children}
    </button>
  )
}
