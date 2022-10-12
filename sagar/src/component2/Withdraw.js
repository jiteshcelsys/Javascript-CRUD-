import React from "react";
import {useSelector,useDispatch} from "react-redux";
function Withdraw() {
    const balance=useSelector(state=>state.balance);

    const dispatch=useDispatch();
    function WithdrawHandle()
    {
        dispatch({type:"Withdraw",payload:10});
    }
    return (
        <div>
            <h1>balance:{balance}</h1>
            <button onClick={WithdrawHandle}>withdraw</button>
            <h1>Withdraw Page</h1>
        </div>
    );
}

export default Withdraw;
