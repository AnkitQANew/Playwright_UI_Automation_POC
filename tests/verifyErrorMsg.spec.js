 const {test,expect} = require  ('@playwright/test')

 test("Capture Error Msg", async function({page}){

   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

   await page.waitForTimeout (5000)

   await page.getByPlaceholder("Username").fill("Admin")

   await page.getByPlaceholder("Password").fill("12345678")

   //await page.waitForTimeout (5000)

   await page.locator("//button[@type='submit']").click()

   const errorMSG =await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent()

   console.log("Error msg is "+errorMSG)

   expect (errorMSG=="Invalid credentials").toBeTruthy();

 //p[@class='oxd-text oxd-text--p oxd-alert-content-text']

 })


