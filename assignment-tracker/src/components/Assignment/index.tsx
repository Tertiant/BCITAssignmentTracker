import styles from "./assignment.module.css";
import { TbTrash , TbCircleCheckFilled} from "react-icons/tb";
import { IAssignment } from "../../interfaces/IAssignment";

interface Props {
  assignments: IAssignment[];
  assignment: IAssignment;
  setAssignments: Function;
};

export function Assignment({assignments, assignment, setAssignments}: Props) {

const deleteAssignment = () => (
  setAssignments(assignments.filter((item) => item.id !== assignment.id))
)

const toggleAssignment = () => (
  setAssignments(assignments.map(item => {
    if (item.id == assignment.id) {
      item.completed = !item.completed
    };
    return item;
  }
)));

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}
              onClick={toggleAssignment}
      >
        <div>
        </div>
      </button>

      <p className={assignment.completed ? styles.textCompleted : ''}>{assignment.name}</p>

      <button onClick={deleteAssignment} className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
