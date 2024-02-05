import React from "react";
import { useForm } from "./useForm";

export function Form() {
    const { userForm, handleInput, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={userForm.username}
                onChange={(e) => handleInput("username", e.target.value)}
                type="text"
            />
            <input
                name="password"
                value={userForm.password}
                onChange={(e) => handleInput("password", e.target.value)}
                type="password"
            />
            <p>{userForm.username}</p>
            <p>{userForm.password}</p>
            <button type="submit">Submit</button>
        </form>
    );
}
