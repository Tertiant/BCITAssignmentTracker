import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

interface Props {
  assignments: {
    completed: boolean,
    value: string 
  }[],
  setAssignments: Function
};

export function Assignments({assignments, setAssignments}: Props) {

  console.log(assignments, setAssignments)
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
