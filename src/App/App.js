import React, { Component } from "react";
import TaskEditor from "../TaskEditor/TaskEditor";
import TaskList from "../TackList/TaskList";
import shortid from "shortid";
import TaskFilter from "../TaskFilter/TaskFilter";
import styles from './App.module.css';

const filterTasks = (filter, tasks) => {
  return tasks.filter(task => task.text.toLowerCase().includes(filter.toLowerCase()))
};

export default class App extends Component {
  state = {
    tasks: [],
    filter: "",
  };

  componentDidMount() {
    const tasksFromLocalStorage = localStorage.getItem('tasks');
    console.log(tasksFromLocalStorage)

    if(tasksFromLocalStorage) {
      const tasksForSet = JSON.parse(tasksFromLocalStorage);

      this.setState({tasks: tasksForSet});
    }
  }
  

  componentDidUpdate(prevProps, prevState) {
    if(prevState.tasks !== this.state.tasks) {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    }
  }
  

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  addTask = (task) => {
    const newTask = {
      ...task,
      id: shortid.generate(),
      complited: false,
    };
    this.setState((prevState) => ({ tasks: [...prevState.tasks, newTask] }));
  };

  updateCompleted = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((item) =>
        item.id === id ? { ...item, complited: !item.complited } : item
      ),
    }));
  };

  updatePriority = (id, value) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((item) =>
        item.id === id ? { ...item, priority: value } : item
      ),
    }));
  };
  deleteTask = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((item) => item.id !== id),
    }));
  };

  render() {
    const { tasks, filter } = this.state;

    const filteredTasks = filterTasks(filter, tasks)
    console.log(filteredTasks)

    return (
      <div>
        <TaskEditor onAddTask={this.addTask} />
        <div className={styles.container}>
        <TaskFilter value={filter} onChangeFilter={this.changeFilter} />
        <TaskList
          items={filteredTasks}
          onDeleteTask={this.deleteTask}
          onUpdateCompleted={this.updateCompleted}
          onUpdatePrioriry={this.updatePriority}
        />
        </div>
      </div>
    );
  }
}
