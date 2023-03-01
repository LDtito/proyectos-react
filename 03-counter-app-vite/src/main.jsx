//import FirstApp from './HelloWorldApp';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title="Hola soy Vegeta" subTitle={10}/>
    </React.StrictMode>
)