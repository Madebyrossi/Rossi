import styled from 'styled-components'

export const StyledButton = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;

    :hover {
        cursor: pointer;

        p {
            opacity: 1;
            bottom: 7px;
        }
    }

    span {
        width: 90%;
        height: 3px;
        background-color: ${props => props.theme.colors.black};
        position: absolute;
        top: 0;
        left: 5%;

        :last-of-type {
            height: 2px;
            top: 7px;
        }
    }

    p {
        font-size: 10.5px;
        text-transform: uppercase;
        font-weight: 600;
        position: absolute;
        width: 100%;
        text-align: center;
        opacity: 0;
        bottom: -20px;
        transition: opacity ease 0.6s, bottom ease 0.2s;
    }
`
export const StyledMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    transform: ${({ open }) => (open ? 'translateY(0%)' : 'translateY(100%)')};
    opacity: ${({ open }) => (open ? '100%' : '0%')};
    transition: transform cubic-bezier(0.77, 0, 0.175, 1) 1s, opacity cubic-bezier(0.77, 0, 0.175, 1) 1.2s;
    z-index: 9;

    section {
        position: relative;
        width: 50%;
        height: 100%;
        display: flex;
        padding: 20px 50px;
    }
`
export const LeftSide = styled.section`
    background-color: ${props => props.theme.colors.cream2};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h4 {
        font-family: ${props => props.theme.fonts.sans};
        text-transform: uppercase;
        font-size: 0.9rem;
        letter-spacing: 0.1rem;
        opacity: 0.7;
        margin-bottom: 40px;
    }

    ul {
        transition: opacity ease-in-out 0.2s;

        li {
            a {
                font-family: ${props => props.theme.fonts.serif};
                font-size: 3rem;
                font-weight: 600;
            }
        }

        :hover {
            li {
                a {
                    opacity: 0.4;

                    :hover {
                        opacity: 1;
                    }
                }
            }
        }
    }
`
export const RightSide = styled.section`
    background-color: white;
    transform: ${({ open }) => (open ? 'translateY(0%)' : 'translateY(100%)')};
    opacity: ${({ open }) => (open ? '100%' : '0%')};
    transition: transform cubic-bezier(0.77, 0, 0.175, 1) 1.3s, opacity cubic-bezier(0.77, 0, 0.175, 1) 1.5s;
    display: flex;
    align-items: center;
`
