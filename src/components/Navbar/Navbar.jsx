import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { contextProvider } from "../Context";

const Navbar = () => {
    const styleActive = "underline underline-offset-4"
    const context = useContext(contextProvider);
    return (
        <nav className="flex justify-between top-0 items-center fixed w-full py-5 px-8 bg-red-200 z-10">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to="/" className={({isActive}) => isActive ? styleActive : undefined}>
                        Shopi
                    </NavLink>
                </li>
                <li>All</li>
                <li>Clothes</li>
                <li>Electronics</li>
                <li>Furtiner</li>
                <li>Toys</li>
                <li>Other</li>
            </ul>
            <ul className="flex items-center gap-3">
                <li>andre@gmail.com</li>
                <li>
                    <NavLink to="/my-orders" className={({isActive}) => isActive ? styleActive : undefined}>
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-account" className={({isActive}) => isActive ? styleActive : undefined}>
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sign-in" className={({isActive}) => isActive ? styleActive : undefined}>
                        Iniciar Sesion
                    </NavLink>
                </li>
                <li className="flex items-center">
                    <ShoppingCartIcon className="h-6 w-6 text-black-500"/>
                    <div>{context.count}</div>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;