import React, { useEffect, useState } from 'react';

const FormCitas = () => {

    const [paciente, setPaciente] = useState('');
    const [tipo, setTipo] = useState('');
    const [medico, setMedico] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [citas, setCitas] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();

        const nuevaCita = {
            paciente,
            tipo,
            medico,
            fecha,
            hora,
            citas
        };

        // Agregar la nueva cita a la cita existente
        setCitas(prevCitas => [...prevCitas, nuevaCita]);

        // Limpiar el formulario
        setPaciente('');
        setTipo('');
        setMedico('');
        setFecha('');
        setHora('');
    }


    return (
        <section className='w-full flex flex-col justify-center items-center'>
            <h3 className='uppercase'>
                Registro de Citas
            </h3>
            <p>
                Registre aquí su cita médica
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
                    <label htmlFor="paciente" className='flex flex-col'>
                        Nombre del Paciente:
                        <input
                            type="text"
                            id="paciente"
                            placeholder='Ingrese el nombre completo del paciente'
                            value={paciente}
                            onChange={(e) => setPaciente(e.target.value)}
                            required
                        />
                    </label>
                        
                    <label htmlFor="medicoCita" className='flex flex-col'>
                        Médico:
                        <input
                            type="text"
                            id="medicoCita"
                            placeholder='Ingrese el nombre completo del médico'
                            value={medico}
                            onChange={(e) => setMedico(e.target.value)}
                            required
                        />
                    </label>
                    <div className="flex justify-between">
                        <label htmlFor="tipoDeCita" className='flex flex-col'>
                            Tipo de Solicitud:
                            <select
                                id="tipoDeCita"
                                className='w-[15vw]'
                                value={tipo}
                                onChange={(e) => setTipo(e.target.value)}
                                required
                            >
                                <option value="normal">Normal</option>
                                <option value="prioritaria">Prioritaria</option>
                                <option value="urgencia">Urgencia</option>
                            </select>
                        </label>
                        <label htmlFor="fechaCita" className='flex flex-col'>
                            Fecha de la Cita:
                            <input
                                type="date"
                                id="fechaCita"
                                className='w-[15vw]'
                                value={fecha}
                                onChange={(e) => setFecha(e.target.value)}
                                required
                            />
                        </label>

                        <label htmlFor="horaCita" className='flex flex-col'>
                            Hora de la Cita:
                            <input
                                type="time"
                                id="horaCita"
                                className='w-[15vw]'
                                name="horaCita"
                                value={hora}
                                onChange={(e) => setHora(e.target.value)}
                                min="08:00"
                                max="18:00"
                                step="1800"
                                required
                            />
                        </label>
                    </div>
                    <button type="submit">Registrar Cita</button>
                </form>

                <h3>Lista de Citas</h3>
                <ul id="listaCitas">
                    {citas.map((cita, index) => (
                        <li key={index}>
                            <strong>Paciente:</strong> {cita.paciente} <br />
                            <strong>Tipo:</strong> {cita.tipo} <br />
                            <strong>Médico:</strong> {cita.medico} <br />
                            <strong>Fecha:</strong> {cita.fecha} <br />
                            <strong>Hora:</strong> {cita.hora}
                        </li>
                    ))}
                    </ul>
                </div>
        </section>
    );
}

export default FormCitas;
