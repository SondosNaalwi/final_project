import { createTheme } from "@mui/material";
export const theme = createTheme({
    Components: {
      // Name of the component
      MuiAppBar: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            padding:'3rem'
          },
        },
      },
    },
  });
  