import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

function App() {

  const [assignments, setAssignments] = useState([
    {
      id: "test1",
      name:"test",
      completed: false
    },
  ]);

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
