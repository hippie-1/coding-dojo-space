import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import { DataStructures } from './util/DataStructures';
import { Sequence1, Sequence2, Iteration, IntroducingForkOnlyOddOrEvenNumbers, FibonacciNumbers, RandomNumberArray, RandomEvenNumberArray} from './practicing/BasicElements';

/*
const dataStructures = ReactDOM.createRoot(document.getElementById('data-structures'));
dataStructures.render(
  <React.StrictMode>
    <DataStructures />
  </React.StrictMode>
);
*/
const sequence = ReactDOM.createRoot(document.getElementById('sequence'));
sequence.render(
  <React.StrictMode>
    <Sequence1 />
  </React.StrictMode>
);

const iteration = ReactDOM.createRoot(document.getElementById('iteration'));
iteration.render(
  <React.StrictMode>
    <Iteration />
  </React.StrictMode>
);

const fork = ReactDOM.createRoot(document.getElementById('fork'));
fork.render(
  <React.StrictMode>
    <IntroducingForkOnlyOddOrEvenNumbers />
  </React.StrictMode>
);
