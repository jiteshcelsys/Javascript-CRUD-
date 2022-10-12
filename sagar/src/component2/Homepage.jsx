import React from "react";
import {useSelector, useDispatch} from "react-redux";
function Homepage() {
    const  balance=useSelector(state=>state.balance);
    const dispatch=useDispatch();

    return (
        <div>
            <h1>{balance}</h1>
            <h1>HomePage</h1>
        </div>
    );
}

export default Homepage;
