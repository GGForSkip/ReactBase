import React from "react";

import { Link, Outlet } from "react-router-dom";

export const FormsNavbar= () =>(
    <>
        <ul>
            <li>
                <Link to="/forms/controlledForm">Controlled Form</Link>
            </li>
            <li>
                <Link to="/forms/uncontrolledForm">Uncontrolled Form</Link>
            </li>
        </ul>
       <Outlet></Outlet>
    </>
);