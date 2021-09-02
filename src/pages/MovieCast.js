import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../services/apiService";
import { Cast } from "../components/Cast/Cast";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MovieCast() {
    const { movieId } = useParams();
    const [actors, setActors] = useState(null);

    useEffect(() => {
        async function getCastDetails() {
            try {
                const cast = await getCast(movieId);

                if (!cast.length) {
                    throw new Error("Cast not found");
                }

            setActors(cast);
                
            } catch (error) {
                console.log(error)
                toast.info("Cast not found")
            }
            const cast = await getCast(movieId);

            setActors(cast);
            window.scrollTo({ top: 560, behavior: "smooth" });
        }
        getCastDetails();
    }, [movieId])

    return (
        <>
            {actors && <Cast actors={actors} />}
        </>
    )
}