import { Button } from 'reactstrap';
import Header from '../partials/Header';
import { useState } from 'react';

import {
  Link
} from "react-router-dom";


function Home(){

  const [name, setName] = useState('Home');
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setName('Stateful Home');
    setCount(count + 1);
    console.log(count);
  }


  return(
  <>


    <Header/>


  <div className="jumbotron text-center">
    <h1>{name}</h1>
    <p><Button color="primary"   onClick={handleButtonClick}>Set Name {count}</Button></p>
  </div>

  <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <h3>Column 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </div>
      <div className="col-sm-4">
        <h3>Column 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </div>
      <div className="col-sm-4">
        <h3>Column 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </div>
    </div>
  </div>
  </>
  )
}


export default Home;
