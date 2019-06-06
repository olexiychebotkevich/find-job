import React, { Component } from 'react';
import './Modal.css';
import classnames from 'classnames'
import axios from 'axios';

class Home extends Component {
    state = { 
        loading:true
     }

     componentDidMount(){
         const url ='https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';
        axios.get(url).then(
            (res)=>{
                console.log('----- response privat bank -----',res.data);
            },
            (err)=>{
                console.log('Error upload data------',err.response.data);
            }
        )
        //  setTimeout(
        //      function(){
        //       console.log("Completed!!!");
        //       this.setState({loading:false});
        //      }.bind(this),
        //      3000
        //  );
         
     }
    render() { 
        const {loading}=this.state; 
        console.log('----Render component Home-----',this.state);
        return ( 
            <div>
                <h1>Hello Peter</h1>
                <div className={classnames("modal",{"open":loading})}>
                    <div className="position-center">
                    <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                    <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Home;
