import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormGroup,
  CLabel,
  CInput,
} from '@coreui/react'

class Counter extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      counter:0
    };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter(){
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render(){
      return (<> 
          <CCard>
            <CCardHeader>
                Counter
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12">
                  <CFormGroup row>
                    <CCol xs="12">
                    <CLabel  htmlFor="name">Current Value</CLabel>
                    </CCol>
                    <CCol xs="6">
                    <CInput  id="name" value={this.state.counter} readOnly />
                    </CCol>
                    <CCol xs="6">
                    <CButton  block onClick={ this.incrementCounter} color="primary">Count</CButton>
                    </CCol>
                  </CFormGroup>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
      </>
      );
  }
}


export default Counter
