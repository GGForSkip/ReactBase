import { useState, useEffect } from "react";


export const usePersistanceState = (storageKey,defaultValue,Type) => {
    const [state, setState] = useState(
        Number(localStorage.getItem(storageKey))|| 0
    );
      
    useEffect(()=>{
      localStorage.setItem(storageKey, state);
    },[state]);

    return  [state, setState];
};