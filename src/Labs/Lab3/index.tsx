import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import SimpleArrays from "./SimpleArrays";
import TemplateLiterals from "./TemplateLiterals";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import MapFunction from "./MapFunction";
import JsonStringify from "./JsonStringify";
import FilterFunction from "./FilterFunction";
import House from "./House";
import Spreading from "./Spreading";
import TodoList from "./todos/TodoList";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import Classes from "./Classes";
import Styles from "./Styles";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import PathParameters from "./PathParameters";
import AddPathParameters from "./AddPathParameters";
import ForLoops from "./ForLoops";


export default function Lab3() {
  console.log('Hello World!');
  return (
    <div>
      <h3>Lab 3</h3>
      <VariablesAndConstants/>
      <VariableTypes/>
      <BooleanVariables/>
      <IfElse/>
      <TernaryOperator/>
      <ConditionalOutputIfElse/>
      <ConditionalOutputInline/>
      <LegacyFunctions/>  
      <ArrowFunctions/>
      <ForLoops/>
      <ImpliedReturn/>
      <SimpleArrays/>
      <TemplateLiterals/>
      <FindFunction/>
      <FindIndex/>
      <MapFunction/>
      <JsonStringify/>
      <FilterFunction/>
      <House/>
      <Spreading/>
      <TodoList/>
      <Destructing/>
      <FunctionDestructing/>
      <DestructingImports/>
      <Classes/>
      <Styles/> 
      <Add a={3} b={4} />
      <h4>Square of 4</h4>
      <h5><Square>4</Square></h5>
      <h6><Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
      </Highlight></h6>
      <PathParameters/>
      <AddPathParameters/>
    </div>
  );
}
