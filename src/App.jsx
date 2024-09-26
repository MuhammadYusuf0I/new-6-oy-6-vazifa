import Navbar from "./Components/Navbar";
import FormCard from "./components/FormCard";
import Footer from "./Components/Footer";
export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <main className="grow">
        <FormCard></FormCard>
      </main>
      <Footer></Footer>
    </>
  );
}
