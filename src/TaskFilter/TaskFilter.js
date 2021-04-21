import React from 'react';
import PropTypes from 'prop-types';
import styles from './TaskFilter.module.css';

const TaskFilter = ({ value, onChangeFilter}) => {
  return (
    <label className={styles.filter}>
      Filter for tasks:
          <input type='text' placeholder='Type of filter tasks...' value={value} onChange={onChangeFilter}>
    </input>
    </label>

  )
}

TaskFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
}
export default TaskFilter;


