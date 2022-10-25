import styled from "styled-components";

const Main = styled.main`
display: flex;
justify-content: center;
align-items: center;
height: calc(100vh - calc(var(--header-height) + var(--footer-height)));
`

export { Main }