import React from "react";
import p from "../images/profile.jpg";
import '../styles/About.css'

class About extends React.Component {

    render() {
        // return <div className="card">
        //     <img src={p} alt="" width={'50%'} style={{borderRadius: "50%"}}/>
        //     <h1>Cem Oral</h1>
        //     <h3>Software Engineer</h3>
        //     <h4>Ruhr University</h4>
        //     <div className="row">
        //         <div className="col"><a href="https://github.com/cemoral"><i className="fa fa-github"/></a></div>
        //         <div className="col"><a href="https://gitlab.com/cemoral"><i className="fa fa-gitlab"/></a></div>
        //         <div className="col"><a href="https://twitter.com/Cem_o_O"><i className="fa fa-twitter"/></a></div>
        //         <div className="col"><a href="https://www.linkedin.com/in/cem-oral-37978b78/"><i className="fa fa-linkedin"/></a></div>
        //         <div className="col"><a href="https://www.facebook.com/cemoral/"><i className="fa fa-facebook"/></a></div>
        //     </div>
        // </div>;
        return <div className="card" style={{width: "25rem"}}>
            <img className="card-img-top" src={p}/>
            <div className="card-body">
                <h1 className="card-title">Cem Oral</h1>
                <hr/>
                <h5 className="card-text">Software Engineer</h5>
                <hr/>
                <h5 className="card-text">Ruhr University</h5>
                <hr/>
                <div className="row">
                    <div className="col"><a href="https://github.com/cemoral"><i className="fa fa-github"/></a>
                    </div>
                    <div className="col"><a href="https://gitlab.com/cemoral"><i className="fa fa-gitlab"/></a>
                    </div>
                    <div className="col"><a href="https://twitter.com/Cem_o_O"><i className="fa fa-twitter"/></a>
                    </div>
                    <div className="col"><a href="https://www.linkedin.com/in/cem-oral-37978b78/"><i
                        className="fa fa-linkedin"/></a></div>
                    <div className="col"><a href="https://www.facebook.com/cemoral/"><i className="fa fa-facebook"/></a>
                    </div>
                </div>
            </div>
        </div>
            ;
    }
}

export default About;