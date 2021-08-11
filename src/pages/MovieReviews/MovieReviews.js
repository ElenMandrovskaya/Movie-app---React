import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../services/apiService"
import { Reviews } from "../../components/Reviews/Reviews";

export function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null)

    useEffect(() => {
        async function getReviewsDetails() {

            try {
            const reviews = await getReviews(movieId);
            
                if (!reviews.length) {
                    throw new Error("No reviews found");
                }

            setReviews(reviews);
                
            } catch (error) {
                // .error("No reviews found");
                console.log(error);
            }
            const reviews = await getReviews(movieId);

            setReviews(reviews);
            // window.scrollTo({ top: 650, behavior: "smooth" });
        }
        getReviewsDetails();
    }, [movieId])

    return (
    <>
            {reviews && <Reviews reviews={reviews} />}
    </>       
    )
}