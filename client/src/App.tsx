import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import BabyPage from "@/pages/BabyPage";
import BruschettePage from "@/pages/BruschettePage";
import ContorniPage from "@/pages/ContorniPage";
import CoverPage from "@/pages/CoverPage";
import GrilliateP from "@/pages/GrilliateP age";
import PrimiPage from "@/pages/PrimiPage";
import SpecialPage from "@/pages/SpecialPage";
import TaglieriPage from "@/pages/TaglieriPage";
import TartarePage from "@/pages/TartarePage";
import { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";

function Router() {
  const [activeSection, setActiveSection] = useState('cover');

  const renderSection = () => {
    switch (activeSection) {
      case 'cover':
        return <CoverPage />;
      case 'taglieri':
        return <TaglieriPage />;
      case 'special':
        return <SpecialPage />;
      case 'tartare':
        return <TartarePage />;
      case 'bruschette':
        return <BruschettePage />;
      case 'primi':
        return <PrimiPage />;
      case 'grigliate':
        return <GrilliateP />;
      case 'contorni':
        return <ContorniPage />;
      case 'baby':
        return <BabyPage />;
      default:
        return <CoverPage />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="container py-12">
        <div className="animate-in fade-in duration-500">
          {renderSection()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-accent/20 mt-16">
        <div className="container py-8 text-center">
          <p className="text-muted-foreground text-sm" style={{ fontFamily: 'Lato, sans-serif' }}>
            © 2025 Lo Stivale dei Sapori. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
