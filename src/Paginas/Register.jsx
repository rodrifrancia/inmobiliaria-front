import Footer from "../components/reutilizables/Footer";
import Header from "../components/reutilizables/Header";
import FormularioRegister from "../components/register/FormularioRegister";

function App() {

  return (
    <div className="h-screen flex-row">
      <Header />
      <FormularioRegister/>
      <Footer /> 
    </div>
  );
}

export default App;
