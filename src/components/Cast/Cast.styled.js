import styled from "@emotion/styled";

export const List = styled.ul`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 50px;
`;

export const Actor = styled.li`
border-radius: 4px;
padding: 7px;
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  transition: all 250ms ease-in-out;
    &:hover,
    &:focus {
      transform: scale(1.05);
      box-shadow: 0px 0px 10px 4px #fd004b;
    }
`;
export const Photo = styled.img`
  display: block;
  margin: 0 auto;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;
export const Name = styled.p`
margin-top: 8px;
text-align: center;
background-color: #fd004b;
color: white;
border-radius: 5px;
font-weight: 600;
`;

