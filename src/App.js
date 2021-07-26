import { HomePage, DetailPage, FavoritePage } from "./pages";
import { StyleReset, Container } from "atomize";
import { Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <StyleReset />
        <Container>
          <Navbar />
          <Switch>
            <Route path="/favorites">
              <FavoritePage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/detail/:id" render={() => <DetailPage />} />
            <Route path="*">
              <h1>Not Found</h1>
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
