import React, { Component } from "react";
import TaskList from "./TaskList";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTaskList: false,
      name: "",
    };
  }
  linkList = () => {
    this.props.closeForm();
  };
  handleAddTask = () => {
    this.props.addTask(this.state.name);
    this.linkList();
  };
  isChangedName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  render() {
    if (this.state.showTaskList === true) {
      return <TaskList />;
    } else {
      return (
        <>
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
          <div className="content">
            <h2>Add New Task</h2>
            <div>
              <div className="div-container"></div>
              <div className="div-table"></div>
              <table className="div-table-table">
                <thead>
                  <tr>
                    <th>
                      <label>Name of task:</label>
                    </th>
                    <th>
                      <button type="button" className="btn btn-outline-danger btn-sm btn-size btn-float" onClick={this.linkList}>
                        Back
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="text" className="input-edit" placeholder="Enter name of task" onChange={this.isChangedName}/>
                    </td>
                    <td>
                      <button type="submit" className="  btn btn-outline-primary btn-sm btn-size btn-float" onClick={this.handleAddTask}>
                        Add
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      );
    }
  }
}

export default AddTask;
