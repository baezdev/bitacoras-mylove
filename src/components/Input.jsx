const styles = {
  input: 'flex flex-col border-b-2 border-[#cac7e1] group focus-within:border-purple-500',
  label: 'uppercase text-gray-500 text-sm font-medium group-focus-within:text-purple-600'
}

export function Input ({ label, type, placeholder, name, value }) {
  return (
    <div className={styles.input}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        className='py-[10px] outline-none text-lg appearance-none caret-purple-500 font-medium placeholder:text-gray-400 w-full bg-inherit' placeholder={placeholder}
      />
    </div>
  )
}

export function InputSelect ({ name, options, label }) {
  return (
    <div className={styles.input}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <select name={name} className='py-[10px] outline-none text-lg font-medium bg-inherit w-full'>
        <option selected disabled>Marca del equipo</option>
        <option value='z'>Motorola</option>
        <option value='z'>Samsung</option>
        <option value='z'>Xiaomi</option>
      </select>
    </div>
  )
}
