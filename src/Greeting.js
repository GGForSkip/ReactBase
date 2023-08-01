import React from 'react';

//props contains all props passed to the component
export function Greeting({ name , numberOfMessages }){
    //if i dont wanna show a component, for some reason, i have to return null ad not undefined
    // undefined throw error if returned
    if(!name){return null};
    let isMorning= (new Date()).getHours() <12 ;
    let isMorningTmpl=isMorning? <h3>Good morning {name}!</h3>: <h3>Good evening {name}!</h3>;
    return (
        <>
            {isMorningTmpl}
            {numberOfMessages===0? null:
             <p>You have {numberOfMessages} new messages</p>
            }
           
        </>
    );
   
}

//export default Greeting;