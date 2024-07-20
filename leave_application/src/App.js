import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import MetaData from "./utils/metadata";
import { ErrorAlert } from "./utils/alerts";
import { PrintLeaveApplication } from "./component/printApplication";

const App = () => {
  const [alert, setalert] = useState(false);
  const [aName, setAName] = useState("");
  const [recName, setrecName] = useState("");
  const [leaveType, setleaveType] = useState("");
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [aReason, setaReason] = useState("");

  const singleStyle = {
    marginTop: 5,
    marginLeft: 2,
  };

  const submitForm = async () => {
    if (
      recName === "" ||
      aName === "" ||
      leaveType === "" ||
      startDate === "" ||
      endDate === "" ||
      aReason === ""
    ) {
      setalert(true);
      setTimeout(() => {
        setalert(false);
      }, 2000);
    } else {
      var formData = await {
        recpName: recName,
        name: aName,
        leaveType: leaveType,
        startDate: startDate,
        endDate: endDate,
        reason: aReason,
      };

      await PrintLeaveApplication(formData);
    }
  };

  const resetFields = async () => {
    setAName("");
    setrecName("");
    setleaveType("");
    setstartDate("");
    setendDate("");
    setaReason("");
  };

  return (
    <>
      <MetaData title="Leave Application Form" />
      <Container>
        <Typography component="p" sx={{ fontSize: 20 }}>
          Leave Application Form
        </Typography>
        <FormControl
          sx={{
            m: 1,
            minWidth: 120,
            backgroundColor: "rgb(135, 206, 235, 0.3)",
            padding:1,
            borderRadius:3
          }}
          size="small"
        >
          <Grid container spacing={2}>
            <Grid item md={4} xs={12} sx={singleStyle}>
              <Typography component="p">
                <TextField
                  label="Enter Reciepent Name"
                  variant="standard"
                  type="text"
                  value={recName}
                  onChange={(event) => {
                    setrecName(event.target.value);
                  }}
                />
              </Typography>
            </Grid>

            <Grid item md={4} xs={12} sx={singleStyle}>
              <Typography component="p">
                <TextField
                  label="Enter Your Name"
                  variant="standard"
                  type="text"
                  value={aName}
                  onChange={(event) => {
                    setAName(event.target.value);
                  }}
                />
              </Typography>
            </Grid>

            <Grid item md={4} xs={12} sx={singleStyle}>
              <Typography component="p">
                <Typography>Leave Type</Typography>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="TransType"
                  value={leaveType}
                  sx={{ width: "100%", height: "80%" }}
                  onChange={(event) => {
                    setleaveType(event.target.value);
                  }}
                >
                  <MenuItem value="">
                    <em>-None-</em>
                  </MenuItem>
                  <MenuItem value={"Sick Leave"}>Sick Leave</MenuItem>
                  <MenuItem value={"Vacation Leave"}>Vacation Leave</MenuItem>
                  <MenuItem value={"Personal Leave"}>Personal Leave</MenuItem>
                </Select>
              </Typography>
            </Grid>

            <Grid item md={4} xs={12} sx={singleStyle}>
              <Typography component="p">
                <Typography>Start Date</Typography>
                <TextField
                  labelId="start_date_label"
                  variant="standard"
                  type="date"
                  value={startDate}
                  onChange={(event) => {
                    setstartDate(event.target.value);
                  }}
                />
              </Typography>
            </Grid>
            <Grid item md={4} xs={12} sx={singleStyle}>
              <Typography component="p">
                <Typography>End Date</Typography>
                <TextField
                  labelId="end_date_label"
                  variant="standard"
                  type="date"
                  value={endDate}
                  onChange={(event) => {
                    setendDate(event.target.value);
                  }}
                />
              </Typography>
            </Grid>
            <Grid item md={4} xs={12} sx={singleStyle}>
              <TextField
                label="Enter Reason"
                variant="standard"
                type="text"
                value={aReason}
                onChange={(event) => {
                  setaReason(event.target.value);
                }}
              />
            </Grid>

            <Typography>
              {alert ? <ErrorAlert message={"Enter all fields.."} /> : null}
            </Typography>

            <Grid item md={4} xs={12} sx={singleStyle}>
              <Button
                variant="contained"
                onClick={resetFields}
                sx={{ marginLeft: 3 }}
              >
                RESET FIELDS
              </Button>
              <Button
                variant="contained"
                onClick={submitForm}
                sx={{ marginLeft: 3 }}
              >
                SUBMIT & SAVE
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </Container>
    </>
  );
};

export default App;
