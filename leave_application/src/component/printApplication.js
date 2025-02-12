import { jsPDF } from "jspdf";
export const PrintLeaveApplication = async (formDatadata) => {
  const doc = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: "a4",
  });
  //   var leaveData = JSON.parse(data);
  const data = await formDatadata;

  var content = `
                Leave Application Form
                -----------------------

                Subject: Application for ${data.leaveType}
                Dear ${data.recpName},
                
                I hope this message finds you well. I am writing to formally request a 
                leave of absence from work from ${data.startDate} to ${data.endDate}, inclusive. 
                The reason for this leave is ${data.reason}.

                I kindly request your approval for this leave. Please let me know if there are any specific forms or procedures I need to complete before my leave begins. I am happy to provide any additional information or documentation you may require.


                Thank you for considering my request. I look forward to your favorable response.

                
                Sincerely,

                Name: ${data.name}
            `;

  doc.setFont("helvetica");
  doc.setFontSize(12);

  // Split content into lines
  var contentLines = doc.splitTextToSize(content, 180);

  doc.text(contentLines, 10, 10);

  console.log("Saving PDF...");
  doc.save("leave_application.pdf");
};
