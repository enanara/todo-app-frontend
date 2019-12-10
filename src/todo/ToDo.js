import React from "react";
import CountLists from "./CountLists";
import AddTask from "./addTask";

class ToDo extends React.Component {
    render () {
        return (
            <div className="container-sm">
                <div className="row">
                    <div className="col-12">
                        <h3>My ToDo List </h3>
                    </div>
                </div>
                < AddTask />
                <div className="row">
                    <div className="col-12 d-none d-md-block" >
                        <CountLists count=" 1" complete=" task to complete."/>
                    </div>
                    
                    

                </div>
            </div>
        );
    }
}

export default ToDo;