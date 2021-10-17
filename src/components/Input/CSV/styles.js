import styled from 'styled-components';

export const HelpText = styled.div`
    font-size: 14px;
    margin-bottom: 8px;
    max-width: ${({ isMobile }) => isMobile ? '' : 'calc(15vw)'};
`;

export const CSVInput = styled.div`
    display: flex;
    margin-bottom: 16px;
`;

export const FileName = styled.div`
    margin-left: 8px;
`;

export const Error = styled.div`
    margin-left: 8px;
`;

export const SubmitButton = styled.input`
    cursor: pointer;
    margin-bottom: 16px;
`;
