import React from "react";
import {useSelector,useDispatch} from "react-redux";

function Deposit() {
    const balance=useSelector(state=>state.balance);
    const dispatch=useDispatch();
    function DepositHandle()
    {
        dispatch({type:"Deposit", payload:10});
    }

    return (
        <div>
            <h2>Balance:{balance}</h2>
            <button onClick={DepositHandle}>Deposit</button>
            <h1>Deposit Page</h1>
        </div>
    );
}

export default Deposit;
