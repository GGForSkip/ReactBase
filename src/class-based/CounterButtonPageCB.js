import React from "react";
import { CounterButtonCB } from "./CounterButtonBC";
import { CongratulationsMessageCB } from "./CongratulationsMessageCB";
import { DisplayIf } from "../DisplayIf";

export class CounterButtonPageCB extends React.Component {
    state = {
        hideMessage: false,
        numberOfClicks: 0, 

    };

    //UNSAFE API: api that will not be used because deprecated features
    //#region 
    UNSAFE_componentWillMount() {
    }

    UNSAFE_componentWillReceiveProps(){

    }

    UNSAFE_componentWillUpdate(){

    }
    //#endregion
    
    constructor(){
       
    }; 

    increment = () =>{
        this.setState({numberOfClicks: this.state.numberOfClicks++});
    }

    //called when component is mounted
    componentDidMount() {
    }

    //called when a prop is update
    componentDidUpdate(){

    }

    //called when component is destroyed
    componentWillUnmount() { 

    }

    render() {
        const { hideMessage, numberOfClicks } = this.state;
        return (
            <>
                <h1>The counter button page!</h1>
                <DisplayIf condition={!hideMessage && numberOfClicks>=10}>
                <CongratulationsMessageCB 
                    threshold={10}
                    onHide={() => this.setState({ hideMessage : true})} />
                </DisplayIf>
                <CounterButtonCB numberOfClicks={numberOfClicks} onIncrement={increment}></CounterButtonCB>
            </>
        );
        
    }
}