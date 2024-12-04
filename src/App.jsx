import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormDisponibilidad from './components/forms/FormDisponibilidad.jsx';
import FormCitas from './components/forms/FormCitas.jsx';
import FormCumplimiento from './components/forms/FormCumplimiento.jsx';
import Navbar from './layouts/Navbar';
import { Toaster } from 'react-hot-toast';

const App = () => {

    const [disponibilidad, setDisponibilidad] = useState([]);

    // === AGREGAR NUEVA DISPONIBILIDAD ===
    const agregarDisponibilidad = (nuevaDisponibilidad) => {
        setDisponibilidad(prev => [...prev, nuevaDisponibilidad]);
    }


    return (
        <div>
            <Navbar />
            <main className='px-48 pt-8'>
                <Router>
                    <Routes>
                        <Route index element={
                            <FormDisponibilidad
                                disponibilidad={disponibilidad}
                                agregarDisponibilidad={agregarDisponibilidad}
                            />}
                        />
                        <Route path="citas" element={<FormCitas />} />
                        <Route path="cumplimiento" element={<FormCumplimiento />} />

                    </Routes>
                    <Toaster position="top-center" reverseOrder={false} />
                </Router>
            </main>
        </div>
    )
}

export default App
