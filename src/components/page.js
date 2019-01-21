import React, {Component} from 'react';
import upload from '../images/upload.png';
import create from '../images/add.png';
import Field from './field.js';
import Block from './block.js';
import Section from './section.js';
import {FaPlusSquare, FaDirections, FaSitemap} from 'react-icons/fa';


const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    height: '100%'
};

const COMPONENTS = [
    "BLOCK",
    "FIELD",
    "FIELD",
    "SECTION",
    "FIELD"
];

class Page extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            viewType: 2,
        };
    }

    handleChange(event) {
        console.log(event.target.value)
        //this.setState({inputValue: event.target.value});

    }

    render() {
        return (
            <div style={styles}>
                <div style={{

                    justifyContent: 'flex-start',
                    position: 'fixed',
                    width: '100%',
                    zIndex: 2,
                    cursor: 'pointer',
                    backgroundColor: '#fbfbfb',
                    height: 80,
                    display: 'flex',
                    alignItems: 'center',
                    boxShadow: ' 0px 4px 10px 3px rgba(34,32,32,0.3)'
                }}>
                    <div className="nameHeader"
                         style={{marginLeft: 20, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <span style={{fontFamily: 'fantasy', fontSize: 34, color: '#e45d3b', fontWeight: 'lighter'}}>Gerador de JSON</span>
                        <span style={{fontFamily: 'monospace', fontSize: 24, color: '#f5c639'}}>|</span>
                        <span
                            style={{
                                fontFamily: 'monospace',
                                fontSize: 24,
                                color: '#f5c639'
                            }}> by Assist Software&nbsp;</span>
                        {this.state.viewType === 2 &&
                        <span
                            style={{fontFamily: 'monospace', fontSize: 24, color: '#f5bd38'}}> -&nbsp;Criar</span>
                        }
                    </div>
                </div>
                {this.state.viewType === 1 &&
                <div style={{display: 'flex', flexDirection: 'row', paddingTop: 350, justifyContent: 'space-evenly'}}>
                    <div>
                        <label className="uploadJson"
                               style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>

                            <input type="file" accept=".txt"
                                   onChange={this.handleChange}
                                   style={{display: "none"}}></input>
                            <img src={upload} alt="upload"/>
                            <span style={{color: '#8f4685', fontWeight: 'bolder', fontSize: '21pt'}}>Upload</span>
                        </label>
                    </div>
                    <div onClick={() => {
                        this.setState({viewType: 2})
                    }} style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                        <img src={create} style={{}} alt="add"/>
                        <span style={{color: '#8f4685', fontWeight: 'bolder', fontSize: '21pt'}}>Criar</span>
                    </div>
                </div>}
                {this.state.viewType === 2 &&

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingTop: 80,
                    justifyContent: 'space-evenly',
                    height: '100%'
                }}>
                    <div className="MenuLateral" style={{
                        flexDirection: 'row', justifyContent: 'flex-start',
                        boxShadow: ' 0px 0px 0px 0px rgba(34,32,32,0.3)',
                        height: '100%',
                        paddingTop: 50
                    }}>
                        <div style={{
                            display: 'flex',
                            flexGrow: 1,
                            flexDirection: 'column',
                            alignSelf: 'left',
                            alignContent: 'flex-start',
                            justifyContent: 'flex-start',
                            paddingLeft: 40,
                            paddingRight: 40,

                        }}>
                            <div style={{
                                backgroundColor: '#fff',
                                height: 50,
                                marginTop: 20,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'stretch'
                            }}>
                                <span style={{
                                    fontSize: '18pt', cursor: 'pointer', fontWeight: 'normal',
                                    fontFamily: 'monospace', color: '#78be89', paddingRight: 10
                                }}>
                                    <FaPlusSquare/>

                                </span>
                                <span style={{
                                    fontSize: '16pt', cursor: 'pointer', fontWeight: 'bold',
                                    fontFamily: 'monospace', color: '#848484'
                                }}>Novo campo</span></div>
                            <div style={{
                                backgroundColor: '#fff',
                                height: 50,
                                marginTop: 20,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'stretch'
                            }}>

                               <span style={{
                                   fontSize: '18pt', cursor: 'pointer', fontWeight: 'normal',
                                   fontFamily: 'monospace', color: '#f5c639', paddingRight: 10
                               }}>

                                <FaDirections/>

                                </span>

                                <span style={{
                                    fontSize: '16pt', cursor: 'pointer', fontWeight: 'bold',
                                    fontFamily: 'monospace', color: '#848484'
                                }}>Nova sessão</span></div>
                            <div style={{
                                backgroundColor: '#fff',
                                height: 50,
                                marginTop: 20,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'stretch'
                            }}>
                              <span style={{
                                  fontSize: '18pt', cursor: 'pointer', fontWeight: 'normal',
                                  fontFamily: 'monospace', color: '#e45d3b', paddingRight: 10
                              }}>
                                   <FaSitemap/>

                                </span>
                                <span style={{
                                    fontSize: '16pt', cursor: 'pointer', fontWeight: 'bold',
                                    fontFamily: 'monospace', color: '#848484'
                                }}>Novo bloco</span></div>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexGrow: 1, flexDirection: 'row', justifyContent: 'center'}}>

                        {COMPONENTS.map(type => {
                            switch (type) {
                                case "BLOCK":
                                    return <Block/>;
                                case "FIELD":
                                    return <Field/>;
                                case "SECTION":
                                    return <Section/>;
                                default:
                                    return null;
                            }
                        })}


                    </div>
                </div>
                }

            </div>
        )
    }
}

export default Page