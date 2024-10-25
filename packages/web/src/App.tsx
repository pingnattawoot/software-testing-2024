import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "./theme";
import { WelcomePage } from "./pages/WelcomePage/WelcomePage";
import { MenuPage } from "./pages/MenuPage/MenuPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/menu" element={<MenuPage />} />s
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
