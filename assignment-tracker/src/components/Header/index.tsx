import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from 'react';
import { IAssignment } from "../../interfaces/IAssignment";
import {v4} from "uuid"; 

interface Props {
  assignments: IAssignment[];
  setAssignments: React.Dispatch<React.SetStateAction<IAssignment[]>>;
};

export function Header({ assignments, setAssignments}: Props) {

  const [assignmentInput, setAssignmentInput] = useState("") // This sets the state and enables React watching this item

  const validateAssignmentInput = (formInput: string) => {
    return formInput.trim().length > 0 // returns true if the input exists and is not spaces
  };

  const updateAssignmentInputState = (input: string) => {
    setAssignmentInput(input);
  };

  const addAssignment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateAssignmentInput(assignmentInput)) {
      setAssignments([...assignments,
        {
          id: v4(),
          completed: false,
          name: assignmentInput
        }
      ]);
    }

    setAssignmentInput("");
  };

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={addAssignment}>
        <input 
          value={assignmentInput} 
          placeholder="Add a new assignment" 
          type="text" 
          onChange={(e) => updateAssignmentInputState(e.target.value)}
        />
        <button disabled={!validateAssignmentInput(assignmentInput)} type="submit">
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
