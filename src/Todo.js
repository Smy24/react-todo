import React, { Component } from 'react';
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleRemove() {
        this.props.removeTask(this.props.id)
    }

    handleCheck() {
        this.props.checkTask(this.props.id)
    }

    handleEdit() {
        this.props.editTask(this.props.id);
        this.setState({task: this.state.task})
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleUpdate(evt) {
        evt.preventDefault();
        this.props.updateTask(this.props.id, this.state.task);
    }

    render() {
        let result;
        if(this.props.editing) {
            result = 
            <div className="Todo">
                <form onSubmit={this.handleUpdate}>
                    <input 
                        className="Todo-editing"
                        type="text"
                        id="task"
                        name="task"
                        value={this.state.task}
                        onChange={this.handleChange}/>
                    <button className="btn update" onClick={this.handleUpdate}><i className="fas fa-edit"></i></button>
                </form>
            </div>
            return result;
        }else {
            result = 
            <div className="Todo">
                <p className={this.props.checked ? "Todo-checked" : "Todo-task"}>{this.props.task}</p>
                <button className="btn edit" onClick={this.handleEdit}><i className="fas fa-edit"></i></button>
                <button className="btn check" onClick={this.handleCheck}><i className="fas fa-check-square"></i></button>
                <button className="btn remove" onClick={this.handleRemove}><i className="fas fa-trash"></i></button>
             </div>
             return result;
        }
    }
}

export default Todo;