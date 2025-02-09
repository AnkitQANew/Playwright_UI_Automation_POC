const {test,expect} = require ('@playwright/test')
const { verify } = require('crypto')

test ("verify page tytle", async ({page})=> {

    await page.goto("https://www.google.com")

    const URL = page.url()

    console.log ("The url is "+URL)

     const Title = page.title ()

     console.log ("The title is  "+Title)

     await expect (page).toHaveTitle("Google")

})