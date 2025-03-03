import React from 'react';
import ReactDOM from 'react-dom/client';
import {TabsAndPanels} from './presentation/TabsAndPanels'

import "./style.css";

import { GenerateArrayToWorkWith, RunSimpleAlgorithms, RunSortingAlgorithms, RunSearchingAlgorithms, RunSortingPerformanceTest, RunExcercises } from './RunAlgorithms';

var rootElement = null;
var placeHolderOfGenerateArrayToWorkWith = null;

placeHolderOfGenerateArrayToWorkWith = ReactDOM.createRoot(document.getElementById('generate-list-to-work-with'));
placeHolderOfGenerateArrayToWorkWith.render(
  <GenerateArrayToWorkWith/>
);

rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<TabsAndPanels />);

