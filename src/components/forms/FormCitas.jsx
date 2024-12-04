import React, { useState } from "react";
import CentroDropdown from "../ui/CentroDropdown";
import { centrosAtencion } from "../../utils/centros";
import { esCedulaValida, esFechaValida } from "../../utils/functions";

const FormCitas = () => {
    const [centro, setCentro] = useState("Seleccione un de atención");
    const [paciente, setPaciente] = useState('');
    const [cedula, setCedula] = useState('');
    const [tipo, setTipo] = useState('');
    const [medico, setMedico] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [citas, setCitas] = useState([]);

    const centroSeleccionado = centrosAtencion.find(c => c.nombre === centro);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!esFechaValida(fecha)) {
            toast.error('La fecha ingresada debe ser posterior a la fecha actual.')
            return;
        }

        if (!esCedulaValida(cedula)) {
            toast.error('La cédula debe contener 10 dígitos');
            return;
        }


        const nuevaCita = {
            paciente,
            tipo,
            medico,
            fecha,
            hora,
            centro,
        };

        // Agregar la nueva cita a la lista existente
        setCitas((prevCitas) => [...prevCitas, nuevaCita]);
        console.log(citas);

        // Limpiar el formulario
        setCentro("Seleccione un centro de atención");
        setPaciente("");
        setTipo("");
        setMedico("");
        setFecha("");
        setHora("");
    };

    return (
        <section className="w-full flex flex-col justify-center items-center">
            <div className="w-2/3 flex flex-col justify-center items-center">
                <h3 className="uppercase text-xl font-bold">Registro de Citas</h3>
                <p className="text-gray-600">
                    Complete el formulario para registrar una nueva cita médica
                </p>
                <div
                    className="w-full flex flex-col bg-neutral-50 py-8 px-10 rounded-lg shadow-lg gap-6
                    mt-6"
                >
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <CentroDropdown value={centro} onChange={e => setCentro(e.target.value)} />
                        <label htmlFor="paciente" className="flex flex-col">
                            Nombre del Paciente:
                            <input
                                type="text"
                                id="paciente"
                                placeholder="Ingrese el nombre completo del paciente"
                                value={paciente}
                                onChange={(e) => setPaciente(e.target.value)}
                                required
                            />
                        </label>

                        <label htmlFor="medicoCita" className="flex flex-col">
                            Médico:
                            <input
                                type="text"
                                id="medicoCita"
                                placeholder="Ingrese el nombre completo del médico"
                                value={medico}
                                onChange={(e) => setMedico(e.target.value)}
                                required
                            />
                        </label>
                        <div className="flex justify-between gap-4">
                            <label htmlFor="tipoDeCita" className="flex flex-col w-1/3">
                                Tipo de Solicitud:
                                <select
                                    id="tipoDeCita"
                                    value={tipo}
                                    onChange={(e) => setTipo(e.target.value)}
                                    required
                                >
                                    <option disabled value="">
                                        Seleccione el tipo de cita
                                    </option>
                                    <option value="normal">Normal</option>
                                    <option value="prioritaria">Prioritaria</option>
                                    <option value="urgencia">Urgencia</option>
                                </select>
                            </label>
                            <label htmlFor="fechaCita" className="flex flex-col w-1/3">
                                Fecha de la Cita:
                                <input
                                    type="date"
                                    id="fechaCita"
                                    value={fecha}
                                    onChange={(e) => setFecha(e.target.value)}
                                    required
                                />
                            </label>

                            <label htmlFor="horaCita" className="flex flex-col w-1/3">
                                Hora de la Cita:
                                <input
                                    type="time"
                                    id="horaCita"
                                    value={hora}
                                    onChange={(e) => setHora(e.target.value)}
                                    min="08:00"
                                    max="18:00"
                                    step="1800"
                                    required
                                />
                            </label>
                        </div>
                        <button
                            type="submit"
                            className=""
                        >
                            Registrar Cita
                        </button>
                    </form>

                    <h3 className="text-lg font-semibold">Lista de Citas</h3>
                    <ul id="listaCitas" className="list-disc ml-6">
                        {citas.map((cita, index) => (
                            <li key={index} className="mb-4">
                                <strong>Centro:</strong> {cita.centro} <br />
                                <strong>Paciente:</strong> {cita.paciente} <br />
                                <strong>Tipo de Cita:</strong> {cita.tipo} <br />
                                <strong>Médico:</strong> {cita.medico} <br />
                                <strong>Fecha:</strong> {cita.fecha} <br />
                                <strong>Hora:</strong> {cita.hora}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FormCitas;
