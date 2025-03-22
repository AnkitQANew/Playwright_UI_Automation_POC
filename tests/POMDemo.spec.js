const {test,expect} = require ('@playwright/test')

  const loginScreen =  require("../pages/LoginPage")
  const LoginPage = require('../pages/LoginPage')
  const Homepage  = require('../pages/Homepage')

   const testData =   JSON.parse(JSON.stringify(require('../testdata.json')))



test ("Verify the url",   async ({page})=> {
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const login_page =   new LoginPage(page)
    const Home_page  =   new Homepage(page)

    //await login_page.loginToApplication(testData.username,testData.password)

    await login_page.loginToApplication(testData.CorrectUsername,testData.CorrectPassword)
    
    await page.waitForTimeout(5000)

    await expect(page).toHaveURL("https://freelance-learn-automation.vercel.app/")

    await expect(page).toHaveTitle("Learn Automation Courses")

    //await Home_page.HomepageHeading()

    await expect(Home_page.HomepageHeading).toBeVisible()


    await Home_page.logOutFromApp()

})



