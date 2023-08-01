import React from "react";
import { useUserData } from "../useUserData";
export const UserProfilePage = () => {
    const user=useUserData();
    return (
        <div>
            <h3>Name: {user.name.first} {user.name.last}</h3>
            <h3>Email: {user.email}</h3>
        </div>
    );
}