import React, { useState, useEffect } from "react";
import Alert from '@mui/material/Alert';
import {
  Typography,
  Grid,
  TextField,
  Button,


} from "@material-ui/core";
import { Form, Col, InputGroup, Row } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Validator from "validatorjs";

const useStyles = makeStyles((theme) => ({
  textInput: {
    fontSize: [14, "!important"],
    padding: 10,
    color: "#4F5665",
  },
  textInput1: {
    marginLeft: 30,
  },
  headerText: {
    fontSize: [24, "!important"],
    paddingBottom: 60,
    color: "#0055D2",
    fontWeight: "bold",
  },

  roundText: {
    borderRadius: 25,
    backgroundColor: "#e6e4e3",
    padding: 10,
    width: 120,
    height: 35,

    fontSize: "10px !important",
    color: "#0055D2 !important",
    textAlign: "center",
    cursor: "pointer",
    top: "-10px",
    left: -5,
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const [ischecked, setIsChecked] = useState(false);
  const [message, IsMessage] = useState("");
  const [error, setError] = useState({});
  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: "",
    password_confirmation: "",
  });

  const { email, password, password_confirmation } = loginDetail;

  const onChange = (e) => {
    setLoginDetail({
      ...loginDetail,
      [e.target.name]: e.target.value,
    });
  };
  let rules = {
    email: "required|email",
    password: "required|confirmed",
    password_confirmation: "required",

    // uploadDoc: "required",
  };

  const onSubmit = () => {
  
    let validation = new Validator(loginDetail, rules, {
      "required.email": "The Email Field is required.",
      "required.password": "The Password field is required.",
     
    });
    if (validation.fails()) {
      setError(validation.errors.all());
    }
    if(validation.passes()){
      setError(null)
      IsMessage('Form Submitted Successfully')
      setLoginDetail({
        email:"",
        password: "",
        password_confirmation: "",
      })
     
    }
  };

  console.log(error, 'error')

  return (
    <>
      <form noValidate method="POST">
      <Typography variant="h4" align="Center" className="mt-3">
              Login Form
            </Typography>
        <Grid container >
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" align="left" className={classes.textInput}>
              Email
            </Typography>
            <TextField
            
              variant="outlined"
              placeholder="Enter Your Email"
              name="email"
              onChange={(e) => onChange(e)}
              fullWidth
              error={error?.email ? true : false}
              helperText={error?.email ? error?.email : null}
              InputProps={{
                classes: { input: classes.textInput },
              }}
              // label="TextField"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}  className="mt-12 ">
            <Typography variant="h5" align="left" className={classes.textInput}>
              Password
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter Your Password"
              error={error?.password ? true : false}
              helperText={error?.password ? error?.password : null}
              InputProps={{
                classes: { input: classes.textInput },
              }}
              name="password"
              type="password"
              value={password}
              onChange={(e) => onChange(e)}
            />
          </Grid>

          <Grid item xs={12} md={12} lg={12} className="mt-12 mb-12">
            <Typography variant="h5" align="left" className={classes.textInput}>
              Confirm Password
            </Typography>
            <TextField
           type="password"
              fullWidth
              variant="outlined"
              placeholder="Re-Enter  Password"
              error={error?.password_confirmation ? true : false}
              helperText={error?.password_confirmation ? error?.password_confirmation : null}
              InputProps={{
                classes: { input: classes.textInput },
              }}
              name="password_confirmation"
              value={password_confirmation}
              onChange={(e) => onChange(e)}
            />
          </Grid>
          <Grid
                item
                xs={12}
                align="center"
                justify="center"
                alignItems="center"
                
              >
               {error ==null? <Alert severity="success">{message}!</Alert> : null }
              
              </Grid>
          <Grid
                item
                xs={12}
                align="center"
                justify="center"
                alignItems="center"
              >
                <Button
                  color="primary"
                  variant="contained"
                  className="mt-4 mb-4"
                  onClick={() =>  onSubmit()}
                >
               Submit
                </Button>
              </Grid>
        </Grid>
      </form>
    </>
  );
};

export default LoginForm;
