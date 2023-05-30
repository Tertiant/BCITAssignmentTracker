import styles from "./assignment.module.css";
import { TbTrash , TbCircleCheckFilled} from "react-icons/tb";
import { IAssignment } from "../../interfaces/IAssignment";
import { differenceInCalendarDays } from 'date-fns';

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

const dateDistance: number = differenceInCalendarDays(assignment.due, new Date());

const checkDueDate = (dueDate: Date) => {
  const dateDistance: number = differenceInCalendarDays(dueDate, new Date());
    if (assignment.completed) {
      return "Completed"
    }

    if (dueDate <= new Date()) {
      return "Past due";
    };

    if (dateDistance === 1) {
      return "Due tomorrow";
    } else {
      return `Due in ${dateDistance} days`;
    };
}

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}
              onClick={toggleAssignment}
      >
        <div>
          <TbCircleCheckFilled size={20} display={assignment.completed ? "flex" : "none"}/>
        </div>
      </button>
{/* the class name has to be assigned based on the value of dateDistance, and has three
 possible values: past due, due tomorrow, and due in _ days
*/}
      <p className={assignment.completed ? styles.textCompleted : ''}>{assignment.name}</p>
      <p className={ `${styles.dueDate} 
                      ${!assignment.completed && (assignment.due <= new Date()? // check if it's past due
                        styles.pastDue : // if so, set style
                        (dateDistance === 1 ? // if it's not past due, check if its due tomorrow
                          styles.dueTomorrow  // if so, set style
                          : '') // if no, do nothing and keep it at the default style
                        )}`
                    }>
        {checkDueDate(assignment.due)}</p>

      <button onClick={deleteAssignment} className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
