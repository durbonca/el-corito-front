import styled from "styled-components";

export const PaginationContainer = styled.nav`
    border-top: dashed 2px #ddd;
    font-size: 0.875rem;
    font-weight: 700;
    margin: 3rem 0 0;
    padding-top: 3rem;
    text-align: center;
`;

export const NavLinks = styled.div`

`;

export const PageNav = styled.a`
    border: 1px solid #121212;
    border-radius: 2px;
    display: inline-block;
    line-height: 1em;
    margin: 0 3px;
    padding: 0.75rem;
    color: #121212;
    text-decoration: none;
    transition: all 0.15s ease-in-out;
    background-color: transparent;
    cursor: pointer;

    ${props => props.active && `
        color:  #fff;
        background-color: #121212;`
    }

    &:hover, &:focus{
        color:  #fff;
        background-color: #121212;
    }
`;
