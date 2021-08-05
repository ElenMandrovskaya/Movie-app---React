// import { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import { AppBar } from "../components/AppBar/AppBar";

export default function App() {
    return (
        <>
            <AppBar />
            <Switch>
                <Route path="/" exact>
                </Route>
                <Route path="/movies">
                </Route>
            </Switch>
        </>
  )
}
