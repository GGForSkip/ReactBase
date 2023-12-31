import React,{ useState } from "react";
import { DangerButton } from "../Button";
export const ControlledFormPage= () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [favoriteColor, setFavoriteColor] = useState('');

    return (
        <form>
            <h3>Please enter your information:</h3>
            <div>
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <input type="text" placeholder="Favourite Color" value={favoriteColor} onChange={e => setFavoriteColor(e.target.value)} />
            </div>
            <DangerButton onClick={ e =>{ 
                alert(
                    `Your name is ${name}`,
                    `Your email is ${email}`,
                    `Your favorite color is ${favoriteColor}!`
                )}}>
                    Submit</DangerButton>
        </form>
    )
}