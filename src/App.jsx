import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
// import AllTheBooks from "./components/AllTheBooks"
import fantasy from "./data/fantasy.json"
import history from "./data/history.json"
import horror from "./data/horror.json"
import romance from "./data/romance.json"
import scifi from "./data/scifi.json"
import { Container } from "react-bootstrap"
import SingleBook from "./components/SingleBook"
import BookList from "./components/BookList"

function App() {
  const categoryColors = {
    fantasy: "rgb(255, 165, 0)",
    history: "rgb(51, 206, 51)",
    horror: "rgb(139, 0, 0)",
    romance: "rgb(255, 105, 180)",
    scifi: "rgb(0, 191, 255)",
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <MyNav />
      </header>
      <main className="flex-grow-1 bg-secondary">
        <Welcome />
        {/* ESERCIZIO W9-D1 */}
        {/* <Container className="d-flex flex-column">
          <h2 className="d-flex justify-content-center mb-3 mt-3 text-warning">
            FANTASY
          </h2>
          <BookList category={fantasy} />
          <h2 className="d-flex justify-content-center mb-3 mt-3">HISTORY</h2>
          <AllTheBooks category={history} />
          <h2 className="d-flex justify-content-center mb-3 mt-3">HORROR</h2>
          <AllTheBooks category={horror} />
          <h2 className="d-flex justify-content-center mb-3 mt-3">ROMANCE</h2>
          <AllTheBooks category={romance} />
          <h2 className="d-flex justify-content-center mb-3 mt-3">SCIFI</h2>
          <AllTheBooks category={scifi} />
        </Container> */}

        {/* ESERCIZIO W9-D2 */}
        <Container className="d-flex flex-column">
          <h2
            className="d-flex justify-content-center mb-3 mt-3"
            style={{ color: categoryColors.fantasy }}
          >
            FANTASY
          </h2>
          <BookList category={fantasy} categoryColor={categoryColors.fantasy} />
          <h2
            className="d-flex justify-content-center mb-3 mt-3"
            style={{ color: categoryColors.history }}
          >
            HISTORY
          </h2>
          <BookList category={history} categoryColor={categoryColors.history} />
          <h2
            className="d-flex justify-content-center mb-3 mt-3"
            style={{ color: categoryColors.horror }}
          >
            HORROR
          </h2>
          <BookList category={horror} categoryColor={categoryColors.horror} />
          <h2
            className="d-flex justify-content-center mb-3 mt-3"
            style={{ color: categoryColors.romance }}
          >
            ROMANCE
          </h2>
          <BookList category={romance} categoryColor={categoryColors.romance} />
          <h2
            className="d-flex justify-content-center mb-3 mt-3"
            style={{ color: categoryColors.scifi }}
          >
            SCIFI
          </h2>
          <BookList category={scifi} categoryColor={categoryColors.scifi} />
        </Container>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )
}

export default App
