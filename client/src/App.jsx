import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">

      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,#ff3d0030,transparent_70%)]" />
      <Home />
      <div/>
    </div>
  );
}

export default App;