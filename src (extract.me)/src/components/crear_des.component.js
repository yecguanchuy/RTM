import React, {Component} from 'react'

export default class CrearDes extends Component{


    constructor(props)
    {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangetelefono = this.onChangetelefono.bind(this);
        this.onChangeDocument = this.onChangeDocument.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state=
        {
           dev_document:'',
           dev_name:'',
           dev_telefono:'',
           dev_email:''
        }
    }

    onChangeDocument(e)
    {
        this.setState(
            {dev_document: e.target.value}
        )
    }

    onChangeemail(e)
    {
        this.setState(
            {dev_email: e.target.value}
        )
    }

    onChangetelefono(e)
    {
        this.setState(
            {dev_telefono: e.target.value}
        )
    }

    onChangeName(e)
    {
        this.setState(
            {dev_name: e.target.value}
        )
    }

    onSubmit(e)
    {
        e.preventDefault();

        console.log(`Se envio el formulario`);
        console.log(`Todo Description: ${this.state.dev_document}`);
        console.log(`Documento del desarrollador: ${this.state.dev_document}`);
        console.log(`Telefono del desarrollador: ${this.state.dev_telefono}`);
        console.log(`Email del desarrollador: ${this.state.dev_email}`);

    }

    render()
    {
        return(
          <div style={{marginTop: 10}} >
              <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Numero del documento del Desarrollador:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.dev_document}
                               onChange={this.onChangeDocument}
                        />                        
                    </div>
                    <div className='form-group'>
                        <label>Nombre y Apellido del Desarrollador:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.dev_name}
                               onChange={this.onChangeName}
                        />                        
                    </div>
                    <div className='form-group'>
                        <label>Telefono o celular del desarrollador:</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.dev_telefono}
                               onChange={this.onChangetelefono}
                        />                        
                    </div>

                    <div className='form-group'>
                        <label>Email:</label>
                        <input type="text"
                               className="form-control" 
                               value={this.state.dev_email}
                               onChange={this.onChangeemail}
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