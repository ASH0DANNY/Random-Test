import React, { useState } from "react";
import jsPDF from "jspdf";
import {
  Button,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const App = () => {
  const [aName, setAName] = useState("");
  const [leaveType, setleaveType] = useState("");
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [aReason, setaReason] = useState("");

  const submitForm = async () => {
    // Get form data

    var formData = await {
      name: aName,
      leaveType: leaveType,
      startDate: startDate,
      endDate: endDate,
      reason: aReason,
    };

    // Convert form data to JSON
    var jsonData = JSON.stringify(formData);

    // Print the leave application using jsPDF
    printLeaveApplication(jsonData);
  };

  const printLeaveApplication = (data) => {
    var doc = new jsPDF();
    var leaveData = JSON.parse(data);

    // Format the leave application
    var content = `
                Leave Application Form
                -----------------------
                Name: ${leaveData.name}
                Leave Type: ${leaveData.leaveType}
                Start Date: ${leaveData.startDate}
                End Date: ${leaveData.endDate}
                Reason:
                ${leaveData.reason}
            `;

    // Set font and size for PDF
    doc.setFont("helvetica");
    doc.setFontSize(12);

    // Split content into lines
    var contentLines = doc.splitTextToSize(content, 180);

    // Add content to PDF
    doc.text(contentLines, 10, 10);

    // Save PDF
    doc.save("leave_application.pdf");
  };

  return (
    <>
      {/* <h1>Leave Application Form</h1> */}
      <Container>
        <Grid container>
          <Grid item md={4} xs={12}>
            <TextField
              label="Enter Name"
              variant="standard"
              type="text"
              value={aName}
              onChange={(event) => {
                setAName(event.target.value);
              }}
            />
          </Grid>

          <Grid item md={4} xs={12}>
            <InputLabel id="demo-select-small-label">TransType</InputLabel>
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
          </Grid>

          <Grid item md={4} xs={12}>
            <TextField
              label="Enter Start Date"
              variant="standard"
              type="date"
              value={startDate}
              onChange={(event) => {
                setstartDate(event.target.value);
              }}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              label="Enter End Date"
              variant="standard"
              type="date"
              value={endDate}
              onChange={(event) => {
                setendDate(event.target.value);
              }}
            />
          </Grid>
          <Grid item md={4} xs={12}>
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
          <Grid item md={4} xs={12}>
            <Button variant="contained" onClick={submitForm}></Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
