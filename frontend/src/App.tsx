import React from "react";
import "normalize.css";
import styles from "./App.module.css";
import TheHeader from "./components/TheHeader";
import AppContextProvider from "./AppContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CircleFeed from "./routes/CircleFeed";
import HomePage from "./routes/HomePage";
import PageNotFound from "./routes/PageNotFound";
import LoginPage from "./routes/LoginPage";
import ScrollToTop from "./scrollToTop";

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <ScrollToTop>
          <TheHeader />
          <div className={styles.container}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Route path="/:circle" component={CircleFeed} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
