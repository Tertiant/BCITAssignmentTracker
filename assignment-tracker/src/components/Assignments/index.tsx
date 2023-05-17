import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { IAssignment } from "../../interfaces/IAssignment";


interface Props {
  assignments: IAssignment[];
  setAssignments: React.Dispatch<React.SetStateAction<IAssignment[]>>;
};

export function Assignments({assignments, setAssignments}: Props) {

  const completedAssignments = assignments.filter(assignment => assignment.completed === true).length;

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{completedAssignments}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedAssignments} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        { assignments.map((assignment) => (
          <Assignment 
            assignments={assignments}
            assignment={assignment}
            setAssignments={setAssignments} 
          />
        ))}
      </div>
    </section>
  );
}
