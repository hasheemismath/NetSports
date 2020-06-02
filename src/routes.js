import React from 'react';
import Layout from "./HOC/layout";
import {Route,Switch} from 'react-router-dom'
import Home from "./Components/home";

const  Routes=()=> {
  return (
    <Layout>
        <Switch>
            <Route exact component={Home} path="/"/>
        </Switch>
    </Layout>
  );
}

export default Routes;
