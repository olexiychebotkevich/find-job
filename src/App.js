import React from 'react';
import Layout from './components/Layout'
import {Route} from 'react-router'
import Home from './components/Home';




function App() {
  return (
    <div>
      
      <Layout>
      <Route exact path ='/' content={Home}/>
      </Layout>
      
    </div>
  );
}

export default App;
