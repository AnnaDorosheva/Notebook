import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./TaskEditor.module.css";

export class TaskEditor extends Component {
  static propTypes = {
    onAddTask: PropTypes.func.isRequired,
  };

  state = {
    text: "",
    priority: "normal",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddTask({ ...this.state });

    this.clearState();
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  clearState = () => {
    this.setState({
      text: "",
      priority: "normal",
    });
  };
  render() {
    const { priority, text } = this.state;

    return (
      <div className={styles.head}>
        <h1 className={styles.headName}>Your task manager</h1>
        <h2 className={styles.headText}>Create your day... create your life...</h2>

        <form onSubmit={this.handleSubmit}>
          <textarea
            className={styles.textarea}
            type="text"
            name="text"
            value={text}
            placeholder="Enter tаsk content..."
            onChange={this.handleChange}
          />

          <button
            className={styles.createBtn}
            type="submit"
            onSubmit={this.handleSubmit}
          >
            Create task
          </button>
          <div className={styles.selectPriority}>
            <label>
              Select task priority:
              <select
                name="priority"
                value={priority}
                onChange={this.handleChange}
              >
                <option value="low">low</option>
                <option value="normal">normal</option>
                <option value="high">high</option>
              </select>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default TaskEditor;
