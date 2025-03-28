import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/scenes/navbar/Navbar";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            {/* The Box component is a HTML section wrapper from MUI - that allows you to apply styles to a group of elements. */}
            <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
              <Routes>
                {/* Each route is a different page having different React components */}
                <Route path="/" element={<div>dashboard page</div>} />
                <Route
                  path="/predictions"
                  element={<div>predictions page</div>}
                />
              </Routes>
            </Box>
          </ThemeProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
