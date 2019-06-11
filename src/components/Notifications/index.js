import React from 'react';
import styled from 'styled-components';
import ee from 'event-emitter';
const Container =styled.div`
background-color:#444;
color:white;
padding:16px;
position:absolute;
top:${props=>props.top}px;
right:16px;
z-index:999;
transition: top 0.5s ease;
>i{
    margin-left:8px
;}
`;

const emitter = new ee();

export const notify=(msg)=>{
    emitter.emit('notification',msg,true);
}

export default class Notifications extends React.Component{
    constructor(props){
        super(props);
        this.state={
            top:-100
        };
        emitter.on('notification',(msg)=>{
            this.showNotification(msg);
        });
        
    }

    showNotification=()=>{
        this.setState({top:16},
        ()=>{
         setTimeout(()=>{
             this.setState({top:-100});
         },3000);
         
        });
    }

    render(){
        const {top}=this.state;
        return(
       <React.Fragment>
           
        <Container top={top}>Hello World<i className="fa fa-bell"></i></Container>
      </React.Fragment>
      );
    }
}