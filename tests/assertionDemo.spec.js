
const {test,expect} = require ('@playwright/test')

test ("Assertion demo   ", async ({page})=> {

    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")

    ///////////////////////////// verify the URL ////////////////////////////////////
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register?returnUrl=%2F")
    
    ///////////////////////////// verify the Title ////////////////////////////////////
    await expect(page).toHaveTitle("nopCommerce demo store. Register")

     ///////////////////////////// verify the visibility of element ////////////////////

     const logo = await page.locator("//img[@alt='nopCommerce demo store']")

      await expect(logo).toBeVisible()


      ///////////////////////////// To contain text ////////////////////    /// will check partial text 

     const heading =  await page.locator("//h1[normalize-space()='Register']")

     await expect(heading).toContainText("iste")

       ///////////////////////////// To have text ////////////////////    /// will check complete text 

       const heading2 =  await page.locator("//h1[normalize-space()='Register']")

       await expect(heading2).toContainText("Register")

      ///////////////////////////// To have Count in drop-down////////////////////////////////////////////////////// 
      
      
              const monthOption    = await page.locator('select[name="DateOfBirthMonth"] option')

              await   expect(monthOption).toHaveCount(13)

      ///////////////////////////// To have value in a drop-down  ////////////////////////////////////////////////////// 
      
      
      const monthdropdownOption    = await page.locator('//select[@name="DateOfBirthMonth"]')

      const options                = await monthdropdownOption.locator('option').allTextContents();

      await   expect(options).toHaveValue('April')






})

                                                 


