import styled from "@emotion/styled";

export const MoviesListByActor = styled.ul`
display: flex;
justify-content: flex-start;
`;

export const MovieCardByActor = styled.li`
box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
transition: all 250ms ease-in-out;
&:hover,
&:focus {
    transform: scale(1.03);
    box-shadow: 0px 0px 10px 4px #fd004b;
}
&:not(:last-child) {
    margin-right: 23px;
}
`;

export const MoviePosterByActor = styled.img`
height: 250px;
width: 170px;
border-radius: 4px;
`;

export const MovieInfoByActor = styled.div`
max-width: 170px;
padding: 5px;
display: flex;
justify-content: space-between;
`;

export const MovieTitleByActor = styled.p`
font-weight: 600;
font-size: 12px;
text-transform: uppercase;
color: #fd004b;
`;

export const MovieYearByActor = styled.p`
font-weight: 600;
`;