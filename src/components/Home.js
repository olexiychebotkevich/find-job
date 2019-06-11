import React, { Component } from 'react';
import './Modal.css';
import classnames from 'classnames'
import axios from 'axios';
import {connect} from 'react-redux';

class Home extends Component {
    state = { 
        loading:true
     }

     componentDidMount(){
    
         
     }



     btnIncrementConter=(e)=>{
        e.preventDefault();
        this.props.dispatch({type:'INCREMENT'})
        console.log('Hello click');
        
     }


     btnDecrementConter=(e)=>{
        e.preventDefault();
        this.props.dispatch({type:'DECREMENT'})
        console.log('Hello click');
        
     }
    render() { 
        const {loading}=this.state; 
        const{count}=this.props;
        console.log('----Render component Home-----',this.props);
        return(
            <div>
            <p>Home page {count}</p>
            <button className="btn btn-success" onClick={this.btnIncrementConter}>Counter++</button>
            <button className="btn btn-danger" onClick={this.btnDecrementConter}>Counter--</button>
            </div>
        );
    }
}
const mapStateProps=(state)=>
{
    console.log('----Render store connect-----',state);
    return{
        count:state.counter.counterStore
    };
}
 
export default connect(mapStateProps)(Home);
