import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';

class Jugadores extends Component {
    state = {
        jugadores : [],
        statusGet : false 
    }

    loadJugadores = () => {
        var url = Global.urlChampions + '/api/Jugadores/JugadoresEquipo/' + this.props.idequipo;
        axios.get(url).then(response => {
            this.setState({
                jugadores : response.data,
                statusGet : true
            });
        });
    }

    componentDidMount = () => {
        this.loadJugadores();
    }

    render() {
        return (
            <div className='w-75' style={{margin:"10px auto"}}>
                <NavLink className='btn btn-success' style={{marginBottom:"10px"}} 
                         to={'/equipo/' + this.props.idequipo}>
                    Volver
                </NavLink> 
            <div className='border'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Imagen</th>
                                <th>Detalles</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.statusGet == true && (
                                    this.state.jugadores.map((jugador, index) => {
                                        return (
                                            <tr key={jugador.idJugador}>
                                                <td>{jugador.nombre}</td>
                                                <td>
                                                    <img src={jugador.imagen}
                                                         style={{maxHeight:"80px"}}/>
                                                </td>
                                                <td>
                                                    <NavLink to={'/jugador/' + jugador.idJugador} 
                                                             className='btn btn-danger'>
                                                        Detalles
                                                    </NavLink>
                                                </td>
                                            </tr>
                                        );
                                    })
                                )
                            }
                        </tbody>
                    </table>
                    
                </div>
            </div>
        )
    }
}

export default Jugadores;