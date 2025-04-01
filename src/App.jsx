import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import AllTheBooks from "./components/AllTheBooks"
import fantasy from "./data/fantasy.json"
import history from "./data/history.json"
import horror from "./data/horror.json"
import romance from "./data/romance.json"
import scifi from "./data/scifi.json"
import { Container } from "react-bootstrap"

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <MyNav />
      </header>
      <main className="flex-grow-1 bg-secondary">
        <Welcome />
        <Container className="d-flex flex-column">
          <h2 className="d-flex justify-content-center mb-3 mt-3 text-warning">
            FANTASY
          </h2>
          <AllTheBooks category={fantasy} />
          <h2 className="d-flex justify-content-center mb-3 mt-3">HISTORY</h2>
          <AllTheBooks category={history} />
          <h2 className="d-flex justify-content-center mb-3 mt-3">HORROR</h2>
          <AllTheBooks category={horror} />
          <h2 className="d-flex justify-content-center mb-3 mt-3">ROMANCE</h2>
          <AllTheBooks category={romance} />
          <h2 className="d-flex justify-content-center mb-3 mt-3">SCIFI</h2>
          <AllTheBooks category={scifi} />
        </Container>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )
}

export default App
