import React, { useState } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Wrapper from '../Wrapper'
import Button from '../Menu/Button'
import Menu from '../Menu'
import { StyledHeader, StyledLogo } from './style'

const Header = () => {
    const [open, setOpen] = useState(false)
    
    return (
        <>
            <Wrapper width="90%">
                <StyledHeader>
                    <StyledLogo>
                        <AniLink fade to="/">Rossi</AniLink>
                    </StyledLogo>

                    <Button open={open} setOpen={setOpen} />
                </StyledHeader>
            </Wrapper>
                    
            <Menu open={open} />
        </>
    )
}

export default Header
