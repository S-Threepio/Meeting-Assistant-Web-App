import React from 'react';
import './searchbox.css'
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

const SearchBox = ({placeholder,handleChange}) =>{
    return (
        <MDBCol md="6" >
          <MDBFormInline className="md-form" >
            <MDBIcon icon="search" />
            <input className="search form-control form-control-sm ml-3 w-75" type="text" placeholder={placeholder} aria-label="Search" onChange = {handleChange}/>
          </MDBFormInline>
        </MDBCol>
      );
}

export default SearchBox
