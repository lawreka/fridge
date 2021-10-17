import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { isMobile } from 'react-device-detect';

import { Container } from '../Container/Container';

import { Background } from './styles';

export const Fridge = ({
    fragments,
    setFragments,
    deleteFragment,
}) => {
    console.log(isMobile);
    return (
        <Background id="fridge-background">
            {isMobile ? (
                <DndProvider backend={TouchBackend}>
                    <Container
                        fragments={fragments}
                        setFragments={setFragments}
                        deleteFragment={deleteFragment}
                    />
                </DndProvider>
            ): (
                <DndProvider backend={HTML5Backend}>
                    <Container
                        fragments={fragments}
                        setFragments={setFragments}
                        deleteFragment={deleteFragment}
                    />
                </DndProvider>
            )}
        </Background>
    );
};
