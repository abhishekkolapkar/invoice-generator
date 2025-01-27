import React, { Component } from "react";
import Container from "react-bootstrap/Container";

import InvoiceForm from "./components/InvoiceForm";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column align-items-center justify-content-center w-100">
        <Container>
          <InvoiceForm />
        </Container>
      </div>
    );
  }
}

export default App;
