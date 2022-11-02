import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';

class Equipo extends Component {
    state = {
        equipo : {},
        statusGet : false
    }

    loadEquipo = () => {
        var url = Global.urlChampions + '/api/Equipos/' + this.props.idequipo;
        axios.get(url).then(response => {
            this.setState({
                equipo : response.data,
                statusGet : true
            });
        });
    }

    componentDidMount = () => {
        this.loadEquipo();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.idequipo != this.props.idEquipo) {
            this.loadEquipo();
        }
    }

    render() {
        if (this.state.statusGet != true) {
            return (<h1 className='my-2'>La página está cargando...</h1>);
        } else {
            return (
                <div className='w-75 border' style={{margin:"10px auto"}}>
                    <h1 className='bg-light border py-2 font-monospace'>
                        {this.state.equipo.nombre}
                    </h1>
                    <img src={this.state.equipo.imagen} style={{maxHeight:"25vh"}}/>
                    <h3>Champions: {this.state.equipo.champions}</h3>
                    <p className='font-monospace'>
                        {this.state.equipo.descripcion}
                    </p>
                    <NavLink className='btn btn-success' style={{marginBottom:"10px"}}
                             to={'/jugadores/' + this.state.equipo.idEquipo}>
                        Jugadores
                    </NavLink> &nbsp;

                    <NavLink className='btn btn-primary' style={{marginBottom:"10px"}} 
                             to='/'>
                        Volver
                    </NavLink> 
                </div>
            );
        }
    }
}

export default Equipo;