import React, { Component } from 'react';
import uuid  from 'uuid/v4';
import './TodoForm.css';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const idTask = {...this.state, id: uuid(), checked: false, editing: false};
        this.props.sendTask(idTask);
        this.setState({task: ""});
    }

    render() {
        return(
            <div className="TodoForm"> 
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task"/>
                    <input 
                        className="TodoForm-input"
                        type="text"
                        placeholder="Enter a task"
                        id="task"
                        name="task"
                        value={this.state.task}
                        onChange={this.handleChange}/>
                    <button className="create"><i className="fas fa-plus"></i></button>
                </form>
            </div>
        )
    }
}

export default TodoForm;