const {test,expect} = require ('@playwright/test')

////////////////////////////////////////////   getByAlttext ///////////////////////////////////////////////////

test ("VerifyLocator with -- getByAlttext", async ({page})=>{

    await page.goto ("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        const companyLogo =  await page.getByAltText("company-branding")
        expect (companyLogo).toBeVisible

} )

test ("VerifyLocator with -- Get By placeholders", async ({page})=> {
    
    await page.goto ("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder('Username').fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")

    await page.click("//button[normalize-space()='Login']")

     const pageUrl = await page.url()
 
    cpnsole.log("The url is ------   ",pageUrl)
})


