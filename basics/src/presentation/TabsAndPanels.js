import Tabs from "./Tabs";
import Panel from "./Panel";

import { panelElements } from "./panelElements";
import { GenerateArrayToWorkWith, RunSimpleAlgorithms, RunSortingAlgorithms, RunSearchingAlgorithms, RunSortingPerformanceTest, RunExcercises } from '../RunAlgorithms';

export function TabsAndPanels() {
    return (
      <Tabs>
        <Panel title="Simple List Algorithms">
          <button onClick={RunSimpleAlgorithms}>Start simple algorithms</button><br/><br/>
          {
          panelElements
            .filter(htmlElement => htmlElement.panelId === "simpleListAlgorithms")
            .map(htmlElement => {
              return <div id={htmlElement.id} key={htmlElement.id}>{htmlElement.title}</div>;
            })
            }
        </Panel>
  
        <Panel title="Sorting List Algorithms">
          <button onClick={RunSortingAlgorithms}>Start sorting algorithms</button><br/><br/>
          {panelElements
            .filter(htmlElement => htmlElement.panelId === "sortingListAlgorithms") 
            .map(htmlElement => {
              return <div id={htmlElement.id} key={htmlElement.id}>{htmlElement.title}</div>;
            })}
          <br/><br/><button onClick={RunSortingPerformanceTest}>Start sorting performance tests</button><br/><br/>
          <div id="sortingPerformanceTestPlaceHolder">Result of sorting performance tests</div>
        </Panel>
  
        <Panel title="Searching List Algorithms">
          <input 
                  id="valueToSearch"
                  type="text" 
                  defaultValue="20"
                  //value="20"
                  placeholder="search value"
                  //onChange={(e) => setNumberOfElementsInGeneratedArray(e.target.value)}
          />
          <button onClick={RunSearchingAlgorithms}>Start searching algorithms</button><br/><br/>
          {
          panelElements
            .filter(htmlElement => htmlElement.panelId === "searchingListAlgorithms")
            .map(htmlElement => {
            return <div id={htmlElement.id} key={htmlElement.id}>{htmlElement.title}</div>;
          })
          }
        </Panel>
  
        <Panel title="Excercises">
          <button onClick={RunExcercises}>Run excercises</button><br/><br/>
          <p id="searching-list-algorithms-exercise"><h5>1. Könyvtári keresés</h5>
          <p id="original-booklist-to-work-with">Original list placeholder</p>
          <p id="linear-search-sortedBooks">Placeholder for linear search of the sorted books</p>
          <h5>Binary searches from the sorted books:</h5>
          <p id="binary-search-iterative-student1">Placeholder for iterative binary search of STUDENT1</p>     
          <p id="binary-search-iterative-student2">Placeholder for iterative binary search of STUDENT2</p>     
          <p id="binary-search-iterative-student3">Placeholder for iterative binary search of STUDENT3</p>     
          <p id="binary-search-iterative-student4">Placeholder for iterative binary search of STUDENT4</p>     
          <p id="binary-search-iterative-student5">Placeholder for iterative binary search of STUDENT5</p>     
        </p>
          {panelElements
            .filter(htmlElement => htmlElement.panelId === "excercises")
            .map(htmlElement => {
            return <div id={htmlElement.id} key={htmlElement.id}>{htmlElement.title}</div>;
          })}
        </Panel>      
      </Tabs>
    );
  }