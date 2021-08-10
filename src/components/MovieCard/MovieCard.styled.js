import styled from "@emotion/styled";

export const Card = styled.li`
    display: grid;
    align-items: center;

    @media screen and (min-width: 320px) {
    padding-bottom: 40px;
    }
    @media screen and (min-width: 768px) {
    padding-bottom: 50px;
    }
    @media screen and (min-width: 1024px) {
    padding-bottom: 50px;
    }
`;

export const Poster = styled.img`
    margin-bottom: 10px;
    height: 350px;
    cursor: pointer;
    border-radius: 5px;
`;

export const MovieTitle = styled.h2`
font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.33;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 5px;
`;

export const MovieInfo = styled.div`
display: flex;
justify-content: space-between;
`;

export const MovieGenre = styled.p`
display: flex;
  justify-content: start;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: fuchsia;
`;

export const MovieRate = styled.p`
  height: fit-content;
  background-color: fuchsia;
  border-radius: 5px;
  color: #ffffff;
  text-align: center;
  padding: 0px 8px;
`;