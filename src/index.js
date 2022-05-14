import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import { GifApp } from './GifApp'

import './index.css';


const container = document.getElementById('root')
const root = createRoot(container); 
root.render( <GifApp/>  )


