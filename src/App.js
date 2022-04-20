import './App.css';
import imagenBanner from './Imagen/calculadora.jpg'
import Boton from './componente/boton';
import Pantalla from './componente/Pantalla';
import BotonClear from './componente/Clear';
import {useState} from 'react'
import React from 'react';
import { evaluate } from 'mathjs';

function App() {

    const [input, setInput] = useState ('');

    const ingresaInput = valor =>{
      setInput(input + valor);
    };

    const calcularResultado = () =>{
      if(input){
      setInput(evaluate(input));}else{
        alert("Ingrese valores para calcular");
      }
    }


  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img
        src={imagenBanner}
        className='logoBanner'
        alt='Imagen not Found'
        />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={ingresaInput}>1</Boton>
          <Boton manejarClic={ingresaInput}>2</Boton>
          <Boton manejarClic={ingresaInput}>3</Boton>
          <Boton manejarClic={ingresaInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={ingresaInput}>4</Boton>
          <Boton manejarClic={ingresaInput}>5</Boton>
          <Boton manejarClic={ingresaInput}>6</Boton>
          <Boton manejarClic={ingresaInput} >-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={ingresaInput}>7</Boton>
          <Boton manejarClic={ingresaInput}>8</Boton>
          <Boton manejarClic={ingresaInput}>9</Boton>
          <Boton manejarClic={ingresaInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={ingresaInput}>0</Boton>
          <Boton manejarClic={ingresaInput}>.</Boton>
          <Boton manejarClic={ingresaInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>CLEAR</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
