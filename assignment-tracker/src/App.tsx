import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";
function App() {

  const [assignments, setAssignments] = useState([
    {
      value:"",
      completed: false
    },
  ]);

  // have a callback function that runs onSubmit that passes data back to the App(), 
  // which then updates the list and the assignmentCount to reflect changes. 
  //Unsure how to implement this function.

  return (
    <>
      <Header assignments={assignments} 
              setAssignments={setAssignments}
      />

      <Assignments  assignments={assignments} 
                    setAssignments={setAssignments}
      />
    </>
  );
}

export default App;
