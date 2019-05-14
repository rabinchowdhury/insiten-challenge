import React from "react";
import { MDBInput, MDBCol } from "mdbreact";

const SearchBar = () => {
  return (
    <MDBCol md="6">
      <MDBInput hint="Search for Target Companies" type="text" containerClass="mt-0" />
    </MDBCol>
  );
}

export default SearchBar;