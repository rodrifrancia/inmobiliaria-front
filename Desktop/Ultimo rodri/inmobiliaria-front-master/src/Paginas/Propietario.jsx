import Footer from "../components/reutilizables/Footer";
import Header from "../components/reutilizables/Header";
import PropietarioVista from "../components/Propietario/PropiedadesPropietarioVista";

function App() {

  return (
    <div className="h-screen flex-row">
      <Header />
      <PropietarioVista/>
      <Footer /> 
    </div>
  );
}

export default App;
