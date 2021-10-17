import styled from 'styled-components';

export const RandomButton = styled.button`
    width: max-content;
    margin-bottom: 16px;
`;

export const Definition = styled.div`
    font-style: italic;
    max-width: ${({ isMobile }) => isMobile ? '' : 'calc(15vw)'};
`;

export const AddButton = styled.button`
    margin-right: 16px;
`;
