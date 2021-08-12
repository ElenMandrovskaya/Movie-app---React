import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../services/apiService"
import { Reviews } from "../../components/Reviews/Reviews";
import { toast } from "react-toastify";

export default function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null)

    useEffect(() => {
        async function getReviewsDetails() {

            try {
            const reviews = await getReviews(movieId);
            
                if (!reviews.length) {
                    throw new Error("Reviews not found");
                }

            setReviews(reviews);
                
            } catch (error) {
                toast.warning("Reviews not found");
                console.log(error);
            }
            const reviews = await getReviews(movieId);

            setReviews(reviews);
            window.scrollTo({ top: 560, behavior: "smooth" });
        }
        getReviewsDetails();
    }, [movieId])

    return (
    <>
            {reviews && <Reviews reviews={reviews} />}
    </>       
    )
}