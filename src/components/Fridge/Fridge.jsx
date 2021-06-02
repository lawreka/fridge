import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Container } from '../Container/Container';
import { Input } from '../Input/Input';

import { Background } from './styles';

// const exampleFragments = {
//     a: { top: 20, left: 80, title: 'Boooop' },
//     b: { top: 180, left: 20, title: 'Drag me too' },
// }

export const Fridge = () => {
    const [fragments, setFragments] = useState({});

    const addFragment = (nu) => {
        const old = fragments;
        const index = Object.keys(old).length + 1;
        
        console.log(old);
        console.log(old.length + 1 || 0);
        setFragments({ ...old, [index]: { ...nu }});
    }

    console.log(fragments);
    return (
        <Background>
            <Input fragments={fragments} addFragment={addFragment} />
            <DndProvider backend={HTML5Backend}>
                <Container fragments={fragments} setFragments={setFragments} />
            </DndProvider>
        </Background>
    );
};
