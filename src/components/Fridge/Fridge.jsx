import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Container } from '../Container/Container';

import { Background } from './styles';

export const Fridge = ({
    fragments,
    setFragments,
    deleteFragment,
}) => {
    return (
        <Background id="fridge-background">
            <DndProvider backend={HTML5Backend}>
                <Container
                    fragments={fragments}
                    setFragments={setFragments}
                    deleteFragment={deleteFragment}
                />
            </DndProvider>
        </Background>
    );
};
