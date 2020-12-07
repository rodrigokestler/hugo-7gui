import React from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CSelect,
  CFormGroup,
  CLabel,
  CInput,
  CAlert
} from '@coreui/react';
import moment from 'moment';

class FlightBooker extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      departure_date: null,
      return_date: null,
      one_way_flight: true,
      dates_error: false,
      booked: false,
      error_message: ''
    };

    this.bookFlight    = this.bookFlight.bind(this);
    this.flightType    = this.flightType.bind(this);
    this.checkIfValidDepartureDate = this.checkIfValidDepartureDate.bind(this);
    this.checkIfValidReturnDate    = this.checkIfValidReturnDate.bind(this);
  }

  checkIfValidDepartureDate(event){

    var new_departure_date = typeof event !== "undefined" ? moment(event.target.value, "YYYY-MM-DD") : moment(this.state.departure_date, "YYYY-MM-DD");
    
    if( new_departure_date.isValid() ){
      
      this.setState({
          departure_date: new_departure_date.format("YYYY-MM-DD"),
          dates_error: false
        });
      
      if( !this.state.one_way_flight ){

        var return_date = moment(this.state.return_date,"YYYY-MM-DD");

        if( return_date.isValid() ){
            
          if( return_date.isAfter(new_departure_date) ){
            
            this.setState({
              dates_error:false
            });

          }else{
            
            this.setState({
              dates_error:true,
              error_message: "Return date needs to be greater than departure date"
            });
          }
        }

      }
      
    }else{
        
        this.setState({
          departure_date: null,
          dates_error:true,
          error_message: "Departure date does not seem to be a valid date"
        });
      }
    
    
  }

  checkIfValidReturnDate(event){

    var new_return_date = typeof event !== "undefined" ? moment(event.target.value, "YYYY-MM-DD") : moment(this.state.return_date, "YYYY-MM-DD");
    
    if( new_return_date.isValid() ){
      
      this.setState({
        return_date: new_return_date.format("YYYY-MM-DD")
      });
     
      var departure_date = moment(this.state.departure_date,"YYYY-MM-DD");

      if( departure_date.isValid() ){
          
        if( new_return_date.isAfter(departure_date) ){
          
          this.setState({
            dates_error:false
          });

        }else{
          
          this.setState({
            dates_error:true,
            error_message: "Return date needs to be greater than departure date"
          });
        }
      }else{
        this.setState({
            dates_error:true,
            error_message: "Please select a departure date"
          });
      }

    }
    
    
  }

  bookFlight(){
    
    this.setState({
        
        booked: true

      });

  }

  flightType(event){

    if( event.target.value == 'one-way'){

      this.setState({
        one_way_flight: true
      });

    }else{
      //return flight
      this.setState({
        one_way_flight: false
      });

    }
    
  }
  render(){
    return (
      <>
          <CCard>
            <CCardHeader>
                Flight Booker
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" className="mb-1">
                  <CSelect defaultValue="one-way" disabled={this.state.booked} custom name="flight_type" id="flight_type" onChange={this.flightType}>
                      <option  value="one-way">one-way flight</option>
                      <option value="return">return flight</option>
                    </CSelect>
                </CCol>
                <CCol xs="6" className="mb-1">
                  <CLabel htmlFor="departure_date">Departure Date</CLabel>
                  <CInput type="date" id="departure_date" onChange={this.checkIfValidDepartureDate} readOnly={this.state.booked} name="departure_date"  />
                </CCol>
                <CCol xs="6" className={`mb-1 ${this.state.one_way_flight ? 'd-none' : ''}`}>
                  <CLabel htmlFor="return_date">Return Date</CLabel>
                  <CInput type="date" id="return_date" name="return_date" onChange={this.checkIfValidReturnDate} readOnly={this.state.one_way_flight || this.state.booked} />
                
                </CCol>
                <CCol xs="12" className="my-2">
                  <CButton  disabled={this.state.dates_error || this.state.booked || (!this.state.departure_date && !this.state.return_date)} block onClick={ this.bookFlight} color="primary">Book Flight</CButton>
                </CCol>
                <CCol xs="12">
                <CAlert color="danger" className={ this.state.dates_error  ? '' : 'd-none'}>
                  {this.state.error_message}
                </CAlert>
                </CCol>
                <CCol xs="12">
                <CAlert color="success" className={this.state.booked ? '' : 'd-none'}>
                  You have a flight booked on { this.state.departure_date }
                </CAlert>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
      </>
    );
  }

}

export default FlightBooker
