import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';

class CreateApuesta extends Component {
    cajaUsuario = React.createRef();
    cajaResultado = React.createRef();
    cajaFecha = React.createRef();

    state = {
        statusPost : false
    }

    postApuesta = (e) => {
        e.preventDefault();

        var usuario = this.cajaUsuario.current.value;
        var resultado = this.cajaResultado.current.value;
        var fecha = this.cajaFecha.current.value;

        var apuesta = {
            idApuesta : 1,
            usuario : usuario,
            resultado : resultado,
            fecha: fecha
        }

        var url = Global.urlChampions + "/api/Apuestas";
        axios.post(url, apuesta).then(response => {
            this.setState({
                statusPost : true
            })
        })
    }

    render() {
        if (this.state.statusPost == true) {
            return (
                <Navigate to='/apuestas'/>
            );    
        }

        return (
            <div>
                <h1 className='py-2 bg-info text-white'>Nueva apuesta</h1>
                <form onSubmit={this.postApuesta} className='w-75' style={{margin:"10px auto"}}>
                    <label>Usuario:</label>
                    <input type='text' className='form-control' required ref={this.cajaUsuario}/>

                    <label>Resultado:</label>
                    <input type='text' className='form-control' required ref={this.cajaResultado}/>
                    
                    <label>Fecha:</label>
                    <input type='text' className='form-control' required ref={this.cajaFecha}/>

                    <button className='btn btn-primary my-2'>
                        Nueva Apuesta
                    </button>
                </form>
            </div>
        );
    }
}

export default CreateApuesta;