const {test,expect} = require ('@playwright/test')

test ("All Possible assertion with Input box  ", async({page})=> {

   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") 

   await expect(page.locator("//input[@name='username']")).toBeVisible()
   
   await expect(page.locator("//input[@name='username']")).toBeEmpty()

   await expect(page.locator("//input[@name='username']")).toBeEditable()

   await expect (page.locator("//input[@name='username']")).toBeEnabled()


} )


test ("Operations with radio buttons       " , async ({page})=> {

    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")

    await page.locator("//input[@id='gender-male']").check()

    await expect (page.locator("//input[@id='gender-male']")).toBeChecked()






    


})