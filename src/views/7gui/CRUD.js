import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CInput,
  CLabel,
  CToast,
  CToastBody,
  CToastHeader,
  CToaster,
} from '@coreui/react'
import Select from 'react-select'
import PouchDB from 'pouchdb';
import AddUser from "./db/AddUser";
import DeleteUser from "./db/DeleteUser";
import UpdateUser from "./db/UpdateUser";

class CRUD extends React.Component{
  	
  constructor(props){
    super(props);
    this.db = new PouchDB('crud');
    this.selectedOption = null;
    this.state = {
      selectedOption: null,
      listUsers: [],
      options:[
        {"value": "Hans Emil",      "label": "Hans Emil",     "first_name": "Hans", "surname": "Emil"},
        {"value": "Max Musterman",  "label": "Max Musterman", "first_name": "Max",  "surname": "Musterman"},
      ],
      name: "",
      surname: ""
    };
    this.selectChange   = this.selectChange.bind(this);
    this.nameChange     = this.nameChange.bind(this);
    this.surnameChange  = this.surnameChange.bind(this);
    this.create  = this.create.bind(this);
    this.update  = this.update.bind(this);
    this.delete  = this.delete.bind(this);
    this.loadUserList  = this.loadUserList.bind(this);
  }

  loadUserList(){
    //Cargar todos los documentos existentes y construir listado utilizado por el select dropdown
        let currentComponent = this;
        this.db.allDocs({include_docs: true, descending: true})
        .then(function(doc) {
            
            var options = [];
            doc.rows.forEach(function(el){
              options.push({
                value: el.doc.value,
                label: el.doc.label,
                name: el.doc.name,
                surname: el.doc.surname,
                user: el
              });
            });
            currentComponent.setState({
              listUsers :  doc.rows,
              options: options
            });
        }).catch(function (err) {
            console.log(err);
        });
    }

  componentDidMount(){
    //Inicializar listado de usuarios existentes en la base de datos
        let currentComponent = this;
        currentComponent.db.allDocs({include_docs: true, descending: true})
        .then(function(doc) {
            var options = [];
            doc.rows.forEach(function(el){
              options.push({
                value: el.doc.value,
                label: el.doc.label,
                name: el.doc.name,
                surname: el.doc.surname,
                user: el
              });
            });
            currentComponent.setState({
              listUsers :  doc.rows,
              options: options
            });
        }).catch(function (err) {
            console.log(err);
        });
    }
  componentDidUpdate(prevProps, prevState, snapshot) {
    //Crear evento para actualizar listado de usuarios cuando haya un cambio en la base de datos
      let currentComponent = this;
      currentComponent.db.changes({
          since: 'now',
          live: true
      }).on('change', currentComponent.loadUserList);
  }

  create(){
    //Crear usuario
    var full_name = this.state.name + " " + this.state.surname;
    var data = {
      value: full_name,
      label: full_name,
      name: this.state.name, 
      surname: this.state.surname
    };
    AddUser(data);
    this.setState({
      name: "",
      surname: ""
    });
  }

  update(){
    //Actualizar usuario
    if( this.selectedOption ){
      var full_name = this.state.name + " " + this.state.surname;
      this.selectedOption.user.doc.name = this.state.name;
      this.selectedOption.user.doc.surname = this.state.surname;
      this.selectedOption.user.doc.value = full_name;
      this.selectedOption.user.doc.label = full_name;
      UpdateUser(this.selectedOption.user.doc);
      this.selectedOption = null;
      this.setState({ 
        selectedOption: null,
        name: "",
        surname: "",
      });
    }
  }

  delete(){
    //Eliminar un usuario
    DeleteUser(this.selectedOption.user.doc);
    this.selectedOption = null;
    this.setState({
      name: "",
      surname: "",
      selectedOption: null
    });
  }

  selectChange = selectedOption => {
    
    this.selectedOption = selectedOption;
    this.setState({ 
      
      name: selectedOption.name,
      surname: selectedOption.surname,
      selectedOption: selectedOption
    });
    
  };
  nameChange(event){
    
    this.setState({ 
      name: event.target.value
    });
  }
  surnameChange(event){
    
    this.setState({ 
      surname: event.target.value
    });
  }
  render(){
    
    return (
      <>
          <CCard>
            <CCardHeader>
                CRUD
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="6" className="mb-1">
                  <CLabel >Users</CLabel>
                  <Select
                    value={this.state.selectedOption}
                    onChange={this.selectChange}
                    options={this.state.options}
                  />
                </CCol>
                <CCol xs="6" className="mb-1 border border-light p-2">
                  <CLabel htmlFor="name">Name</CLabel>
                  <CInput value={this.state.name} name="name" onChange={this.nameChange} />
                  <CLabel htmlFor="surname">Surname</CLabel>
                  <CInput value={this.state.surname} name="surname" onChange={this.surnameChange} />
                
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="4" className="my-1">
                  <CButton block  color="primary" disabled={this.state.name && this.state.surname ? false : true } onClick={this.create}>Create</CButton>
                </CCol>
                <CCol xs="4" className="my-1">
                  <CButton block  color="warning" disabled={this.selectedOption ? false : true} onClick={this.update}>Update</CButton>
                </CCol>
                <CCol xs="4" className="my-1">
                  <CButton block  color="danger" disabled={this.selectedOption ? false : true} onClick={this.delete}>Delete</CButton>
                </CCol>
              </CRow>

            </CCardBody>
          </CCard>
      </>
    );
  }

}

export default CRUD
