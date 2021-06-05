import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Container } from '../Container/Container';
import { Input } from '../Input/Input';

import { Background } from './styles';

export const Fridge = () => {
    const [fragments, setFragments] = useState({});

    const addFragment = (nu) => {
        const old = fragments;
        const index = Object.keys(old).length + 1;
        setFragments({ ...old, [index]: { ...nu }});
    }

    const addBulk = (bulk) => {
        const old = fragments;
        setFragments({ ...old, ...bulk })
    }

    return (
        <Background>
            <Input fragments={fragments} addFragment={addFragment} addBulk={addBulk} />
            <DndProvider backend={HTML5Backend}>
                <Container fragments={fragments} setFragments={setFragments} />
            </DndProvider>
        </Background>
    );
};
