import { useState } from "react";

import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Sidebar from "./components/Sidebar.jsx";
import Feed from "./components/Feed.jsx";
import Rightbar from "./components/Rightbar.jsx";
import Navbar from "./components/Navbar.jsx";
import Add from "./components/Add.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Footer />
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default App;
