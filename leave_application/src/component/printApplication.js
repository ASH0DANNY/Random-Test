import { jsPDF } from "jspdf";
export const PrintLeaveApplication = async (data) => {
  const doc = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: "a4",
  });

//   var leaveData = JSON.parse(data);
  var leaveData = await data;


  // Format the leave application
  var content = `
                Leave Application Form
                -----------------------

                Subject: Application for ${leaveData.leaveType} leave
                Dear [Recipient's Name],
                
                I hope this message finds you well. I am writing to formally request a 
                leave of absence from work from ${leaveData.startDate} to ${leaveData.endDate}, inclusive. 
                The reason for this leave is ${leaveData.reason}.
                

                Name: ${leaveData.name}
            `;

  // Set font and size for PDF
  doc.setFont("helvetica");
  doc.setFontSize(12);

  // Split content into lines
  var contentLines = doc.splitTextToSize(content, 180);

  // Add content to PDF
  doc.text(contentLines, 10, 10);

  // Save PDF
  console.log("Saving PDF...");
  doc.save("leave_application.pdf");
};
