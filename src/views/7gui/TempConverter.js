import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormGroup,
  CLabel,
  CInput,
  CAlert,
} from '@coreui/react'

class TempConverter extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      celsius:    0,
      fahrenheit: 32,
      nan:        false
    };

    this.calcCelsius    = this.calcCelsius.bind(this);
    this.calcFahrenheit = this.calcFahrenheit.bind(this);
  }

  calcCelsius(event){
    if( !isNaN(event.target.value) ){
      var new_celsius = ( event.target.value - 32 ) * (5/9);
      this.setState({
        celsius: new_celsius,
        fahrenheit: event.target.value,
        nan: false
      });
    }else{
      this.setState({
        fahrenheit: event.target.value,
        nan: true
      });
    }

  }

  calcFahrenheit(event){
    if( !isNaN(event.target.value) ){
      var new_fahrenheit = ( event.target.value) * (9/5) + 32;
      this.setState({
        fahrenheit: new_fahrenheit,
        celsius: event.target.value,
        nan: false
      });
    }else{
      this.setState({
        celsius: event.target.value,
        nan: true
      });
    }
    

  }
  render(){
  	return (
    	<>
      		<CCard>
        		<CCardHeader>
          			Temperature Converter
        		</CCardHeader>
        		<CCardBody>
              <CRow>
                <CCol xs="12" md="6">
                  <CFormGroup row>
                    
                    <CCol xs="6">
                    <CInput  id="celsius" value={this.state.celsius} className={this.state.nan ? 'border border-danger' : ''} onChange={ this.calcFahrenheit } />
                    </CCol>
                    <CCol xs="6">
                    <CLabel  htmlFor="celsius">Celsius</CLabel>
                    </CCol>
                  </CFormGroup>
                </CCol>

                <CCol xs="12" md="6">
                  <CFormGroup row>
                    
                    <CCol xs="6">
                    <CInput  id="fahrenheit" value={this.state.fahrenheit} className={this.state.nan ? 'border border-danger' : ''} onChange={ this.calcCelsius } />
                    </CCol>
                    <CCol xs="6">
                    <CLabel  htmlFor="fahrenheit">Fahrenheit</CLabel>
                    </CCol>
                  </CFormGroup> 
                </CCol>
                <CCol xs="12">
                <CAlert color="danger" className={ this.state.nan ? '' : 'd-none' }>
                  Values must be numeric, please check your input
                </CAlert>
                </CCol>
              </CRow>
        		</CCardBody>
      		</CCard>
    	</>
    );
  }

}
export default TempConverter
