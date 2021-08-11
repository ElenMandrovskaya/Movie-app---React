import styled from "@emotion/styled";

export const List = styled.ul`
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const ReviewerImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const ReviewerName = styled.p`
  text-transform: uppercase;
  font-weight: 700px;
`;

export const ReviewText = styled.p`
`;
