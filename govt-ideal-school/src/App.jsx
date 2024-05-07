import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";
import Home from "./components/pages/Home";

export default function App() {
  return (
    <div className="md:px-6 lg:px-10 xl:px-16 px-4">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
