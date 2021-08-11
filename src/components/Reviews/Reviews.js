// import PropTypes from "prop-types";
import { List, Item, ReviewerImg, ReviewerName, ReviewText} from "./Reviews.styled";

export function Reviews({ reviews }) {
    return (
        <List>
            {reviews.map(({ author_details, id, author, content }) => (
                <Item key={id}>
                    <ReviewerImg src={`${author_details.avatar_path}`.slice(1)}/>
                    <ReviewerName>{author}</ReviewerName>
                    <ReviewText>{content}</ReviewText>
                </Item>
            ))}
        </List>
    )
}

