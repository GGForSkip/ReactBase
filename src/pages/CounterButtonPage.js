import React, {useEffect,useState} from "react";
import { useParams,useLocation } from "react-router-dom";
import queryString from 'query-string';
import  { CounterButton } from "./../CounterButton";
import  { CongratulationsMessage } from "./../CongratulationsMessage";
import { DisplayIf } from "../DisplayIf";
import { usePersistanceState } from "../usePersistanceState";
export const CounterButtonPage= () => {
    //const { name }= useParams();
    //get info about route used
    //const location = useLocation();
    //prop search 
    //console.log(queryString.parse(location));
    //const startingValue=queryString.parse(location.search).startingValue || 0;   
   const [ numberOfClicks, setNumberOfClicks] =usePersistanceState('numberOfClicks',0,Number);

    const increment= () => setNumberOfClicks(numberOfClicks + 1);

    return (
       <>
            <h1>The counter button page!</h1>
            <DisplayIf condition={!hideMessage && numberOfClicks>=10}>
              <CongratulationsMessage 
                threshold={10}
                onHide={setHideMessage} />
            </DisplayIf>
            <CounterButton numberOfClicks={numberOfClicks} onIncrement={increment}></CounterButton>
       </>
    );
}