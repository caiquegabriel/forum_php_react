import React  from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, 
    useRouteMatch,
    useParams
  } from "react-router-dom";

function Forum() {

    let params = useParams();
    let topicId = params !== undefined && params.topicID !== undefined ? params.topicID : 0; 

    return ( <h2> View Forum {topicId}  </h2> );
} 


export default Forum;