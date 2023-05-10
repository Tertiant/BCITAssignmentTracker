import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from 'react';

// interface Props {
//   assignmentInput: string,
//   setAssignmentInput: Function
// }

export function Header() {

const [assignmentInput, setAssignmentInput] = useState("") // This sets the state and enables React watching this item

const validateAssignmentInput = (formInput: string) => {
    return formInput.trim().length > 0 // returns true if the input exists and is not spaces
};

const isAssignmentInputValid = validateAssignmentInput(assignmentInput);
const updateAssignmentInputState = (input: string) => {
  setAssignmentInput(input);
};

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input placeholder="Add a new assignment" type="text" onChange={(e) => updateAssignmentInputState(e.target.value)}/>
        <button disabled={!isAssignmentInputValid}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}