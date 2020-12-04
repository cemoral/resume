import React from "react";
import "../styles/Work.css"
import allianz from "../images/allianz.jpg";
import huawei from "../images/huawei.png";

class Work extends React.Component {

    render() {

        return <div className="row">
            <div className="col-2">

            </div>
            <div className="col-4">
                <div className="jumbotron" style={{height: "100%"}}>
                    <img src={allianz} alt="" width={'150px'} style={{borderRadius: "50%", alignSelf: "center"}}/>
                    <h1 className="display-5">Full Stack Software Engineer</h1>
                    <p className="lead">Allianz, Turkey, January 2020 – November 2020</p>
                    <hr className="my-sm-1"/>
                    <p>Middleware web service application to verify contact information using Maven, Spring
                        Boot, MVC, JPA, Hibernate, Oracle, Coherence, Thymeleaf and Angular.</p>
                    <p>
                        Web application which processes high amount of Excel files in parallel (containing
                        ~100K records each) and sending them via SOAP web services. Spring, MVC, Hibernate,
                        Spring Batch, Guava, Angular, Oracle, Coherence is used.
                    </p>
                </div>
            </div>
            <div className="col-4">
                <div className="jumbotron" style={{height: "100%"}}>
                    <img src={huawei} alt="" width={'150px'} style={{borderRadius: "50%", alignSelf: "center"}}/>
                    <h1 className="display-5">Software Engineer</h1>
                    <p className="lead">Huawei Technologies, Turkey, August 2018 – January 2020</p>
                    <hr className="my-sm-1"/>
                    <p>Development of Microservice based Middleware Application supporting SOAP,
                        REST, FTP and Datasource connections (such as MySql, PostgreSql, MsSql etc.)
                        including Message Queuing Service and IOT.</p>
                    <p>
                        Development of Intelligent Operation Center (Smart City) using Java, Spring,
                        Microservices.
                    </p>
                    <p>
                        Development of Single Sign On (SSO) Project using Java, Spring, Vue JS.
                    </p>
                </div>
            </div>
            <div className="col-2">

            </div>
        </div>
    }

}

export default Work;