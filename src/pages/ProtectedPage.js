import React, { useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom';

export const ProtectedPage = () => {
    const history=useNavigate();
    const isAuthed = true;
    useEffect(()=>{
        if(!isAuthed){
            history.push('/');
        }
    })
    
    return (
        <h1> Only authenticated user can see this page</h1>
    );
} 