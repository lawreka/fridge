import React, { createRef, useState } from 'react';
import { isMobile } from 'react-device-detect';

import { CSV } from './CSV/CSV';
import { Random } from './Random/Random';
import { getRandomPosition } from './utils';
import {
    Wrapper,
    HideCSV,
    HideSingle,
    HelpText,
    SingleInput,
    WordInput,
    WordInputSubmit
} from './styles';

export const Input = ({
    fragments,
    addFragment,
    addBulk,
    csvInputHidden,
    setCSVInputHidden,
    singleInputHidden,
    setSingleInputHidden,
}) => {
    const buttonRef = createRef();
    const [value, setValue] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            const position = getRandomPosition();
            addFragment({ ...position, title: value });
            setValue('');
        }
    }

    const handleOpenDialog = (e) => {
        if (buttonRef.current) {
            buttonRef.current.open(e);
        }
    };

    const handleOnFileLoad = (data) => {
        if (data.some((parsed) => parsed.errors.length > 0)) {
            const dataWithErrors = data.find((parsed) => parsed.errors.length > 0);
            const error = dataWithErrors.errors[0].message;
            setErrorMessage(error);
        }
        let csvData = data;
        let bulkFragments = {};
        const old = fragments;
        const index = Object.keys(old).length + 1;
        for (let i = 0; i < csvData.length; i++) {
            const fragment = csvData[i].data;
            const position = getRandomPosition();
            bulkFragments[index + i] = { ...position, title: fragment }
        }
        addBulk(bulkFragments);
    };

    const handleHideShowCSVInput = () => {
        setCSVInputHidden(!csvInputHidden)
    }

    const handleHideShowSingleInput = () => {
        setSingleInputHidden(!singleInputHidden);
    }

    return (
        <Wrapper id="input-controls-wrapper">
            {singleInputHidden ? (
                <HideCSV onClick={handleHideShowCSVInput}>
                        {csvInputHidden ? (`Show CSV input`): (`Hide CSV input`)}
                </HideCSV>
            ): null}
            {csvInputHidden ? (
                <HideSingle onClick={handleHideShowSingleInput}>
                    {singleInputHidden ? (`Show word input`) : (`Hide word input`)}
                </HideSingle>
            ): null}
            <>
                {!csvInputHidden && (
                    <CSV
                        buttonRef={buttonRef}
                        handleOnFileLoad={handleOnFileLoad}
                        handleOpenDialog={handleOpenDialog}
                        errorMessage={errorMessage}
                    />
                )}
                {!singleInputHidden && (
                    <>
                        <HelpText isMobile={isMobile}>
                            Add magnets one at a time
                        </HelpText>
                        <SingleInput onSubmit={handleSubmit} id="word-input-form">
                            <WordInput
                                type="text"
                                value={value}
                                onChange={handleChange}
                                autoComplete="off"
                                id="word-input"
                            />
                            <WordInputSubmit type="submit" value="Submit" id="submit-word" />
                        </SingleInput>
                    </>
                )}
            </>
            {singleInputHidden && csvInputHidden && (
                <Random addFragment={addFragment} />
            )}
        </Wrapper>
    );
}
