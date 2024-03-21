import React from "react";

export default function Payment(props){
    return (
        <div className="payment">
            <h4>PAYMENT: </h4>
            <div className="payment-details">
                <p className="amount">{props.amount}</p>
                <p className="payment-method">{props.method}</p>
            </div>
        </div>
    )
}