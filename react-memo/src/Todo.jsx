import React from 'react';
import { memo } from 'react';

function Todo({ todos }) {
    console.log("Child render");
    return (
        <div>
            <h2>My todos</h2>
            {todos.map((todo, index) => (
                <p key={index}>{todo}</p>
            ))}
        </div>
    );
}

export default memo(Todo);
