import { BrowserRouter } from "react-router-dom";
import { Wrapper, Figure, Body, Container } from "./App-styles";
import SearchBar from "./components/searchbar/SearchBar";
import Pages from "./pages/Pages";

function App() {
  return (
    <Wrapper>
      <Figure>
        <img src="/images/hero.jpg" alt="" />
      </Figure>
      <Body>
        <BrowserRouter>
          <Wrapper>
            <Container>
              {/* <SearchBar /> */}
              <Pages />
            </Container>
          </Wrapper>
        </BrowserRouter>
      </Body>
    </Wrapper>
  );
}

export default App;
