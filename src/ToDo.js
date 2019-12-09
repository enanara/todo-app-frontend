import React from "react";

class ToDo extends React.Component {
    render () {
        return (
            <div className="container-sm">
                <div className="row">
                    <div className="col-12">
                        <h3>My ToDo List </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 col-md-9">
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="col-2 col-md-3">
                        <button type="button" className="btn btn-light d-none d-md-block">
                            + Add
                        </button>
                        <button type="button" className="btn btn-light d-block d-md-none">
                            +
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDo;