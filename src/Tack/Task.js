import React from "react";
import styles from './Task.module.css';
import PropTypes from 'prop-types';


const Task = ({ text, complited = false, priority = 'normal', id, onDeleteTasks, onUpdateCompleted, onUpdatePrioriry}) => {
  return (
    <div className={`${styles.task} ${styles[`${priority}Priority`]}`}>

      <p className={styles.text}>{text}</p>

      <div className={styles.taskMenu}>
        <label>
          Your prioriry:
        <select className={styles.select} name='priority' value={priority} onChange={ e => onUpdatePrioriry(id, e.target.value)}>
          <option value="low">low</option>
          <option value="normal">normal</option>
          <option value="high">high</option>
        </select>
        </label>

        <label>
          Completed:
          <input type="checkbox" checked={complited} onChange={onUpdateCompleted}/>
        </label>

        <button className={styles.btnDelete} type='button' onClick={onDeleteTasks}></button>
      </div>
    </div>
  );
};

Task.propTypes = {
text: PropTypes.string.isRequired,
competed: PropTypes.bool,
priority: PropTypes.string,
id: PropTypes.string.isRequired,
onDeleteTasks: PropTypes.func.isRequired,
onUpdateCompleted: PropTypes.func.isRequired,
onUpdatePrioriry: PropTypes.func.isRequired
}


export default Task;