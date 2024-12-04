import React from 'react'

const Navbar = () => {
    return (
        <nav className='w-full h-24 bg-emerald-500 flex justify-between items-center px-12'>
            <h3>Gestión de Citas</h3>
            <div className="flex gap-12 uppercase">
                <a href="/medicos">Médicos</a>
                <a href="/pacientes">Pacientes</a>
            </div>

        </nav>
    )
}

export default Navbar
