import React from "react";
import { Greeting } from "../Greeting";


export const HomePage = () => (
    <>
    <h1>The home page</h1>
    <Greeting name="Shaun" numberOfMessages={30}></Greeting>
    </>
);

