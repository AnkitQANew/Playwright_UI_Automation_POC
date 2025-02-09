const {test,expect} = require ('@playwright/test')

//////////////////// locating single - single web element 

test ("Locators Demo", async ({page}) => {

   await page.goto("https://demoblaze.com/index.html")

   ////// Identifying the element by Property 
   await page.locator('id=login2').click()

   ////// Identifying the element by CSS
   await page.locator ('#loginusername').fill("ankit91")

   ////// Identifying the element by CSS
   await page.fill("input[id='loginpassword']", 'abc123')
   
   ////// Identifying the element by Xpath
   await page.click("//button[normalize-space()='Log in']")

   ////// verifying the logout link on the Homepage 

   const logOutLink  = await page.locator("//a[@id='logout2']")

    await expect(logOutLink).toBeVisible



})