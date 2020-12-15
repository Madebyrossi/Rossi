import React from 'react'
import { bool } from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import links from '../../constants/links'
import sublinks from '../../constants/sublinks'
import { StyledMenu, LeftSide, RightSide } from './style'

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <LeftSide>
                <h4>Services</h4>
                <ul>
                    {links.map((link, index) => {
                        return (
                            <li key={index}>
                                <AniLink fade to={link.path}>
                                    {link.text}
                                </AniLink>
                            </li>
                        )
                    })}
                </ul>
            </LeftSide>

            <RightSide open={open}>
                <ul>
                    {sublinks.map((sublink, index) => {
                        return (
                            <li key={index}>
                                <AniLink fade to={sublink.path}>
                                    {sublink.text}
                                </AniLink>
                            </li>
                        )
                    })}
                </ul>
            </RightSide>
        </StyledMenu>
    )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
