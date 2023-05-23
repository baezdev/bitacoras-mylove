import { useField } from 'formik'

const styles = {
  input: 'flex flex-col border-b-2 border-[#cac7e1] group focus-within:border-purple-500',
  label: 'uppercase text-gray-500 text-sm font-medium group-focus-within:text-purple-600'
}

export function Input ({ ...props }) {
  const [field, meta] = useField(props)
  const { label, type, name, placeholder } = props
  return (
    <div>
      <div className={styles.input}>
        <label htmlFor={name} className={styles.label}>{label}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          autoComplete='off'
          {...props}
          {...field}
          className='py-[10px] outline-none text-lg appearance-none caret-purple-500 font-medium placeholder:text-gray-400 w-full bg-inherit h-12'
        />
      </div>
      {
        meta.touched && meta.error &&
          <InputError meta={meta} />
      }
    </div>
  )
}

export function InputSelect ({ ...props }) {
  const [field, meta] = useField(props)
  const { label, name, options, placeholder } = props
  return (
    <div>
      <div className={styles.input}>
        <label htmlFor={name} className={styles.label}>{label}</label>
        <select
          name={name}
          className='py-[10px] outline-none text-lg font-medium bg-inherit w-full h-12 capitalize'
          {...props}
          {...field}
          defaultValue=''
        >
          <option hidden>{placeholder}</option>
          {options.map(option => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      </div>
      <InputError meta={meta} />
    </div>
  )
}

export function InputError ({ meta }) {
  return (
    <span className='mt-1 block font-semibold text-red-500'>{meta.error}</span>
  )
}
