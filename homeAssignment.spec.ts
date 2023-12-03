/*
Assignment - 1 (Login to Salesforce)

1) Open Salesforce Login Page https://login.salesforce.com
2) Enter the username
3) Enter the password
4) Click Login
5) Print the title and url
*/


import {chromium, test} from "@playwright/test";

test("login to salesforce",async () => {

   const browserInstance = await chromium.launch({headless:false,channel:"chrome"});
   const browserContext = await browserInstance.newContext();
   const page = await browserContext.newPage();

  await  page.goto("https://login.salesforce.com");
  await page.waitForTimeout(10000);  
  await page.locator("#username").fill("arvindh@testleaf.com");
  await page.locator("#password").fill("Admin@2023");
  await page.waitForTimeout(10000);
  await page.locator("#Login").click();  
  const pageTitle = await page.title();
  console.log("Title:"+pageTitle);
  const pageUrl = page.url();
  console.log("Url:"+pageUrl);
});


/*Assignment - 2 (Create a new Lead)

1) Open http://leaftaps.com/opentaps/control/main
2) Perform the following functions

    a) Login (Enter username, password, Click Login)
    b) Click CRM/SFA Link (Locator for Link: text='Text of the Link') 
       await page.locator("text=CRM/SFA').click();
    c) Click the Leads Link (See the Tab)
    d) Click Create Lead Link (See Left Menu)
    e) Enter the company name, first name and last name (use id and pur your own data)
    f) Click Create Lead Button 
    */

    test.only("login to leaftaps",async () => {
    
       const browserInstance1 = await chromium.launch({headless:false,channel:"chrome"});
       const browserContext1 = await browserInstance1.newContext();
       const page1 = await browserContext1.newPage();
       await page1.goto("http://leaftaps.com/opentaps/control/main");
       await page1.locator("#username").fill("DemoCSR");
       await page1.locator("#password").fill("crmsfa");
       await page1.locator("input[value=Login]").click() 
       await page1.getByText("CRM/SFA").click();
       await page1.locator("//ul[@class='sectionTabBar']/li[2]//a").click();
       await page1.locator("//div[@class='frameSectionBody']//li[2]").click();
       await page1.locator("#createLeadForm_companyName").fill("testleaf");
       await page1.locator("#createLeadForm_firstName").fill("arvind");
       await page1.locator("#createLeadForm_lastName").fill("kumar");
       await page1.locator("input[value='Create Lead']").click();

       await page1.waitForTimeout(10000);

       });