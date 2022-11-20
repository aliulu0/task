import "./App.css";
import Container from "./components/Container/Container.jsx";
import ListProvider from "./context/listContext";
function App() {
  return (
    <ListProvider>
      <div className="App">
        <Container />
      </div>
    </ListProvider>
  );
}

export default App;
