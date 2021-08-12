import styled from "@emotion/styled";

export const Card = styled.li`
  display: grid;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  padding-bottom: 5px;
  transition: all 250ms ease-in-out;
    &:hover,
    &:focus {
      transform: scale(1.05);
      box-shadow: 0px 0px 10px 4px #E010A1;
    }
`;

export const Poster = styled.img`
    margin-bottom: 10px;
    height: 410px;
    cursor: pointer;
    border-radius: 5px;
`;

export const MovieTitle = styled.h2`
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  color: #E010A1;
  margin-bottom: 5px;
  text-align: center;
`;

export const MovieInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
`;

export const MovieGenre = styled.p`
  display: flex;
  justify-content: start;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.33;
  color: #000;
`;

export const MovieRate = styled.p`
  height: fit-content;
  background-color: #E010A1;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  padding: 0px 8px;
`;