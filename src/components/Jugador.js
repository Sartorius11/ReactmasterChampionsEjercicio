import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { NavLink } from 'react-router-dom';
 
class Jugador extends Component {
    state = {
        jugador : {},
        statusGet : false
    }

    loadJugador = () => {
        var url = Global.urlChampions + "/api/Jugadores/" + this.props.idjugador;
        axios.get(url).then(response => {
            this.setState({
                jugador : response.data,
                statusGet : true
            });
        });
    }

    componentDidMount = () => {
        this.loadJugador();
    }

    render() {
        if (this.state.statusGet == true) {
            return (
                <div>
                    <h1 className='bg-light py-3 border' style={{marginBottom:"10px"}}>
                        {this.state.jugador.nombre}
                    </h1>
                    <img src={this.state.jugador.imagen} className='my-3' style={{maxHeight:"85px"}}/>
                    <h2> {this.state.jugador.posicion} </h2>
                    <p className='my-3'> Fecha de Nacimiento: {this.state.jugador.fechaNacimiento} </p>
                    <p className='my-3'> 
                        País: {this.state.jugador.pais} 
                    </p>
                    <NavLink className='btn btn-success' to={'/jugadores/' + this.state.jugador.idEquipo}>
                        Jugadores
                    </NavLink>
                </div>
            )            
        } else {
            return (<h1 className='my-2'>La página está cargando...</h1>)
        }
    }
}

export default Jugador;