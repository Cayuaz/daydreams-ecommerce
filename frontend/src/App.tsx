import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/header/Header";
import { Footer } from "./Components/Footer";
import { Suspense, useEffect } from "react";

function App() {
  // const navigation = useNavigation();

  useEffect(() => {
    // O %c avisa que o texto a seguir terá estilo CSS
    const msg = "%c DAYDREAMS \n %c Dreamt and Built by Cayuã";

    const titleStyle = "color: #000; font-size: 20px; font-weight: bold; ";
    const subtitleStyle =
      "color: #555; font-size: 14px; font-family: monospace;";

    console.log(msg, titleStyle, subtitleStyle);
  }, []);

  return (
    <div className="min-h-screen grid grid-cols-1 grid-rows-[auto_1fr_auto] text-center items-center">
      <Header />
      <Suspense>
        <main className="h-full border-2 border-black">
          {/* {navigation.state === "loading" && <p>Carregando...</p>} */}
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
