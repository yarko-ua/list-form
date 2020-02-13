import React from 'react';
import ShowArrays from '../ShowArrays/ShowArrays';
import Form from '../form/Form';

function Main() {

    return (
        <>
            <div className="ToDoList">
                <h1 className="title">To Do List:</h1>
                <ShowArrays />
            </div>
            <div className="LoginForm">
                <h1>sign in to your account</h1>
                <Form />
                <a href="https://yarko-ua.github.io/boot/">Forgot your password?</a>
            </div>
        </>
    );

}

export default Main