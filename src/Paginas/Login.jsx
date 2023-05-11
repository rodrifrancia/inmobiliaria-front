import Footer from "../components/reutilizables/Footer";
import Header from "../components/reutilizables/Header";
import FormularioLogin from "../components/login/FormularioLogin";

function App() {

  return (
    <div className="h-screen flex-row">
      <Header />
      <FormularioLogin/>
      <Footer /> 
    </div>
  );
}

export default App;
