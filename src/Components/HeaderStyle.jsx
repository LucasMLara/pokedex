import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--header-height);
  background: hsl(0, 100%, 80%);
  color: #ffff;
  font-size: 2em;
  & .icone {
    background: inherit;
    position: absolute;
    right: 2em;
    transition: 0.5s ease-out;
  }
  & .icone:hover {
    color: #383737;
  }
`;
const HeaderImg = styled.img`
  height: 150%;
  background: inherit;
  @media (max-width: 420px) {
    margin-left: -4em;
  }
`;

export { StyledHeader, HeaderImg };
