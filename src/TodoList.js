import React, { Component } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
        this.setTask = this.setTask.bind(this);
        this.remove = this.remove.bind(this);
        this.check = this.check.bind(this);
        this.edit = this.edit.bind(this);
        this.update = this.update.bind(this);
    }

    setTask(t) {
        this.setState({tasks: [...this.state.tasks, t]})
    }

    remove(id) {
        this.setState({tasks: this.state.tasks.filter(t => t.id !== id)})
    }

    check(id) {
        const updatedTasks = this.state.tasks.map(t => {
            if(t.id === id) {
              return { ...t, checked: !t.checked };
            }
            return t;
        });
        this.setState({ tasks: updatedTasks });
    }

    edit(id) {
        const updatedTasks = this.state.tasks.map(t => {
            if(t.id === id) {
              return { ...t, editing: !t.editing };
            }
            return t;
        });
        this.setState({ tasks: updatedTasks });
    }

    update(id, updatedTask) {
        const updatedTasks = this.state.tasks.map(t => {
            if(t.id === id) {
              return { ...t, task: updatedTask,editing: !t.editing };
            }
            return t;
        });
        this.setState({ tasks: updatedTasks });
    }

    render() {
        const tasks = this.state.tasks.map(t => (
            <Todo
                key={t.id}
                id={t.id}
                task={t.task}
                checked={t.checked}
                editing={t.editing}
                removeTask={this.remove}
                checkTask={this.check}
                editTask={this.edit}
                updateTask={this.update}/>
        ));

        return(
            <div className="TodoList">
                <h1>Todo List</h1>
                <h2>Keep track of all your tasks!</h2>
                <div className="tasks">{tasks}</div>
                <TodoForm sendTask={this.setTask}/>
            </div>
        )
    }
}

export default TodoList;