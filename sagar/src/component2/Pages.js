import React from "react";
import Homepage from "./Homepage";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import {BrowserRouter as Router, Route, Switch, NavLink} from"react-router-dom";
function Pages()
{

    return(
    
        <Router>
            <div>
                <header>
                    <ul className='nav' >
                        <li>
                            <NavLink  className='li' to="/">Home</NavLink>
                        </li>
                        <li className='li'>
                            <NavLink  className='li' to="/Deposit">Deposit</NavLink>
                        </li>
                        <li className='li'>
                            <NavLink className="li"to="/Withdraw">withdraw</NavLink>
                        </li>
                

                    </ul>
                    <Switch>
                        <Route path="/" exact component={Homepage}/>
                        <Route path="/Deposit"  component={Deposit}/>
                        <Route path="/Withdraw"  component={Withdraw}/>
                    </Switch>
                </header>
            </div>
      
      
        </Router>
    );
}
export default Pages;
