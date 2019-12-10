import React from "react";

class AddTask extends React.Component {
    state = {
        taskDescription: "",
        dueDate: "10-12-2019"
    };

    updateTaskInput = (event) => {
        console.log(event.target.value);
        this.setState({
            taskDescription: event.target.value
        });

    }


    render () {
        return (
            <div className="row">
                <div className="col-10">
                    <div className="row">
                        <div className="col-12 col-md-7">
                            <input placeholder="Enter task..." onChange={this.updateTaskInput} value={this.state.taskDescription} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                        <div className="col-12 col-md-5">
                            <input placeholder="Due date" type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
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