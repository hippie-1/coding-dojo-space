
import './util.css';

export const DataStructures = () => {

//  function displayCommonDataTypes() {
    var text = "Basic data Structures: \n" ;
    //text = text + JavaScript has 8 Datatypes: <br/>;
    text = text + "String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object \n" ;
    text = text + "The object is a complex data type which can contain both built-in objects, and user defined objects. \n";
    text = text + "Built-in object types can be: objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, graph, tree and more."; 

//    return <p>{text}</p>;
//  }

  return (
//    <h1>Data Structures</h1>
    <div className="display-linebreak">{text}</div>
/*    
    <p>
      JavaScript has 8 Datatypes: <br/>
      String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object <br/>
      The object data type can contain both built-in objects, and user defined objects. <br/>
      Built-in object types can be: objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.
    </p>
*/
  )
}



