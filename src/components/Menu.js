import React, { Component } from 'react';


//IMPORTAMOS  NAVLINK Y AXIOS
import { NavLink } from 'react-router-dom';
import axios from 'axios';


//IMPORTAMOS Global.js y el logo

import Global from '../Global';
import logoChampion from '../assets/images/logo.png';



class Menu extends Component {


    //Ponemos el state el false  porque todavia no hemos hechos cambios en la pagina
    state = {
        equipos : [],
        statusGet : false
    }


    //funcion loadEquipos que dentro va, URL y el axios GET PARA RECOGER LOS DATOS DE LA API 
    loadEquipos = () => {
        var url = Global.urlChampions + '/api/Equipos';
        axios.get(url).then(response => {
            this.setState({
                equipos : response.data,
                statusGet : true
            })
        });
    }


    //después de montar un componente (insertado en el árbol).
    // La inicialización que requiere nodos DOM debe ir aquí. 
    componentDidMount = () => {
        this.loadEquipos();
    }



    //se pinta el componente Menu 
    render() {
        return (


            <div>
                <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">

                    {/* Navlink  className para  enviar las rutas con el router */}
                    <NavLink className="navbar-brand" to='/'>
                        <img src={logoChampion} style={{maxHeight:"40px"}}/> &nbsp;
                        Champions
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/apuestas">
                                    Apuestas
                                </NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Equipos
                                </a>



                                {/* en este drop menu es donde se desliza la pagina web  */}
                                <ul className="dropdown-menu">

                                {/* si this.state.statusGet es verdad entonces pintame el item de idequipo (dentro la api) */}
                                    {
                                        (this.state.statusGet == true) && (
                                            this.state.equipos.map((equipo, index) => {
                                                return (
                                                    <li key={equipo.idEquipo}>
                                                        <NavLink className="dropdown-item" to={'/equipo/' + equipo.idEquipo}>
                                                            {equipo.nombre}
                                                        </NavLink>
                                                    </li>
                                                );
                                            })
                                        )
                                    }




                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
                </nav>
            </div>
        )
    }
}

//exportamos el Menu 
export default Menu;