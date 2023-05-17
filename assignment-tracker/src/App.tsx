import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";
import { IAssignment } from "./interfaces/IAssignment";

function App() {

  const [assignments, setAssignments] = useState<IAssignment[]>([]);

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
