import React from "react";
import { Button, SuccessButton } from "../Button"; 
export const UncontrolledFormPage = () =>{

    const nameInput = React.createRef();
    const emailInput = React.createRef();
    const favoriteColorInput = React.createRef();
    return (
        <form>
            <h3>Please enter your information:</h3>
            <div>
                <input type="text" placeholder="Name" ref={nameInput} />
            </div>
            <div>
                <input type="email" placeholder="Email" ref={emailInput}/>
            </div>
            <div>
                <input type="text" placeholder="Favourite Color" ref={favoriteColorInput} />
            </div>
            <SuccessButton onClick={ e =>{ 
                alert(
                `   Your name is ${nameInput.current.value},
                    Your email is ${emailInput.current.value},
                    Your favorite color is ${favoriteColorInput.current.value}!`
                );
                e.preventDefault();
                }}>
                    Submit</SuccessButton>
        </form>
    )
}