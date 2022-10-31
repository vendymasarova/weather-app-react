import { BrowserRouter } from "react-router-dom";
import { Wrapper, Figure, Body, Container } from "./App-styles";
import SearchBar from "./components/searchbar/SearchBar";
import Pages from "./pages/Pages";
import { WeatherProvider } from "./WeatherContext";

function App() {
  return (
    <WeatherProvider>
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
    </WeatherProvider>
  );
}

export default App;
