import React from "react";
import jsPDF from "jspdf";

const App = () => {
  const submitForm = () => {
    // Get form data
    var formData = {
      name: document.getElementById("name").value,
      leaveType: document.getElementById("leaveType").value,
      startDate: document.getElementById("startDate").value,
      endDate: document.getElementById("endDate").value,
      reason: document.getElementById("reason").value,
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
      <h1>Leave Application Form</h1>
      <Container></Container>
      {/* <form id="leaveForm">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br><br>
        
        <label for="leaveType">Leave Type:</label><br>
        <select id="leaveType" name="leaveType" required>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Vacation Leave">Vacation Leave</option>
            <option value="Personal Leave">Personal Leave</option>
        </select><br><br>
        
        <label for="startDate">Start Date:</label><br>
        <input type="date" id="startDate" name="startDate" required><br><br>
        
        <label for="endDate">End Date:</label><br>
        <input type="date" id="endDate" name="endDate" required><br><br>
        
        <label for="reason">Reason:</label><br>
        <textarea id="reason" name="reason" rows="4" required></textarea><br><br>
        
        <button type="button" onclick="submitForm()">Submit</button>
    </form> */}
    </>
  );
};

export default App;
