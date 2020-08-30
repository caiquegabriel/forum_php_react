import React  from 'react';
import Forum  from './Forum';
import { get_forums } from './api/Forums.js';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Forums extends React.Component {

    constructor( props ){
        super(props); 

    } 

    routes(){ 

        const foruns = get_forums();
        
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            {
                                foruns.map( forum => { 
                                    console.log(forum);
                                   return (
                                        <li>
                                            <Link to={'/vForum/'+forum.id}  >  {forum.name} </Link> 
                                        </li> 
                                   )
                                })
                            }
                        </ul>
                    </nav>
        
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch> 
                    <Route path="/vForum/:topicID"><Forum/></Route> 
                </Switch>
                
                </div>
            </Router>
        )
    } 

    render(){ 
        return ( [<h2> Forum </h2> , this.routes() ]);
    } 

} 