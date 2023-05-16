import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

// interface Props {
//   assignmentDB:{
//     completed: boolean,
//     value: [] 
//   },
//   assignmentCount: number,
//   setAssignmentCount: Function
// };


function App() {

  let assignmentDB = [
    {
       completed: false,
       value: ""
       },
   {
       completed: false,
       value: ""
       },
   {
       completed: false,
       value: ""
       },
  ];

  const [assignmentCount, setAssignmentCount] = useState(3)

  return (
    <>
      <Header assignmentCount={assignmentCount}/>
      <Assignments assignmentDB={assignmentDB} assignmentCount={assignmentCount}/>
    </>
  );
}

export default App;
