const {test,expect} = require ('@playwright/test')


    test.skip ("Simple Alert --  ", async ({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/")

     /////////////////  Enabling Dialog Window Handler //////////////////////

     page.on('dialog', async dialog=>{
      expect (dialog.type()).toContain('alert')
      expect (dialog.message()).toContain('I am an alert box!')
      await dialog.accept()
     })

     await page.locator("//button[@id='alertBtn']").click()
     await page.waitForTimeout(5000)



})


test ("confirmation Alert --  ", async ({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/")

     /////////////////  Enabling Dialog Window Handler //////////////////////

     page.on('dialog', async dialog=>{
      expect (dialog.type()).toContain('confirm')
      expect (dialog.message()).toContain('Press a button!')
      await dialog.accept()
     })

     await page.locator("//button[@id='confirmBtn']").click()

     await expect (page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!')
     await expect (page.locator('//p[@id="demo"]')).toBeVisible()
     await page.waitForTimeout(5000)



})