import { useDrag } from 'react-dnd';

import { StyledBox } from './styles';

export const Box = ({ id, left, top, hideSourceOnDrag, children, }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'box',
        item: { id, left, top },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [id, left, top]);
    if (isDragging && hideSourceOnDrag) {
        return <div ref={drag} />;
    }
    return (
        <StyledBox ref={drag} style={{ left, top }} role="Box">
            {children}
        </StyledBox>
    );
};
