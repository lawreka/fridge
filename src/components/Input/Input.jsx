import React, { createRef, useState } from 'react';
import { CSVReader } from 'react-papaparse';

import {
    Wrapper,
    HideCSV,
    HideSingle,
    HelpText,
    CSVInput,
    FileName,
    Error,
    SingleInput,
    TextSubmit,
    SubmitButton
} from './styles';

export const Input = ({ fragments, addFragment, addBulk }) => {
    const buttonRef = createRef();
    const [value, setValue] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [csvInputHidden, setCSVInputHidden] = useState(true);
    const [singleInputHidden, setSingleInputHidden] = useState(true);

    const getRandomPosition = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const top = Math.floor(Math.random() * (height - height * 0.05));
        const left = Math.floor(Math.random() * (width - width * 0.05));
        return { top, left }
    }

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
        <>
            <HideCSV onClick={handleHideShowCSVInput}>{csvInputHidden ? (`Show CSV input`): (`Hide CSV input`)}</HideCSV>
            <HideSingle onClick={handleHideShowSingleInput}>{singleInputHidden ? (`Show word input`) : (`Hide word input`)}</HideSingle>
                <Wrapper>
                {!csvInputHidden && (
                    <>
                        <CSVReader
                            ref={buttonRef}
                            onFileLoad={handleOnFileLoad}
                            noClick
                            noDrag
                            noProgressBar
                        >
                            {({ file }) => {
                                return (
                                    <CSVInput>
                                        <SubmitButton
                                            type="button"
                                            onClick={handleOpenDialog}
                                            value="Import csv"
                                        />
                                        <FileName>{file && file.name}</FileName>
                                        {file && errorMessage && (<Error>Warning: {errorMessage}</Error>)}
                                    </CSVInput>
                                )
                            }}
                        </CSVReader>
                        <HelpText>Upload a column of words as csv to make a bunch of magnets</HelpText>
                    </>
                )}
                {!singleInputHidden && (
                    <>
                        <SingleInput onSubmit={handleSubmit}>
                            <SubmitButton type="text" value={value} onChange={handleChange} autoComplete="off" />
                            <TextSubmit type="submit" value="Submit" />
                        </SingleInput>
                        <HelpText>Add magnets one at a time</HelpText>
                    </>
                )}
                </Wrapper>
            {}
        </>
    );
}