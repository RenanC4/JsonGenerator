import React, { Component } from 'react';
import upload from'../images/upload.png';
import create from'../images/add.png';

const styles = {
	fontFamily: "sans-serif",
	textAlign: "center"
  };

class Page extends Component {

		state = {

		}


    render() {
        return (
			<div style={styles}>
				<div style={{justifyContent:'flex-start', position:'fixed', width: '100%', zIndex:2,cursor:'pointer', backgroundColor:'#fbfbfb', height:80, display:'flex', alignItems:'center',  boxShadow:' 0px 4px 10px 3px rgba(34,32,32,0.3)'}}>
					<div className="nameHeader" style={{ marginLeft: 20,display:'flex', flexDirection:'row', alignItems:'center'}}>
						<span style={{fontFamily:'fantasy', fontSize: 34, color:'#e45d3b', fontWeight:'lighter'}}>Json Generator</span>
						<span  style={{fontFamily:'monospace', fontSize: 24, color:'#f5c639'}}>|</span>
						<span style={{fontFamily:'monospace', fontSize: 24, color:'#f5c639'}}>by Assist Software</span>
					</div>
				</div>
				<div style={{display:'flex', flexDirection:'row', paddingTop:350, justifyContent:'space-evenly'}}>
				<div style={{display:'flex', flexDirection:'column', textAlign:'center'}}>
					<img  src={upload} style={{}} alt="upload"/>
					<span style={{ color:'#8f4685', fontWeight: 'bolder', fontSize: '21pt'}}>Upload</span>
				</div>
				<div style={{display:'flex', flexDirection:'column', textAlign:'center'}}>
					<img  src={create} style={{}} alt="add"/>
					<span style={{ color:'#8f4685', fontWeight: 'bolder', fontSize: '21pt'}}>Criar</span>
				</div>
				</div>
			</div>
			)
    }
}
export default Page