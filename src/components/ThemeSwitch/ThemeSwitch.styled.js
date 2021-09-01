import styled from "@emotion/styled";

export const ThemeToolbar = styled.div`
position: absolute;
top: 10px;
right: 10px;
`;

export const ThemeSwitcher = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 130px;
`;

export const ThemeControl = styled.div`
display: flex;
align-items: center;
flex-shrink: 0;
position: relative;
width: 64px;
height: 32px;
border-radius: 50em;
padding: 3px 0;
`;
export const SwitchInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
  &:checked + SwitchLabel {

  }
`;

export const SwitchLabel = styled.label`
position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: transparent;
  user-select: none;
  background-color: #333;
  border-radius: inherit;
  z-index: 1;
  cursor: pointer;
`;

export const SwitchMarker = styled.div`
position: relative;
    background-color: #fff;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    z-index: 2;
    pointer-events: none;
    box-shadow: 0 1px 1px rgb(0 0 0 / 25%);
    left: 3px;
    transition: left .2s;
    will-change: left;
    
`;

