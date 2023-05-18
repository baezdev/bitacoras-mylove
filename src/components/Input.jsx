import { useField } from 'formik'

const styles = {
  input: 'flex flex-col border-b-2 border-[#cac7e1] group focus-within:border-purple-500',
  label: 'uppercase text-gray-500 text-sm font-medium group-focus-within:text-purple-600'
}

export function Input ({ ...props }) {
  const [field] = useField(props)
  const { label, type, name, placeholder } = props
  return (
    <div className={styles.input}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        {...props}
        {...field}
        className='py-[10px] outline-none text-lg appearance-none caret-purple-500 font-medium placeholder:text-gray-400 w-full bg-inherit'
      />
    </div>
  )
}

export function InputSelect ({ ...props }) {
  const [field] = useField(props)
  const { label, name, options, placeholder } = props
  return (
    <div className={styles.input}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <select
        name={name}
        className='py-[10px] outline-none text-lg font-medium bg-inherit w-full'
        {...props}
        {...field}
        defaultValue='nada'
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
  )
}
