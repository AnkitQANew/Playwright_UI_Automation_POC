const {test,expect} = require ('@playwright/test')


test ("File upload demo  ", async ({page})=> {

await page.goto("https://the-internet.herokuapp.com/upload")

await page.locator('#file-upload').setInputFiles("C:/Users/Ankit Shrivastava/Desktop/Access/image1.jpg")

await page.waitForTimeout(5000)

await page.locator('#file-submit').click()

await page.waitForTimeout(5000)

const uploadMsg  = await page.locator("//h3[normalize-space()='File Uploaded!']").textContent()

//console.log("the text is  =============",uploadMsg)

//expect (await page.locator("//h3")).toHaveText("File Uploaded!") 

expect(uploadMsg=="File Uploaded!").toBeTruthy()


//expect(uploadMsg).toHaveText('File Uploaded!')



})