
import { Link } from './Link'
import { AddIcon, BitacoraIcon, CloseIcon, MenuIcon } from './Icons'
import { useState } from 'react'

export function Nav () {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='h-24'>
      <nav className='flex justify-between h-full items-center md:px-20 md:w-full w-11/12 mx-auto bg-white'>
        <a href='/'>
          <h1 className='text-2xl font-semibold basis-24 justify-center flex gap-2'><span className='text-pink-400 font-black'>MyLove</span> Bitacoras</h1>
        </a>
        <button className='md:hidden' onClick={() => setOpenMenu(!openMenu)}>
          {
            openMenu
              ? <CloseIcon />
              : <MenuIcon />
          }
        </button>
        <div className={`absolute top-24 md:top-0 md:bg-inherit border-b-2 border-pink-400 rounded-[3px] border-opacity-50 md:border-none w-full md:w-min left-0 py-10 md:py-0 md:relative flex ${openMenu ? 'translate-x-0' : '-translate-x-full'} items-center flex-col md:flex-row gap-10 md:gap-5 font-medium text-lg transition-transform duration-300 md:translate-x-0 z-50 bg-inherit`}>
          <Link to='/'>
            Agregar <AddIcon />
          </Link>
          <Link to='/bitacoras'>
            Bitacoras <BitacoraIcon />
          </Link>
          <div className='md:ml-24 items-center gap-3 justify-end font-medium text-lg flex'>
            <span>Ari</span>
            <img src='/ari.jpeg' alt='La mas preciosa' className='w-12 aspect-square rounded-full object-cover' />
          </div>
        </div>
      </nav>
    </div>
  )
}
