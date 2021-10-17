import { useCallback } from 'react';
import { useDrop } from 'react-dnd';
import update from 'immutability-helper';

import { Box } from '../Box/Box';
import { StyledContainer } from './styles';

export const Container = ({
    fragments,
    setFragments,
    deleteFragment
}) => {    
    const moveBox = useCallback((id, left, top) => {
        setFragments(update(fragments, {
            [id]: {
                $merge: { left, top },
            },
        }));
    }, [fragments, setFragments]);
    
    const [, drop] = useDrop(() => ({
        accept: 'box',
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            const left = Math.round(item.left + delta.x);
            const top = Math.round(item.top + delta.y);
            const trashZone = document.getElementById('trash-zone');
            const trashCoords = trashZone.getBoundingClientRect();
            const {
                top: trashTop,
                right: trashRight,
                bottom: trashBottom,
                left: trashLeft
            } = trashCoords;
            if (left > trashLeft && left < trashRight && top > trashTop && top < trashBottom) {
                deleteFragment(item.id);
                return;
            }
            moveBox(item.id, left, top);
            return undefined;
        },
    }), [moveBox]);
    
    return (
        <StyledContainer ref={drop} id="drag-area-container">
            {Object.keys(fragments).map((key) => {
                const { left, top, title } = fragments[key];
                return (<Box key={key} id={key} left={left} top={top} hideSourceOnDrag={true}>
                    {title}
                </Box>);
            })}
        </StyledContainer>
    );
};
