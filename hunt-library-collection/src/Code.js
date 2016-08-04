function formSubmitReply(e) {
var sheet = SpreadsheetApp.getActiveSheet();
var row =  SpreadsheetApp.getActiveSheet().getLastRow();
var issueNumber = row;

//Overview information to be included in every ticket
var seed = e.values[2];
var wayback = "https://wayback.archive-it.org/7087/*/"+ e.values[2];


//Display error information, to be included in tickets where display error == yes
var displayError = e.values[3];
var displayErrorSource = e.values[4];
var displayErrorType = e.values[5];
var displayErrorDetails = e.values[6];
var displayErrorImage = e.values[7];

//Ready to Be Included in Hunt Library Collection?
var QAstatus = e.values[8];
var otherErrorDetails = e.values[9];

//Messages to Include in Every Ticket Body
var crawlDetails = "Seed: " + seed +"\n" + "Wayback Link: " + wayback;

//Specific Error Details

//Add Message for Display Issues
var displayIssues;
if (displayError == "Yes") {
displayIssues = "Display Issues: " + displayError + "\n" + "Display Error Source (Wayback, Proxy, Live): " + displayErrorSource + "\n" + "Display Error Type: " + displayErrorType + "\n" + "Display Error Details: " + displayErrorDetails + "\n" + "Screenshot: " + displayErrorImage;
}
else { displayIssues = "Display Issues: No Display Issues";
}

//Add Message for Ready for Inclusion
var readyToInclude;

if (QAstatus == "No") {
readyToInclude = "Is this site ready to be included in Hunt Library Impact Collection? " + QAstatus + "\n" + "Reason: " + otherErrorDetails;
}
else {readyToInclude = "This seed passed QA and can be included in the Hunt Library Impact Collection";
}


//Email Message Construction
var subject = "Ticket Number: " + issueNumber + " " + QAstatus;

var emailBody =  crawlDetails + "\n\n" + displayIssues + "\n\n" + readyToInclude;

//Send Email Only If Errors Present

MailApp.sendEmail(sendToEmail, subject, emailBody)

}​
