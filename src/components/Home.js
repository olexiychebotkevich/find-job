import React, { Component } from 'react';
import './Modal.css';
import classnames from 'classnames'
import axios from 'axios';
import {connect} from 'react-redux';
import Notifications,{notify } from './Notifications'

class Home extends Component {
    state = { 
        loading:true
     }

     componentDidMount() {
        const url='https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
        axios.get(url)
            .then(
                (res)=> {
                    console.log('----response prinvat bank---', res.data);
                    this.setState({loading: false});
                    notify('Дані отримані успішно','#28a745')
                },
                (err) => {
                    console.log('-----Error upload data------', err.response.data);
                }
            );
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
                 <div className={classnames('modal', { 'open': loading })}>
                    <div className="position-center">
                        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                        <span className="sr-only">Loading...</span>
                    </div>
            </div>
            <Notifications/>
            <p>Home page {count}</p>
            <button onClick={()=>notify('Hello Peter','#723')}>Show message</button>
            <button className="btn btn-success" onClick={this.btnIncrementConter}>Counter++</button>
            <button className="btn btn-danger" onClick={this.btnDecrementConter}>Counter--</button>
            </div>
        );
    }
}
const mapStateProps=(state)=>
{
    console.log('----Render store connect----',state);
    return{
        count:state.counter.counterStore
    };
}
 
export default connect(mapStateProps)(Home);
