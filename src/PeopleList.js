import React from "react";
import { PeopleListItem } from "./PeopleListItem.js";
import styled from 'styled-components';

const Wrapper=styled.div`
    border: 1px solid white !important;
    padding: 32px;
`
export const PeopleList = ({ people }) =>(
    <Wrapper>
        {people.map((person,i) =>(
            <PeopleListItem person={person} key={i}></PeopleListItem>
        ))};
    </Wrapper>   
)