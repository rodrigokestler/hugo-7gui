import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CProgress,
  CInput,
  CLabel
} from '@coreui/react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';


class Timer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      progress: 0,
      counter: 0,
      limit: 0
    };
    this.timerID = null;

    this.updateLimit   = this.updateLimit.bind(this);
    this.resetTimer    = this.resetTimer.bind(this);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateLimit(val){

    this.setState({
      limit: val
    });

  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick(){

    if( this.state.limit > 0 ){
      var progress = parseInt( ( (this.state.counter + 1) / this.state.limit ) * 100 );
      if( progress <= 100 ){
        this.setState({
          counter: this.state.counter + 1,
          progress: progress
        });
      }
      
    }
  }
  resetTimer(){

    this.setState({
      counter: 0,
      progress: 0,
      
    });

  }
  render(){
    
  	return (
    	<>
      		<CCard>
        		<CCardHeader>
              Timer
        		</CCardHeader>
        		<CCardBody>
              <CRow>
                <CCol xs="12" className="mb-1">
                  <CProgress animated value={this.state.progress} className="mb-3" />
                </CCol>
                <CCol xs="12" className="mb-1">
                  <CLabel  htmlFor="counter">Elapsed Seconds</CLabel>
                </CCol>
                <CCol xs="12" className="mb-1">
                  <CInput  id="counter" value={this.state.counter} readOnly />
                </CCol>
                <CCol xs="12" className="mt-1">
                  <CLabel >Duration ({this.state.limit}s)</CLabel>
                </CCol>
                <CCol xs="12" className="my-2">
                  
                  <Slider onChange={this.updateLimit} />
                </CCol>
                <CCol xs="12" className="my-4">
                  <CButton block onClick={ this.resetTimer} color="primary">Reset Timer</CButton>
                </CCol>
              </CRow>
        		</CCardBody>
      		</CCard>
    	</>
    );
  }
}

export default Timer
