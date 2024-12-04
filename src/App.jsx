import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './layouts/Navbar';

const App = () => {
    return (
        <div>
            <Navbar />
            <main className='px-48 pt-8'>
                <Outlet />
            </main>
            
        </div>
    )
}

export default App
