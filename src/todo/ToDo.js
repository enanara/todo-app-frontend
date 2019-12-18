import React from "react";
import id from "uuid/v4";

import CountLists from "./CountLists";
import AddTask from "./addTask";
import Tasks from "./TaskLine";



class ToDo extends React.Component {
state = {
    tasks: [
        {
            taskDescription:"Doctors appointment", 
            dateCreated: "2019-12-10", 
            important: false, 
            urgent: false, 
            dateDue: "2020-01-01", 
            complete: true, 
            taskNumber:id()
        }, 
        {
            taskDescription:"Go to hairdresser", 
            dateCreated: "2019-12-10", 
            important: false, 
            urgent: true, 
            dateDue: "2020-01-01", 
            complete: false, 
            taskNumber:id()
        }, 
        {
            taskDescription:"Doctors appointment", 
            dateCreated: "2019-12-10", 
            important: false, 
            urgent: false, 
            dateDue: "2020-01-01", 
            complete: true, 
            taskNumber:id()
        }, 
        {
            taskDescription:"Go to hairdresser", 
            dateCreated: "2019-12-10", 
            important: false, 
            urgent: true, 
            dateDue: "2020-01-01", 
            complete: false, 
            taskNumber:id()
        }, 
        {
            taskDescription:"Doctors appointment", 
            dateCreated: "2019-12-10", 
            important: false, 
            urgent: false, 
            dateDue: "2020-01-01", 
            complete: true, 
            taskNumber:id()
        }, 
        {
            taskDescription:"Go to hairdresser", 
            dateCreated: "2019-12-10", 
            important: false, 
            urgent: true, 
            dateDue: "2020-01-01", 
            complete: false, 
            taskNumber:id()
        }, 
        {
            taskDescription:"Doctors appointment", 
            dateCreated: "2019-12-10", 
            important: false, 
            urgent: false, 
            dateDue: "2020-01-01", 
            complete: true, 
            taskNumber:id()
        }, 
        {
            taskDescription:"Go to hairdresser", 
            dateCreated: "2019-12-10", 
            important: false, 
            urgent: true, 
            dateDue: "2020-01-01", 
            complete: false, 
            taskNumber:id()
        }
    ]
}

    render () {
        
        const tasksToComplete = this.state.tasks.filter(task => {
            return task.complete === false;
        }); 

        const completeTasks = this.state.tasks.filter (task => {
            return task.complete === true;
        });

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
                        <CountLists count={tasksToComplete.length}complete=" task to complete."/>
                    </div>
                    <div className="col-12">
                        {tasksToComplete.map((task) => {
                            return <Tasks 
                            key={task.taskNumber}
                            taskNumber = {task.taskNumber}
                            taskDescription={task.taskDescription}
                            dueDate={task.dateDue}
                            complete={task.complete}
                            urgent={task.urgent}
                            important={task.important}
                            />
                        })}
                    </div>
                    <div className="col-12 d-none d-md-block" >
                        <CountLists count={completeTasks.length}complete=" task to complete."/>
                    </div>
                    <div className="col-12">
                        {completeTasks.map((task) => {
                            return <Tasks 
                            key={task.taskNumber}
                            taskNumber = {task.taskNumber}
                            taskDescription={task.taskDescription}
                            dueDate={task.dateDue}
                            complete={task.complete}
                            urgent={task.urgent}
                            important={task.important}
                            />
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDo;