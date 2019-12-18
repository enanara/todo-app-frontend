import React from "react";

class AddTask extends React.Component {
    state = {
        taskDescription: "",
        dueDate: "10-12-2019"
    };

    updateTaskInput = (event) => {
        this.setState({
            taskDescription: event.target.value
        });
    };

    updateDate = ( event ) => {
        this.setState ({
            dueDate: event.target.value
        });
    };


    render () {
        return (
            <div className="row">
                <div className="col-10">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <input 
                            placeholder="Enter task..." 
                            onChange={this.updateTaskInput} 
                            value={this.state.taskDescription}
                            type="text" 
                            className="form-control" 
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-sm" />
                        </div>
                        <div className="col-6 col-md-3">
                            <span>
                                Due Date: 
                            </span>
                        </div>
                        <div className="col-6 col-md-3">
                            <input 
                            type="date" 
                            onChange={this.updateDate}
                            value={this.state.dueDate}
                            className="form-control" 
                            aria-label="Sizing example input" 
                            aria-describedby="inputGroup-sizing-sm" />
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-light">
                        + Add
                    </button>
                </div>
            </div>
        );
    }
}

export default AddTask; 