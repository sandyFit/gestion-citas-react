import React from 'react';

const FormDisponibilidad = () => {
    return (
        <section className='w-full flex flex-col justify-center items-center'>
            <h3 className='uppercase'>Registro de Disponibilidad</h3>
            <p>
                Para garantizar un mejor servicio a sus pacientes, todos los profesionales
                de la salud deben registrar su disponibilidad aquí.
            </p>
            <div className="w-full flex flex-col bg-neutral-50 py-8 px-10 rounded-lg shadow-lg gap-6
                mt-6">
                <form className='flex flex-col gap-6'>
                    <label htmlFor="centro">
                        Centro de Atención:
                        <select id='centro' className='w-1/2 flex flex-col'>
                            <option value="Centro de Atención Primaria">
                                Centro de Atención Primaria 08:00-18:00
                            </option>
                            <option value="Centro de Atención Especializada">
                                Centro de Atención Especializada 09:00-17:00
                            </option>
                        </select>
                    </label>
                <label htmlFor="medico" className='flex flex-col'>
                    Nombre Completo:
                    <input type="text" id="medico" required/>
                </label>
                <div className="flex justify-between">
                    <label htmlFor="fecha" className='flex flex-col'>
                        Fecha Disponible:
                        <input type="date" id="fecha" required/>
                    </label>
                    <div className="flex gap-12">
                        <label htmlFor="hora-inicio" className='flex flex-col'>
                            Hora de inicio:
                            <input
                                type="time"
                                id="hora-inicio"
                                name="hora-inicio"
                                min="08:00"
                                max="18:00"
                                required
                                step="1800"/>
                        </label>

                        <label htmlFor="hora-fin" className='flex flex-col'>
                            Hora de fin:
                            <input
                                type="time"
                                id="hora-fin"
                                name="hora-fin"
                                min="08:00"
                                max="18:00"
                                required
                                step="1800"/>
                        </label>

                    </div>
                </div>
                <button type="submit">Registrar Disponibilidad</button>
                </form>
                
                <ul id="listaDisponibilidad"></ul>
            </div>
        </section>
    )
}

export default FormDisponibilidad;
