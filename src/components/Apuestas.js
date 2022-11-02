import React, { Component } from 'react';

//importamos  global , axios, navlink
import Global from '../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
 
class Apuestas extends Component {


    state = {
        apuestas : [],
        statusGet : false
    }


    loadApuestas = () => {
        var url = Global.urlChampions + "/api/apuestas";
        axios.get(url).then(response => {
            this.setState({
                apuestas : response.data,
                statusGet : true
            });
        });
    }


    componentDidMount = () => {
        this.loadApuestas();
    }



    render() {
        return (

            <div className='w-75' style={{margin:"10px auto"}}>
                <NavLink className='btn btn-danger' style={{marginBottom:"10px"}} 
                         to='/createapuesta/'>
                    Realizar Apuesta
                </NavLink> 


            <div className='border'>

                {/* creamos una tabla para las apuestas */}
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Usuario</th>
                                <th>Resultado</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.statusGet == true && (
                                    this.state.apuestas.map((apuesta, index) => {
                                        return (
                                            <tr key={apuesta.idApuesta}>
                                                <td>{apuesta.usuario}</td>
                                                <td>{apuesta.resultado}</td>
                                                <td>{apuesta.fecha}</td>
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


export default Apuestas;