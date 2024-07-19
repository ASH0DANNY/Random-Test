import { jsPDF } from "jspdf";
export const PrintLeaveApplication = async (formDatadata) => {
  const doc = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: "a4",
  });
  //   var leaveData = JSON.parse(data);
  const data = await formDatadata;
  console.log("data=="+data);

  // Format the leave application
  var content = await `
                Leave Application Form
                -----------------------

                Subject: Application for ${data.leaveType} leave
                Dear ${data.recpName},
                
                I hope this message finds you well. I am writing to formally request a 
                leave of absence from work from ${data.startDate} to ${data.endDate}, inclusive. 
                The reason for this leave is ${data.reason}.

                I kindly request your approval for this leave. Please let me know if there are any specific forms or procedures I need to complete before my leave begins. I am happy to provide any additional information or documentation you may require.


                Thank you for considering my request. I look forward to your favorable response.

                
                Sincerely,

                Name: ${data.name}
            `;

  // Set font and size for PDF
  doc.setFont("helvetica");
  doc.setFontSize(12);

  // Split content into lines
  var contentLines = doc.splitTextToSize(content, 180);

  // Add content to PDF
  await doc.text(contentLines, 10, 10);

  // Save PDF
  console.log("Saving PDF...");
  await doc.save("leave_application.pdf");
};
