import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "100px", // أو 100vh لو بدك يغطي الشاشة كاملة
      }}
    >
      <CircularProgress size={20} />
    </Box>
  );
}
