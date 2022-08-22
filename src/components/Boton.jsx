import React from "react";
import Button from "@mui/material/Button";

function Boton({ pass }) {
  if (pass !== "252525") {
    return null;
  }
  return (
    <div>
      <Button variant="contained" className="buttonDisable">
        Correct Password
      </Button>
    </div>
  );
}

export default Boton;
