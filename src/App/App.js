import { Route, Switch } from "react-router-dom";
import { AppBar } from "../components/AppBar/AppBar";
import { MovieList } from "../components/MovieList/MovieList";

export default function App() {
    return (
        <>
            <AppBar />
            <Switch>
                <Route path="/" exact>
                </Route>
                <Route path="/movies">
                    <MovieList />
                </Route>
            </Switch>
        </>
  )
}
