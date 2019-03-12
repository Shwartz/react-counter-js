import { CssBaseline, Grid, List, ListItem } from "@material-ui/core";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import styles from "./App.module.scss";
import React, { Component } from "react";
import Home from "./pages/Home";
import Lesson1 from "./pages/lesson1/Lesson1";

class App extends Component {
    state = {
        selectedIndex: 0
    };

    handleListItemClick = (ev, index) => {
        this.setState({
            selectedIndex: index
        });
    };

    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <div className={styles.App}>
                    <CssBaseline />
                    <Grid container={true} spacing={16}>
                        <Grid item={true} sm={4} xs={12}>
                            <List component="nav">
                                <Link to="/">
                                    <ListItem
                                        button={true}
                                        selected={
                                            this.state.selectedIndex === 1
                                        }
                                        onClick={ev => {
                                            this.handleListItemClick(ev, 1);
                                        }}
                                    >
                                        Home
                                    </ListItem>
                                </Link>
                                <Link to="/lesson-1">
                                    <ListItem
                                        button={true}
                                        selected={
                                            this.state.selectedIndex === 2
                                        }
                                        onClick={ev => {
                                            this.handleListItemClick(ev, 2);
                                        }}
                                    >
                                        Lesson 1 - Simple counter
                                    </ListItem>
                                </Link>
                            </List>
                        </Grid>
                        <Grid item={true} sm={8} xs={12}>
                            <section>
                                <Switch>
                                    <Route
                                        exact={true}
                                        path="/"
                                        component={Home}
                                    />
                                    <Route
                                        path="/lesson-1"
                                        component={Lesson1}
                                    />
                                </Switch>
                            </section>
                        </Grid>
                    </Grid>
                </div>
            </Router>
        );
    }
}

export default App;
