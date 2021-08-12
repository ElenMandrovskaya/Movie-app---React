import { lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from "./App.styled";
import { AppBar } from "../components/AppBar/AppBar";
// import { HomePage } from "../pages/HomePage/HomePage";
// import { MoviesPage } from "../pages/MoviesPage/MoviesPage";
// import { MovieDetailsPage } from "../pages/MovieDetailsPage/MovieDetailsPage";
import { Spinner } from '../components/Spinner/Spinner';

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage/MovieDetailsPage"));


export default function App() {
    return (
        <>
            <AppBar />
            <Container>
                <Suspense fallback={<Spinner/>}>
                    <Switch>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        <Route exact path="/movies">
                            <MoviesPage/>
                        </Route>
                        <Route path="/movies/:movieId">
                            <MovieDetailsPage />
                        </Route>
                    </Switch>
                </Suspense>
            </Container>
            <ToastContainer />
            </>
  )
}
