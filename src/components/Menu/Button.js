import React from 'react'
import { bool, func } from 'prop-types'

import { StyledButton } from './style'

const Button = ({ open, setOpen }) => {
    return (
        <StyledButton open={open} onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <p>Menu</p>
        </StyledButton>
    )
}

Button.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Button
