import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - calc(var(--header-height) + var(--footer-height)));
`;
const SearchPokemonInput = styled.input`
  margin: 1em;
  padding: 2em;
  width: 50vw;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 4px 0px inset;

  &:focus {
    outline: none;
  }
`;
export { Main, SearchPokemonInput };
