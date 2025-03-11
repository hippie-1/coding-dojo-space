import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Algorithms } from './practicing/Algorithms';
import { Sequence1, Sequence2, Iteration, IntroducingForkOnlyOddOrEvenNumbers, FibonacciNumbers, RandomNumberArray, RandomEvenNumberArray} from './practicing/BasicElements';
import { initRandomNumberArray } from './util/BasicFunctions';
import { BubbleSorting } from './util/Arrays';

const fibonacci = ReactDOM.createRoot(document.getElementById('fibonacci'));
fibonacci.render(
  <React.StrictMode>
    <FibonacciNumbers />
  </React.StrictMode>
);

const arrayMaker = ReactDOM.createRoot(document.getElementById('counting'));
arrayMaker.render(
  <React.StrictMode>
    <Algorithms />
  </React.StrictMode>
);

const randomNumbers = ReactDOM.createRoot(document.getElementById('random-numbers'));
randomNumbers.render(
  <React.StrictMode>
    <RandomNumberArray />
  </React.StrictMode>
);

const randomEvenNumbers = ReactDOM.createRoot(document.getElementById('random-even-numbers'));
randomEvenNumbers.render(
  <React.StrictMode>
    <RandomEvenNumberArray />
  </React.StrictMode>
);