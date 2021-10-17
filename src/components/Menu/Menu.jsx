import React, { useState } from 'react';

import { Input } from '../Input/Input';
import { HelpText } from '../Input/styles';
import {
    Wrapper,
    TrashWrapper,
    TrashZone
} from './styles';

export const Menu = ({
    fragments,
    addFragment,
    addBulk
}) => {
    const [csvInputHidden, setCSVInputHidden] = useState(true);
    const [singleInputHidden, setSingleInputHidden] = useState(true);

    return (
        <Wrapper id="menu-wrapper">
            <Input
                fragments={fragments}
                addFragment={addFragment}
                addBulk={addBulk}
                csvInputHidden={csvInputHidden}
                setCSVInputHidden={setCSVInputHidden}
                singleInputHidden={singleInputHidden}
                setSingleInputHidden={setSingleInputHidden}
            />
            <TrashWrapper id="trash-wrapper">
                <HelpText>
                    Drag magnets into the trash zone below to delete them
                </HelpText>
                <TrashZone id="trash-zone" />
            </TrashWrapper>
        </Wrapper>
    );
}
