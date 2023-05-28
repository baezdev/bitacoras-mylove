import * as Yup from 'yup'

export function validateForm () {
  const validationSchema = Yup.object().shape({
    imei: Yup.string()
      .min(15, 'Deben ser 15 digitos')
      .max(15, 'Deben ser 15 digitos')
      .required('Campo obligatorio'),
    iccid: Yup.string()
      .min(19, 'Deben ser 19 digitos')
      .max(19, 'Deben ser 19 digitos')
      .required('Campo obligatorio'),
    number: Yup.string()
      .min(10, 'Deben ser 10 digitos')
      .max(10, 'Deben ser 10 digitos')
      .required('Campo obligatorio'),
    date: Yup.string()
      .required('Campo obligatorio'),
    /* .max(new Date(), 'Alto ahi viajero del tiempo') */
    brand: Yup.string()
      .required('Campo obligatorio'),
    model: Yup.string()
      .required('Campo obligatorio')
  })

  return validationSchema
}
