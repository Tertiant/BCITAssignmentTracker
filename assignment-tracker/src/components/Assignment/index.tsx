import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { IAssignment } from "../../interfaces/IAssignment";

interface Props {
  assignments: IAssignment[];
  assignment: IAssignment;
  setAssignments: React.Dispatch<React.SetStateAction<IAssignment[]>>;
};

export function Assignment({assignments, assignment, setAssignments}: Props) {

const deleteAssignment = () => (
  setAssignments(assignments.filter((item) => item.id !== assignment.id))
)

// const toggleAssignment = () => (
//   setAssignments(assignments.slice().id
// )

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>{assignment.name}</p>

      <button onClick={deleteAssignment} className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
