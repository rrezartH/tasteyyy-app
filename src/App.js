import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {GiKnifeFork} from "react-icons/gi"
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav>
          <GiKnifeFork />
          <Logo to={'/'}> 
            Tasteyyy
          </Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`

const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-out;
  svg{
    font-size: 2rem;
  }
  :hover{
    transform: rotate(-15deg);
  }
`

export default App;
