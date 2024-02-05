import { useState } from 'react';

export function useForm() {
    const [userForm, setUserForm] = useState({
        username: "",
        password: ""
    });

    function handleInput(name, value) {
        setUserForm((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const { username, password } = userForm;
        console.log(username);
        console.log(password);
    }

    return {
        userForm,
        handleInput,
        handleSubmit
    };
}
