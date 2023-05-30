import 'react-day-picker/dist/style.css';
import styles from "./header.module.css";

import { AiOutlinePlusCircle, AiOutlineCalendar } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from 'react';
import { IAssignment } from "../../interfaces/IAssignment";
import {v4} from "uuid"; 
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

interface Props {
  assignments: IAssignment[];
  setAssignments: Function;
};

export function Header({ assignments, setAssignments}: Props) {

  const [dateInput, setDateInput] = useState<Date | undefined>(); // watch which date is selected
  const [showCalendar, setCalendarVisibility] = useState(false);
  const [assignmentInput, setAssignmentInput] = useState(""); // This sets the state and enables React watching this item

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
          name: assignmentInput,
          due: dateInput
        }
      ]);
    }

    setAssignmentInput("");
    setDateInput(undefined);
    setCalendarVisibility(false);
  };

  const footer = (
    <button 
      className={styles.CalendarDoneButton} 
      onClick={() => setCalendarVisibility(!showCalendar)}
    >
      Done
    </button>
  )

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

        <div>
          {!showCalendar && 
          <button 
            disabled={!validateAssignmentInput(assignmentInput)}
            onClick={() => setCalendarVisibility(!showCalendar)}
            className={styles.inputButton}
          >
            {dateInput ? format(dateInput, 'PP'): "Due Date"} <AiOutlineCalendar size={20} type="input"/>
          </button>}

          {showCalendar && 
          <DayPicker className={styles.DayPicker}
            mode="single"
            selected={dateInput}
            onSelect={setDateInput}
            footer={footer}
          />}
        </div>
          
        <button disabled={!dateInput || !validateAssignmentInput(assignmentInput)} 
                type="submit"
                className={styles.inputButton}>
          Create <AiOutlinePlusCircle size={20} />
        </button>

      </form>
    </header>
  );
}
