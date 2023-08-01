import React, {useEffect} from "react";
import { Button } from "./Button";

export const CongratulationsMessage = ({ threshold, onHide }) => {

    // NB: not change hook inside useEffect, create inifinite loop
    useEffect(() => {
        return () => console.log("CongratulationsMessage unmounting!");
    },[]);
    return (
    <>
        <h1> Congratulations! You've reaced {threshold} number of click!</h1>
        <Button onClick={onHide}>Hide</Button>
    </>
    );
}