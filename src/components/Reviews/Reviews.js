import PropTypes from "prop-types";
import { List, Item, ReviewerImg, ReviewerName, ReviewText, Wrap } from "./Reviews.styled";
import defaultImg from "../../images/default.png";

export function Reviews({ reviews }) {
    
    return (
        <List>
            {reviews.map(({ author_details, id, author, content }) => (
                <Item key={id}>
                    <Wrap>
                        <ReviewerImg src={author_details.avatar_path === null || author_details.avatar_path.startsWith("/http") ? `${author_details.avatar_path}`.slice(1) : defaultImg}/>
                        <ReviewerName>{author}</ReviewerName>
                    </Wrap>    
                    <ReviewText>{content}</ReviewText>
                </Item>
            ))}
        </List>
    )
}

Reviews.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        author: PropTypes.string,
        content: PropTypes.string,
        author_details: PropTypes.object
    }),),
}
