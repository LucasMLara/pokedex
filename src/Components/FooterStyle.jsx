import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 5em;
  background: hsl(0,100%,80%);
  color: #ffff;
  font-size: 1em;
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: inherit;
  margin-right: 4em;
`

const SocialMediaContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 9em;
  background: inherit;
`
const ListMediaItem = styled.li`
  a{
    
  }
`

const P = styled.p`
  background: inherit;
  color: #3f3f3f;
  font-weight: 600;
`

export { StyledFooter, P, InfoContainer, SocialMediaContainer, ListMediaItem }