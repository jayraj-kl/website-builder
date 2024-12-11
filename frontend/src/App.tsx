import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarDemo } from "./components/side-bar";
import { Home } from "./pages/Home";
import { Builder } from './pages/Builder';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <SidebarDemo> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builder" element={<Builder />} />
      </Routes>
    </BrowserRouter>
      {/* </SidebarDemo> */}
    </ThemeProvider>
  );
}

export default App;