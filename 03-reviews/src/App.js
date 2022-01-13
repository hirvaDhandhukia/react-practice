import './App.css';
import Review from "./Review";

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        
        {/* created the working of whole review section in an another functional component and called it here to show on the page */}
        <Review />
      </section>
    </main>
  );
}

export default App;
