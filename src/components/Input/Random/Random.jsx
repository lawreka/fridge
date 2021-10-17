import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';

import { getRandomPosition } from '../utils';
import {
    RandomButton,
    Definition,
    AddButton
} from './styles';

export const Random = ({ addFragment }) => {
    const [previewWord, setPreviewWord] = useState('');
    const [previewDefinition, setPreviewDefinition] = useState('');

    const getRandomWord = async () => {
        const randomWord = await fetch('https://random-words-api.vercel.app/word')
            .then(response => response.json())
            .then(data => {
                return data;
            });
        if (randomWord) {
            const rando = randomWord[0];
            const { word, definition } = rando;
            setPreviewWord(word.toLowerCase());
            setPreviewDefinition(definition);
        }
    }

    const addRandomWord = () => {
        const position = getRandomPosition();
        addFragment({ ...position, title: previewWord });
        setPreviewWord('');
        setPreviewDefinition('');
    }

    const removeRandomWord = () => {
        setPreviewWord('');
        setPreviewDefinition('');
    }

    return (
        <div>
            <RandomButton onClick={getRandomWord}>
                Get random word
            </RandomButton>
            <div>{previewWord}</div>
            <Definition isMobile={isMobile}>
                {previewDefinition}
            </Definition>
            {previewWord ? (
                <div>
                    <AddButton onClick={addRandomWord}>
                        +
                    </AddButton>
                    <button onClick={removeRandomWord}>
                        -
                    </button>
                </div>
            ): null}
        </div>
    );
}
