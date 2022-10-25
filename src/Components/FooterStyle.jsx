import styled from "styled-components";

const StyledSocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 9em;
  background: inherit;
  svg {
    font-size: 2em;
    color: inherit;
    background: inherit;
    transition: 0.5s ease-out;
  }
  svg:hover {
    scale: 1.25;
    opacity: 0.5;
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  height: var(--footer-height);
  background: hsl(0, 100%, 80%);
  color: #ffff;
  font-size: 1em;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: inherit;
  margin-right: 4em;
`;

const SocialMediaContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 9em;
  background: inherit;
  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
`;
const P = styled.p`
  background: inherit;
  color: #3f3f3f;
  font-weight: 600;
`;

export {
  StyledFooter,
  StyledSocialContainer,
  P,
  InfoContainer,
  SocialMediaContainer,
};
