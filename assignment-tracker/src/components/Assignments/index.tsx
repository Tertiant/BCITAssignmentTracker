import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

interface Props {
  assignmentDB:{
    completed: boolean,
    value: [] 
  },
  assignmentCount: number,
  setAssignmentCount: Function
};

export function Assignments({assignmentDB, assignmentCount}: Props) {

  console.log(assignmentDB, assignmentCount)
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>1</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>1 of 1</span>
        </div>
      </header>

      <div className={styles.list}>
        <Assignment />
      </div>
    </section>
  );
}
