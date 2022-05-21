import React, { Component } from 'react';

export default class CrearReq extends Component {

    constructor(props)
    {
        super(props);
        this.onChangeadmin = this.onChangeadmin.bind(this);
        this.onChangenp = this.onChangenp.bind(this);
        this.onChangefi = this.onChangefi.bind(this);
        this.onChangeff = this.onChangeff.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state=
        {
           dev_np:'',
           dev_admin:'',
           dev_fi:''
        }
    }

    onChangenp(e)
    {
        this.setState(
            {dev_np: e.target.value}
        )
    }

    onChangeadmin(e)
    {
        this.setState(
            {dev_admin: e.target.value}
        )
    }

    onChangefi(e)
    {
        this.setState(
            {dev_fi: e.target.value}
        )
    }

    onChangeff(e)
    {
        this.setState(
            {dev_ff: e.target.value}
        )
    }

   
    onSubmit(e)
    {
        e.preventDefault();

        console.log(`Se envio el formulario de crear requerimiento`);
        console.log(`Nombre del proyecto: ${this.state.dev_np}`);
        console.log(`Nombre del administrador del requerimiento: ${this.state.dev_admin}`);
        console.log(`Fecha de inicio: ${this.state.dev_fi}`);
        console.log(`Fecha estimada de finalizacion: ${this.state.dev_ff}`);

    }

    render() {
        return(
          <div style={{marginTop: 10}} >
              <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Nombre del requerimiento:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.dev_np}
                               onChange={this.onChangenp}
                        />                        
                    </div>
                    <br>
                        </br>
                    <div className='form-group'>
                        <label>Nombre del administrador del requerimiento:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.dev_admin}
                               onChange={this.onChangeadmin}
                        />                        
                    </div>
                    <br>
                        </br>
                    <div className='form-group'>
                        <label>Fecha de Inicio:</label>
                        <br>
                        </br>
                        <input type="date" id="start" value={this.state.dev_fi}
                               onChange={this.onChangefi} name="trip-start"
       
       min="1990-01-01" max="2025-12-31"
                        />                        
                    </div>
                    <br>
                        </br>

                    <div className='form-group'>
                        <label>Fecha estimada de Finalizacion:</label>
                        <br>
                        </br>
                        <input type="date" id="start" value={this.state.dev_ff}
                               onChange={this.onChangeff} name="trip-start"
       
       min="1990-01-01" max="2025-12-31"
                        />                        
                    </div>


                    <br/>                                   
                    <div className="form-group">
                        <input type="Submit" value="Guardar" className="btn btn-primary" />
                    </div>
              </form>
          </div>
        )
    }
}