import React from 'react'

import { StyledWrapper } from './style'

const Wrapper = ({ width, children }) => {
    return (
        <StyledWrapper width={width}>
            {children}
        </StyledWrapper>
    )
}

export default Wrapper
