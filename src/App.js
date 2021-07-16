import { HomePage } from "./pages";
import { StyleReset, Container } from 'atomize';
import { Navbar } from "./components";


function App() {
  return (
    <>
        <StyleReset />
        <Container>
            <Navbar />
            <HomePage />
        </Container>
    </>
  );
}

export default App;
