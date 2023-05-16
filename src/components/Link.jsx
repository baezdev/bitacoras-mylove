export function Link ({ to, children }) {
  return (
    <a
      href={to}
      className="px-2 after:content-[''] after:h-[3px] after:bg-[#fa949d]  after:w-0 hover:after:w-full after:absolute relative after:-bottom-0.5 after:left-0 after:rounded after:transition-all after:duration-200 after:opacity-0 hover:after:opacity-100 flex items-center gap-1"
    >
      {children}
    </a>
  )
}
