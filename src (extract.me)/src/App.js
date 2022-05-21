import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CrearReq from "./components/crear_req.component.js";
import CrearDes from "./components/crear_des.component.js";
import AsignarReq from "./components/asignar_req.component";

class App extends Component{
  render()  {
    return(
      <Router>
        <div className="container">          

          <nav className = "navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">RTM (Requirements Traceability Matrix) USC 2022A</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                    <Link to="/create_req" className="nav-link">Crear Requerimiento</Link>                    
                </li>
                <li className="navbar-item">
                    <Link to="/create_dev" className="nav-link">Crear Desarrollador</Link>                    
                </li>     
                <li className="navbar-item">
                    <Link to="/assign" className="nav-link">Asignar Requerimiento</Link>                    
                </li>      
              </ul>              
            </div>
          </nav>

          <Routes>
            <Route path="/create_dev" exact element={<CrearDes/>} />
            <Route path="/assign" element={<AsignarReq/>} />
            <Route path="/create_req" element={<CrearReq/>} />             
          </Routes>         

        </div>
     </Router>
    );
  }
}
export default App;