import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return ( 
        <div className='md:w-2/5 xl:w-1/5 bg-gray-800 '>
            <div className=' p-6 '>
                <p className=' uppercase text-white text-2xl tracking-wide text-center font-bold '>Cheffsitos</p>
                <p className=' uppercase text-white text-1xl tracking-wide text-center'>Admin</p>

                <p className=' mt-3 text-gray-600 '>Panel de administración del restaurant:</p>

                <nav className='mt-10'>
                    <NavLink className=" p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeclassname='text-yellow-500' exact="true" to="/"  >Órdenes</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" activeclassname='text-yellow-500' exact="true" to="/menu">Menú</NavLink>
                </nav>
            </div>
        </div>
     );
}
 
export default Sidebar;