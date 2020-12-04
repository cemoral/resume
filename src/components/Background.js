import React from "react";
import "../styles/Work.css"
import ytu from "../images/ytu.png";
import ruhr from "../images/ruhr.png";
import lodz from "../images/lodz.png";

class Background extends React.Component {

    render() {

        return <div>
            <div className="row p-4">
                <div className="col-4">
                    <div className="jumbotron">
                        <img src={ruhr} alt="" width={'150px'} style={{alignSelf: "center"}}/>
                        <h1 className="display-5">Computational Engineering</h1>
                        <p className="lead">Ruhr University, Bochum, Germany, 2020 - present</p>
                        <hr className="my-sm-1"/>
                    </div>
                </div>
                <div className="col-4">
                    <div className="jumbotron">
                        <img src={ytu} alt="" width={'150px'} style={{borderRadius: "50%", alignSelf: "center"}}/>
                        <h1 className="display-5">Mathematical Engineering / GPA 2.97</h1>
                        <p className="lead">Yildiz Technical University, İstanbul, Turkey, 2013 - 2018</p>
                        <hr className="my-sm-1"/>
                    </div>
                </div>
                <div className="col-4">
                    <div className="jumbotron">
                        <img src={lodz} alt="" width={'150px'} style={{borderRadius: "50%", alignSelf: "center"}}/>
                        <h1 className="display-5">Computer Science / GPA 4.00</h1>
                        <p className="lead">Lodz University, Lodz, Poland, 2017 - 2018</p>
                        <hr className="my-sm-1"/>
                    </div>
                </div>
            </div>
        </div>
    }

}

export default Background;