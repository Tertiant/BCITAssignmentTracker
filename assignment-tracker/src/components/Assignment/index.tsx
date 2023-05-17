import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { IAssignment } from "../../interfaces/IAssignment";

interface Props {
  assignment: IAssignment;
  setAssignments: React.Dispatch<React.SetStateAction<IAssignment[]>>;
};

export function Assignment({assignment, setAssignments}: Props) {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>{assignment.name}</p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
