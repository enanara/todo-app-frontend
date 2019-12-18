import React from "react";


class Tasks extends React.Component {
    render () {
        return (
            <div className="row">
                <div className="col-12 col-md-6">
                    <p>{this.props.taskDescription}</p>                   
                </div>
                <div className="col-4 col-md-2">
                    <button type="button" className="btn btn-outline-success btn-sm" data-toggle="button" aria-pressed="false" autoComplete="off">
                        Done
                    </button>
                </div>
                <div className="col-4 col-md-2">
                    <button type="button" className="btn btn-outline-secondary btn-sm">Edit</button>
                </div>  
                <div className="col-4 col-md-2">
                    <button type="button" className="btn btn-outline-danger btn-sm">Delete
                    </button>
                </div>
            </div>
        );
    }
}

export default Tasks; 