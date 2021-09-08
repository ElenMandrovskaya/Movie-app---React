import styled from "@emotion/styled";

export const List = styled.ul`
margin-top: 30px;
margin-bottom: 30px;
background-color: inherit;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: inherit;
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  transition: all 250ms ease-in-out;
    &:hover,
    &:focus {
      transform: scale(1.05);
      box-shadow: 0px 0px 10px 4px #fd004b;
    }
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const Wrap = styled.div`
display: block;
width: 150px;
`;
export const ReviewerImg = styled.img`
  /* width: 80px; */
  margin: 0 auto;
  height: 80px;
  border-radius: 8px;
`;

export const ReviewerName = styled.p`
margin-top: 15px;
text-align: center;
background-color: #fd004b;
color: white;
border-radius: 5px;
font-weight: 600;
`;

export const ReviewText = styled.p`
width: 800px;
`;
