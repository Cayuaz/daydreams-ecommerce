import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/header/Header";
import { Footer } from "./Components/Footer";
import { Suspense } from "react";

function App() {
  // const navigation = useNavigation();

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
