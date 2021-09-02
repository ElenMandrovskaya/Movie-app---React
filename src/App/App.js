import { lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";

import getTheme from '../redux/theme/theme-selectors';
import { BgLayuot, Container } from "./App.styled";
import { AppBar } from "../components/AppBar/AppBar";
import { Spinner } from '../components/Spinner/Spinner';
import ThemeSwitch from '../components/ThemeSwitch/ThemeSwitch'
import ActorPage from '../pages/ActorPage';

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage/MovieDetailsPage"));


export default function App() {
    const darkTheme = useSelector((state) => getTheme(state));
    // console.log(darkTheme)
    return (
        <BgLayuot className={darkTheme ? "dark-theme" : ''}>
            <ThemeSwitch />
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
                        <Route path="/actor">
                            <ActorPage />
                        </Route>
                    </Switch>
                </Suspense>
            </Container>
            <ToastContainer />
            </BgLayuot>
  )
}
