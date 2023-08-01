import React from "react";
export  class CongratulationsMessageCB extends React.Component {
    render(){
        const { threshold, onHide} =this.props;
        return (
            <>
                <h1> Congratulations! You've reaced {threshold} number of click!</h1>
                <button onClick={onHide}>Hide</button>
            </>
        );
    }
}