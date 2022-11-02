import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Menu from './Menu';
import Home from './Home';
import Equipo from './Equipo';
import Jugadores from './Jugadores';
import Jugador from './Jugador';
import Apuestas from './Apuestas';
import CreateApuesta from './CreateApuesta';

class Router extends Component {
    render() {
        function EquipoElement () {
            var { idequipo } = useParams();
            return (
                <Equipo idequipo={idequipo}/>
            )
        }

        function JugadoresElement () {
            var { idequipo } = useParams();
            return (
                <Jugadores idequipo={idequipo}/>
            )
        }

        function JugadorElement () {
            var { idjugador } = useParams();
            return (
                <Jugador idjugador={idjugador}/>
            )
        }

        return (
            <BrowserRouter>
            <Menu/>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/equipo/:idequipo' element={<EquipoElement />}/>
                    <Route path='/jugadores/:idequipo' element={<JugadoresElement />}/>
                    <Route path='/jugador/:idjugador' element={<JugadorElement />}/>
                    <Route path='/apuestas' element={<Apuestas />}/>
                    <Route path='/createapuesta' element={<CreateApuesta />}/>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router;