import styled from "@emotion/styled";

export const List = styled.ul`
    display: grid;
  
  @media screen and (min-width: 320px) {
    grid-template-columns: 280px;
    grid-gap: 20px;
    justify-content: center;
    justify-items: center;
    
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 294px 294px;
    grid-gap: 30px;
    justify-content: center;
    justify-items: center;
    
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    justify-content: center;
    justify-items: center;
  }
`;