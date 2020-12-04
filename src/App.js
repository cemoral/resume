import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import b1 from './images/back1.jpg'
import b2 from './images/back2.jpg'
import b3 from './images/back3.png'
import About from "./components/About";
import Work from "./components/Work";
import Background from "./components/Background";

// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
// const Pink = ({children}) => <span style={{color: '#FF6AC1'}}>{children}</span>
// const Yellow = ({children}) => <span style={{color: '#EFF59B'}}>{children}</span>
// const Lightblue = ({children}) => <span style={{color: '#9AEDFE'}}>{children}</span>
// const Green = ({children}) => <span style={{color: '#57EE89'}}>{children}</span>
// const Blue = ({children}) => <span style={{color: '#57C7FF'}}>{children}</span>
// const Gray = ({children}) => <span style={{color: '#909090'}}>{children}</span>

class App extends React.Component {

    state = {
        page: 0
    }

    scrollTo = (offset) => {
        this.parallax.scrollTo(offset);
        this.setState({page: offset});
    }

    render() {

        return (
            <div>
                <Navbar expand="md" fixed="top"
                        style={{
                            borderBottom: '2px solid #000',
                            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, .5)',
                            backgroundColor: '#F8F8F6',
                            opacity: 0.8
                        }}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto" style={{fontSize: '25px'}}>
                            <Nav.Link active={this.state.page === 0} onClick={() => this.scrollTo(0)}>About</Nav.Link>
                            <Nav.Link active={this.state.page === 1} onClick={() => this.scrollTo(1)}>Work</Nav.Link>
                            <Nav.Link active={this.state.page === 2}
                                      onClick={() => this.scrollTo(2)}>Background</Nav.Link>
                            <Nav.Link active={this.state.page === 3} onClick={() => this.scrollTo(3)}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Parallax pages={4} scrolling={true} vertical ref={ref => (this.parallax = ref)}>
                    <ParallaxLayer
                        offset={0}
                        speed={.25}
                        style={{
                            backgroundSize: '100%',
                            backgroundPosition: 'center',
                            backgroundImage: `url("${b1}")`
                        }}
                    />
                    <ParallaxLayer
                        offset={1}
                        speed={.25}
                        style={{
                            backgroundSize: '100%',
                            backgroundPosition: 'center',
                            backgroundImage: `url("${b2}")`
                        }}
                    />
                    <ParallaxLayer
                        offset={2}
                        speed={.25}
                        style={{
                            backgroundSize: '100%',
                            backgroundPosition: 'center',
                            backgroundImage: `url("${b3}")`
                        }}
                    />
                    <ParallaxLayer
                        offset={3}
                        speed={.25}
                        style={{
                            backgroundSize: '100%',
                            backgroundPosition: 'center',
                            backgroundImage: `url("${b3}")`
                        }}
                    />
                    <ParallaxLayer offset={2} speed={1} style={{backgroundColor: '#805E73'}}/>

                    <ParallaxLayer offset={0} speed={0} factor={3}
                                   style={{backgroundImage: url('stars', true), backgroundSize: 'cover'}}/>

                    <ParallaxLayer offset={0} speed={0.8} style={{opacity: 0.1}}>
                        <img src={url('cloud')} style={{display: 'block', width: '20%', marginLeft: '55%'}}/>
                        <img src={url('cloud')} style={{display: 'block', width: '10%', marginLeft: '15%'}}/>
                    </ParallaxLayer>

                    <ParallaxLayer offset={1.3} speed={-0.3} style={{pointerEvents: 'none'}}>
                        <img src={url('satellite4')} style={{width: '15%', marginLeft: '70%'}}/>
                    </ParallaxLayer>


                    <ParallaxLayer offset={1.75} speed={0.5} style={{opacity: 0.1}}>
                        <img src={url('cloud')} style={{display: 'block', width: '20%', marginLeft: '70%'}}/>
                        <img src={url('cloud')} style={{display: 'block', width: '20%', marginLeft: '40%'}}/>
                    </ParallaxLayer>

                    <ParallaxLayer offset={1} speed={0.2} style={{opacity: 0.2}}>
                        <img src={url('cloud')} style={{display: 'block', width: '10%', marginLeft: '10%'}}/>
                        <img src={url('cloud')} style={{display: 'block', width: '20%', marginLeft: '75%'}}/>
                    </ParallaxLayer>

                    <ParallaxLayer offset={1.6} speed={-0.1} style={{opacity: 0.4}}>
                        <img src={url('cloud')} style={{display: 'block', width: '20%', marginLeft: '60%'}}/>
                        <img src={url('cloud')} style={{display: 'block', width: '25%', marginLeft: '30%'}}/>
                        <img src={url('cloud')} style={{display: 'block', width: '10%', marginLeft: '80%'}}/>
                    </ParallaxLayer>

                    <ParallaxLayer offset={2.6} speed={0.4} style={{opacity: 0.6}}>
                        <img src={url('cloud')} style={{display: 'block', width: '20%', marginLeft: '5%'}}/>
                        <img src={url('cloud')} style={{display: 'block', width: '15%', marginLeft: '75%'}}/>
                    </ParallaxLayer>

                    <ParallaxLayer offset={2.5} speed={-0.4} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none'
                    }}>
                        <img src={url('earth')} style={{width: '60%'}}/>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={0}
                        speed={0.1}
                        onClick={() => this.scrollTo(1)}
                        style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div className="container" style={{zIndex: "3px"}}>
                            <p style={{fontSize: "60px"}}>Cem ORAL</p>
                            <p style={{fontSize: "30px"}}>professional bio</p>
                        </div>
                        {/*<img src={url('server')} style={{width: '20%'}}/>*/}
                    </ParallaxLayer>


                    <ParallaxLayer
                        offset={1}
                        speed={0.1}
                        onClick={() => this.scrollTo(2)}
                        style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        {/*<img src={url('bash')} style={{width: '40%'}} alt=''/>*/}
                        <Work/>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={2}
                        speed={0.1}
                        style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        onClick={() => this.scrollTo(3)}>
                        {/*<img src={url('clients-main')} style={{width: '40%'}} alt=''/>*/}
                        <Background/>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={3}
                        speed={0.1}
                        style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <About/>
                        {/*<img src={url('server')} style={{width: '20%'}}/>*/}
                    </ParallaxLayer>

                    {/*<ParallaxLayer
                        offset={2}
                        speed={-0.3}
                        style={{
                            backgroundSize: '80%',
                            backgroundPosition: 'center',
                            backgroundImage: url('clients', true)
                        }}
                    />*/}
                </Parallax>
            </div>
        );
    }
}

export default App;
