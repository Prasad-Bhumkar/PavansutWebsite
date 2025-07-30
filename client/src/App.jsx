import { BrowserRouter, Routes, Route } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Facilities from "./pages/Facilities";
import Faculty from "./pages/Faculty";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/contact" element={<Contact />} />
      {/* Fallback to 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <div className="min-h-screen flex flex-col">
              <Header />
              <div className="flex-1">
                <Router />
              </div>
              <Footer />
            </div>
            <Toaster />
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
