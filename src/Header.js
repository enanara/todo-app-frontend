import React from "react";

class Header extends React.Component {
    render () {
        return (
            <div className="row">
                <h3 className="col-8">
                    <div className="d-none d-sm-none d-md-block">
                        <span>Good Morning </span>
                        <span>Ena</span>
                    </div>
                </h3>
                <div className="col-4">
                    <span>Thursday </span>
                    <span className="weather">
                        9°C 
                    </span>
                    <span className="weatherIcon">
                        &#x1F324;
                    </span>
                </div>
            </div>
        );
    }
}

export default Header;