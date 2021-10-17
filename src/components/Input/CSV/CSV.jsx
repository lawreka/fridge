import React from 'react';
import { CSVReader } from 'react-papaparse';
import { isMobile } from 'react-device-detect';

import {
    HelpText,
    CSVInput,
    FileName,
    Error,
    SubmitButton,
} from './styles';

export const CSV = ({
    buttonRef,
    handleOnFileLoad,
    handleOpenDialog,
    errorMessage
}) => {
    return (
        <>
            <HelpText isMobile={isMobile}>
                Upload a column of words as csv to make a bunch of magnets
            </HelpText>
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
        </>
    );
}
