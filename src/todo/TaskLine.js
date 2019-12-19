import React from "react";
import { thisExpression } from "@babel/types";


class Tasks extends React.Component {

    deleteTask = () => {
        this.props.deleteTaskFunc(this.props.taskNumber)
    };

    render () {
        return (
            <div className="row">
                <div className="col-12 col-md-6">
                    <p>{this.props.taskDescription}</p>                   
                </div>
                <div className="col-4 col-md-2">
                    {this.props.complete === false? 
                        <button type="button" className="btn btn-outline-success btn-sm" data-toggle="button" aria-pressed="false" autoComplete="off">
                        Done
                        </button> : 
                        <button type="button" className="btn btn-outline-success btn-sm" data-toggle="button" aria-pressed="false" autoComplete="off">
                        Undo
                        </button>
                    }
                    
                </div>
                <div className="col-4 col-md-2">
                    <button 
                    type="button" 
                    className="btn btn-outline-secondary btn-sm">
                        Edit
                    </button>
                </div>  
                <div className="col-4 col-md-2">
                    <button 
                    onClick={this.deleteTask}
                    type="button" 
                    className="btn btn-outline-danger btn-sm">
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}

export default Tasks; 