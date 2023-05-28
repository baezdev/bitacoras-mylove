export function ButtonLink ({ children, href, download }) {
  return (
    <a
      href={href}
      className='py-3 px-20 w-fit font-semibold text-lg capitalize bg-pink-400 text-white rounded flex items-center gap-1 transition-all hover:scale-105 hover:bg-pink-500'
      role='button'
      download={download}
    >
      {children}
    </a>
  )
}
