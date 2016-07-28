function formSubmitReply(e) {
var sheet = SpreadsheetApp.getActiveSheet();
var row =  SpreadsheetApp.getActiveSheet().getLastRow();

var sendToEmail = "toddstoffer+yni2egtzxne3dez4hcsp@boards.trello.com, tdstoffe@ncsu.edu";
var issueNumber = row;

//Overview information to be included in every ticket
var seed = e.values[2];
var wayback = "https://wayback.archive-it.org/5838/*/"+ e.values[2];
var crawlReportLink = "https://five.partner.archive-it.org/972/crawls/5838/crawl/"+e.values[10];


//Display error information, to be included in tickets where display error == yes
var displayError = e.values[3];
var displayErrorSource = e.values[4];
var displayErrorType = e.values[5];
var displayErrorDetails = e.values[6];
var displayErrorImage = e.values[7];

//Quantitative Analysis
var queued = e.values[8];
var queuedHost = e.values[9];
var crawlReport = e.values[10];
var notes = e.values[11];


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

if (displayError == "No" && queued <= 999 ) {
readyToInclude = "Yes";
}
else {readyToInclude = "No";
}

//Add Message for Quantitative
var quanMetrics;
if (queued >= 1000) {
  quanMetrics = "High Queue Alert!" + "\n\n" + "Host for Queued URLS: " + queuedHost + "\n\n" + "Crawl Report Link: " + crawlReportLink;
}
else {
  quanMetrics = "Passed Quantitiative QA";
}
//Email Message Construction
var subject = "Ticket Number: "+ issueNumber + " " + readyToInclude;

var emailBody =  crawlDetails + "\n\n" + displayIssues + "\n\n" + "Ready to Include: " + readyToInclude + "\n\n" + quanMetrics + "\n\n" + "Notes: " + notes;

//Send Email

MailApp.sendEmail(sendToEmail, subject, emailBody)

}​
