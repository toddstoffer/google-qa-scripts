# Web Archiving QA and Google Apps Script

This repository is used to host the .gs files used in the Web Archiving QA process. These files are managed locally using [node-google-apps-script](https://www.npmjs.com/package/node-google-apps-script)


### Project Overview
These scripts are part of the QA workflow. In order to be able to manage the writing and versioning of the script outside of Google Drive they are managed using [node-google-apps-script](https://www.npmjs.com/package/node-google-apps-script). The individual files are referenced inside of separate Google Sheets that are used to hold the information submitted via Google Forms.

Within the Google Sheet that is collecting form responses for each collection for each collection the script editor imports these external files as a library, and the script from within the Google Sheet scripts editor that is collecting responses then references these external scripts. While this workflow is less straight forward than managing these scripts from directly within Google Sheets it allows for version control and greater flexibility in implementation.

### To Install A Locally Managed Script Into a Google Sheet
  1) Create a new project by visiting [script.google.com](https://script.google.com)

  2) Click on File>Project Properties and copy the Project Key into your clipboard

  3) In your terminal cd to the directory you would like the project to live in locally and then run **gapps init <project key>**

  4) Write your code locally and test

  5) Push your code to the Google Drive .gscript file using the command **gapps upload**

  6) Open the .gscript file and click on File>manage all versions

  7) Create a version and name it

  8) Open the spreadsheet containing the responses from your Google Forms

  9) Click on Tools>Script Editor

  10) Click on Resources>Libraries

  11) Paste the project key (found under File>Project Properties) in the .gscript file into the search field

  12) Select from the dropdown the version you created in step 7

  13) Within your Function in the editor use the identifier to call the script. For example if the identifier is **NCStateCollection**, you call the script in the following way:

        function formSubmitReply(e) {
        NCStateCollection.formSubmitReply(e)
        }


### Workflow for Updating Scripts
  1) Edits to the scripts are done locally and pushed back to Google Drive using the **gapps upload** command to upload the changes

  2) After upload completes open the script from within Google Drive

  3) Click on File>Manage All versions

  4) Create a new version and give it a name

  5) Open the Google Sheet that uses the script and click on Tools>Script Editor

  6) Click on Resources>Libraries

  7) From the dropdown menu select the latest version number and click ok
