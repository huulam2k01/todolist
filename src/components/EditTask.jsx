import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

class EditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editItem: this.props.editItem,
    };
  }
  handleEditTask = () => {
    this.props.doEdit(this.state.editItem.id, this.state.editItem.name);
    this.props.closeForm();
  };
  changedName = (e) => {
    this.setState({
      editItem: { id: this.props.editItem.id, name: e.target.value },
    });
  };
  render() {
    return (
      <>
        <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
          <div className="content">
            <h2>Edit task</h2>
            <div>
                <div className="div-container">
                <div className="div-table">
                <table className="div-table-table">
                    <thead>
                        <tr>
                            <th><label>Name of task:</label></th>
                            <th>
                                <button type="button" className="btn btn-outline-danger btn-sm btn-size btn-float" onClick={this.props.closeForm}>
                            Back
                            </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="text" className="input-edit" placeholder="Enter name of task" defaultValue={this.state.editItem.name} onChange={this.changedName}/>
                            </td>
                            <td>
                                <button type="submit" className="btn btn-outline-primary btn-sm btn-size btn-float"onClick={this.handleEditTask}>
                                     Edit
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>  
            </div>
            </div>
        </div>
      </>
    );
  }
}

export default EditTask;
