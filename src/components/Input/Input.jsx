import React, { useState } from 'react';

import { Wrapper } from './styles';

export const Input = ({ fragments, addFragment }) => {
    const [value, setValue] = useState('');

    const getRandomPosition = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const top = Math.floor(Math.random() * height);
        const left = Math.floor(Math.random() * width);
        return { top, left }
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const position = getRandomPosition();
        addFragment({ ...position, title: value })
    }

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>
        </Wrapper>
    );
}