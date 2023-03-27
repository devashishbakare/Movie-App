import Navbar from "./Navbar";
import { data } from "../data";
import MovieCard from "./MovieCard";
import "../index.css";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Fevourites</div>
          </div>
          <div className="list">
            {data.map((movie, index) => (
              <MovieCard movie={movie} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
