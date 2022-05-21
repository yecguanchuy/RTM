import React, { Component } from 'react';

export default class AsignarReq extends Component {

    constructor(props)
    {
        super(props);  
        this.onChangeDocument = this.onChangeDocument.bind(this);
        this.onChangeea = this.onChangeea.bind(this);
        this.onChangefd = this.onChangefd.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state=
        {
           dev_document:'',
           dev_fd:'',
           dev_ea:''
           
        }
    }

    onChangeDocument(e)
    {
        this.setState(
            {dev_document: e.target.value}
        )
    }
    onChangeea(e)
    {
        this.setState(
            {dev_ea: e.target.value}
        )
    }
    onChangefd(e)
    {
        this.setState(
            {dev_fd: e.target.value}
        )
    }

    onSubmit(e)
    {
        e.preventDefault();

        console.log(`Se envio la asignacion de requerimiento`);
        console.log(`Fecha de Asignacion: ${this.state.dev_ea}`);
        console.log(`Fecha de Inicio del desarrollo: ${this.state.dev_fd}`);

    }

    render() {
        return(
          <div style={{marginTop: 10}} >
              <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Fecha de asignacion:</label>
                        <br>
                        </br>
                        <input type="date" id="start" value={this.state.dev_ea}
                               onChange={this.onChangeea} name="trip-start"
       
       min="1990-01-01" max="2025-12-31"
                        />                        
                    </div>
                    <br>
                        </br>

                    <div className='form-group'>
                        <label>Fecha de Inicio del desarrollo:</label>
                        <br>
                        </br>
                        <input type="date" id="start" value={this.state.dev_fd}
                               onChange={this.onChangefd} name="trip-start"
       
       min="1990-01-01" max="2025-12-31"
                        />                        
                    </div>
                    <br>
                        </br>

                    <div className='form-group'>
                        <label>Estado inicial del requerimiento:</label>
                        <br>
                        </br>
                        <select name="estado">

<option>Requerimiento al 0% (Vacio)</option>

<option>Requerimiento al 30% (Tiene datos pero hace falta mas trabajo)</option>

<option>Requerimiento al 80% (Esta casi completo)</option>

<option>Requerimiento al 100% (Requerimiento Completado)</option>


</select>                        
                    </div>
                    <br>
                        </br>
                    <div className='form-group'>
                        <label>Digite numero del documento del desarrollador al que desea re-asignarlo:</label>
                        <input type="text"
                               className="form-control" 
                               value={this.state.dev_document}
                               onChange={this.onChangeDocument}
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