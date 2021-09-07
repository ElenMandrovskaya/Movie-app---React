import styled from "@emotion/styled";

export const MoviesListByActor = styled.ul`
display: flex;
justify-content: space-between;
`;

export const MovieCardByActor = styled.li`
border-radius: 4px;
box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
transition: all 250ms ease-in-out;
&:hover,
&:focus {
    transform: scale(1.03);
    box-shadow: 0px 0px 10px 4px #fd004b;
}

`;

export const MoviePosterByActor = styled.img`
height: 320px;
width: 213px;
border-radius: 4px;
`;

export const MovieInfoByActor = styled.div`
max-width: 213px;
padding: 5px;
display: flex;
justify-content: space-between;
`;

export const MovieTitleByActor = styled.p`
font-weight: 600;
font-size: 14px;
text-transform: uppercase;
color: #fd004b;
`;

export const MovieYearByActor = styled.p`
font-weight: 600;
`;