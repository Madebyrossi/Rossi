import styled from 'styled-components'

export const StyledIntro = styled.div`
    padding-top: 14vh;
    padding-right: 9vw;
    font-family: ${props => props.theme.fonts.serif};
    font-size: 4.8rem;
    line-height: 1.1;
    font-weight: 600;

    .space {
        visibility: hidden;
        padding: 0 5px;
    }
`
