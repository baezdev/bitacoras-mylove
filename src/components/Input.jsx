export function Input ({ label, type, placeholder, name, value }) {
  return (
    <div className='flex flex-col border-b-[3px] border-[#cac7e1] group focus-within:border-[#815af0]'>
      <label htmlFor={name} className='uppercase text-[#747c91] text-sm font-medium group-focus-within:text-[#815af0]'>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        className='py-[10px] outline-none text-lg appearance-none caret-[#815af0] font-medium placeholder:text-[#cac7e1] w-full bg-inherit' placeholder={placeholder}
      />
    </div>
  )
}

export function InputSelect ({ name, options, label }) {
  return (
    <div className='flex flex-col border-b-[3px] border-[#cac7e1] group focus-within:border-[#815af0]'>
      <label htmlFor={name} className='uppercase text-[#747c91] text-sm font-medium group-focus-within:text-[#815af0]'>{label}</label>
      <select name={name} className='py-[10px] outline-none text-lg font-medium bg-inherit w-full'>
        <option selected disabled>Marca del equipo</option>
        <option value='z'>Motorola</option>
        <option value='z'>Samsung</option>
        <option value='z'>Xiaomi</option>
      </select>
    </div>
  )
}
