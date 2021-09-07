import styled from "@emotion/styled";

export const ActorContainer = styled.div`
display: flex;
align-items: flex-start;
margin: 0 auto;
padding: 20px;
background-color: white;
box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
 transition: all 250ms ease-in-out;
    &:hover,
    &:focus {
      transform: scale(1.05);
      box-shadow: 0px 0px 10px 4px #fd004b;
    }
`;
export const ActorPhoto = styled.img`
display: block;
margin-right: 20px; 
height: 550px;
cursor: pointer;
border-radius: 5px;
object-fit: cover;
`;
export const ActorsInfoContainer = styled.div`
`;
export const ActorName = styled.p`
font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.33;
  text-transform: uppercase;
  color: #fd004b;
  margin-bottom: 15px;
`;
export const ActorBio = styled.p`
  display: flex;
  justify-content: start;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: #000000;
  margin-bottom: 15px;
`;
export const ActorPlace = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.33;
  text-transform: uppercase;
  margin-bottom: 12px;
  color: #fd004b;
`;
export const ActorBirthday = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.33;
  text-transform: uppercase;
  margin-bottom: 12px;
  color: #fd004b;
`;
export const KnownMovTitle = styled.p`
font-weight: 600;
  font-size: 16px;
  line-height: 1.33;
  text-transform: uppercase;
  margin-bottom: 12px;
  color: #fd004b;
`;