import styled from "@emotion/styled";

export const NavList = styled.ul`
display: flex;
@media screen and (min-width: 320px) {
    width: 320px;
    padding: 0 20px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 75px;
  }
  @media screen and (min-width: 1024px) {
    width: 1024px;
    padding: 0 71px;
  }
`;
export const NavItem = styled.li`
&:not(:last-child) {
    margin-right: 50px;
  }
`;