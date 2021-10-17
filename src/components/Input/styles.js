import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    z-index: 4;
    display: flex;
    flex-direction: column;
`;

export const HideCSV = styled.button`
    cursor: pointer;
    width: max-content;
    margin-bottom: 16px;
`;

export const HideSingle = styled.button`
    cursor: pointer;
    width: max-content;
    margin-bottom: 16px;
`;

export const HelpText = styled.div`
    font-size: 14px;
    margin-bottom: 8px;
    max-width: ${({ isMobile }) => isMobile ? '' : 'calc(15vw)'};
`;

export const SingleInput = styled.form`
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
`;

export const WordInput = styled.input`
    max-width: 100%;
    margin-bottom: 16px;
`;

export const WordInputSubmit = styled.input`
    width: max-content;
`;
