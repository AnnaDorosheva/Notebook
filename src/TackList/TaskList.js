import React from "react";
import Task from "../Tack/Task";
import styles from "./TaskList.module.css";
import PropTypes from "prop-types";

const TackList = ({
  items,
  onDeleteTask,
  onUpdateCompleted,
  onUpdatePrioriry,
}) =>
  items.length > 0 && (
    <ul className={styles.taskList}>
      {items.map((item) => (
        <li key={item.id}>
          <Task
            {...item}
            onDeleteTasks={() => onDeleteTask(item.id)}
            onUpdateCompleted={() => onUpdateCompleted(item.id)}
            onUpdatePrioriry={onUpdatePrioriry}
          />
        </li>
      ))}
    </ul>
  );

TackList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeletTask: PropTypes.func.isRequired,
  onUpdateCompleted: PropTypes.func.isRequired,
 onUpdatePrioriry: PropTypes.func.isRequired,
};

export default TackList;
