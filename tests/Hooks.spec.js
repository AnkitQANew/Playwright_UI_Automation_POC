const {test,expect} = require ('@playwright/test')

test ("Hooks Implementation  1   ", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog', async dialog=>{
        expect (dialog.type()).toContain('confirm')
        expect (dialog.message()).toContain('Press a button!')
        await dialog.accept()
       })

    console.log("Test 1 Executed ")

})


test ("Hooks Implementation  2   ", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    console.log("Test 2 Executed ")

})