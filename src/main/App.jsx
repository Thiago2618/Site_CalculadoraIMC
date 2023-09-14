import React from "react";
import { ReactDOM } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';

import Nav from "../components/templates/Nav";
import Home from "../components/templates/Home";
import './App'
import Calc from "../components/templates/Calc";


export default props =>
<React.Fragment>
    <Nav/>
    <Home/>
</React.Fragment>