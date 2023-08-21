import Header from "./components/Header";
import Footer from "./components/Footer";
import Leftcontainer from "./layouts/Leftcontainer";
import Visualization from "./layouts/Vizualization/Visualization";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-wrap justify-center items-center flex-grow bg-gray-100 px-10 mb:flex-wrap">
        <Leftcontainer />
        <Visualization />
      </main>
      <Footer />
    </div>
  );
}

export default App;
