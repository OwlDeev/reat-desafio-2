import { FormControl, FormHelperText, TextField, Box } from "@mui/material";

function Input({ user, setUser, pass, setPass }) {

  return (
    <div className="formDiv">
      <FormControl>
        <Box m={2}>
          {/*name field */}
          <TextField
            id="outlined-user-input"
            label="Name"
            type="text"
            autoComplete="current-user"
            onChange={(e) => {
              setUser(e.target.value);
            }}
            value={user}
          />
          <FormHelperText id="my-helper-text" className="inputMargin textWhite">
            Enter your name
          </FormHelperText>
        </Box>

        <Box m={2}>
          {/*password field */}
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
            value={pass}
          />
          <FormHelperText id="my-helper-text" className="textWhite">
            Enter your password
          </FormHelperText>
        </Box>
      </FormControl>
    </div>
  );
}

export default Input;
