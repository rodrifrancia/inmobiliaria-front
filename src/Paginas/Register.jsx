import Footer from "../components/reutilizables/Footer";
import Header from "../components/reutilizables/Header";
import FormularioRegistro from "../components/Register/FormularioRegistro";

function App() {

  return (
    <div className="h-screen flex-row">
      <Header />
      <FormularioRegistro/>
      <Footer /> 
    </div>
  );
}

export default App;