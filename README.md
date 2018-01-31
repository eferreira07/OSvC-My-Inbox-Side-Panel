# OSvC My Inbox as a Left Side Panel

OSvC (Oracle Service Cloud) Browser Interface provides a powerful "extensibility framework".

With that, you can extend and provide a better experience to increase user adoption. If you are interested in UX (User Experience), please go further and access this [link](http://www.oracle.com/webfolder/ux/applications/uxd/index.html).

My mission with this post is to help customers and partners with insights on how to use Oracle Service Browser Interface better. 

If you are not a developer or expert, don’t worry. I've shared the code used in this example, so you can use it as a reference as a quick start for you. 

Have you ever thought about creating a left side panel to quickly access agent's inbox?

Take a look at this example.

<p align="center"><img src ="https://github.com/eferreira07/OSvC-My-Inbox-Side-Panel/blob/master/img/demo.gif"/></p>

# How to deploy

- [Download](https://github.com/eferreira07/OSvC-My-Inbox-Side-Panel/archive/master.zip) the master zip.
- Then extract "OSvC-My-Inbox-Side-Panel-master.zip" into your folder.
- Open your Oracle Service Cloud console and import the report "My_Inbox_BUI_Adoption 100752.xml". You can find the exported report where you extracted the above zip file. **If it doesn't work, you can create a new report based in standard "My Inbox" report. Here is the report definition(https://github.com/eferreira07/OSvC-My-Inbox-Side-Panel/blob/master/My_Inbox_BUI.pdf)**
- Follow the steps below in order to import the exported report:
- <p align="center"><img src ="https://github.com/eferreira07/OSvC-My-Inbox-Side-Panel/blob/master/img/import%20report.gif"/></p>
- Save the report created and grab the report id. We will use the report id to update the add-in source code.
- Go to the folder where you extracted the zip file > ../OSvC-My-Inbox-Side-Panel-master/MyInboxLeftSidePanel and find "SidePainelExample.html", then right-click and edit this file.
- Line 41 you will see the following payload variable "var param = '{"id": 100752}';" change the current code from "100752" to the report id you have created in the previous steps.
- Now we will go to create the add-in file. Create a zip file based on "../OSvC-My-Inbox-Side-Panel-master/MyInboxLeftSidePanel" folder. You should expect MyInboxLeftSidePanel.zip as a result.
- Go to your Oracle Service Cloud console and upload the zip file as the follow steps:
- <p align="center"><img src ="https://github.com/eferreira07/OSvC-My-Inbox-Side-Panel/blob/master/img/upload%20add-in%20side%20panel.gif"/></p>
- The information used above are:
  a. Click on New (Ribbon Button) then selects "Agent Browser UI Extension";
  b. Name: My First Side Panel
  c. Extension Type: Console
  d. Select "MyInboxLeftSidePanel/SidePainelExample.html" as "Init File";
  e. Go to "Profile Access" (Ribbon Button) and make it available in your profile.
  f. Save.
- You are ready to test your Browser Interface Add-In.
