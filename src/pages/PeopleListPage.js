import React from 'react';
import { PeopleList } from '../PeopleList';


const people=[
    {
      name: 'John',
      age: 21,
      hairColor: 'blonde'
    },
    {
      name: 'Jinan',
      age: 25,
      hairColor: 'blonde'
    },
    {
      name: 'Pino',
      age: 27,
      hairColor: 'brown'
    }
];


export const PeopleListPage = () => {
    return (
        <>
            <h1>The people list page</h1>
            <PeopleList people={people} />
        </>
        
    )
}