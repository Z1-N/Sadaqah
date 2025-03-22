// Desc: Main App component

import Hero from "./components/Hero";
import Quran from "./components/Quran";
import WhatsAppGRP from "./components/WhatsAppGRP";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 to-green-500">
      <Hero />
      <WhatsAppGRP />
      <Quran />
    </div>
  );
}

export default App;