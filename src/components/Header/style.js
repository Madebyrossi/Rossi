import styled from 'styled-components'

export const StyledHeader = styled.div`
    width: 100%;
    padding: 50px 0 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    z-index: 10;
`
export const StyledLogo = styled.div`
    padding-right: 15px;
    padding-bottom: 30px;
    font-family: ${props => props.theme.fonts.serif};
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: 800;

    a {
        color: ${props => props.theme.colors.black};
    }
`
