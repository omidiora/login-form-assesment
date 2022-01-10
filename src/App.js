import React from "react";

import LoginForm from './LoginForm';
import './App.css';
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/index";

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <React.Fragment>
      <LoginForm/>
    </React.Fragment>
  );
}

export default App;
