const {test,expect} = require ('@playwright/test')

  //const loginScreen =  require("../pages/LoginPage")
  const LoginPage = require('../pages/LoginPage')
  const Homepage  = require('../pages/Homepage')

  const testData =   JSON.parse(JSON.stringify(require('../testdata.json')))


  test("Verify Login with valid credentials--> User must be login into the App ", async({page})=> {
    
    const login_page =   new LoginPage(page)
    const Home_page  =   new Homepage(page)

    await page.goto(testData.ApplicationURL)

    await login_page.loginToApplication(testData.CorrectUsername,testData.CorrectPassword)

    await expect(page).toHaveURL("https://freelance-learn-automation.vercel.app/")

    await expect(page).toHaveTitle("Learn Automation Courses")

  })

  test ("Verify Login with invalid credentials--> User must not be login into the App and Error msg should be shown", async({page})=> {
    
    const login_page =   new LoginPage(page)
    const Home_page  =   new Homepage(page)

    await page.goto(testData.ApplicationURL)

    await login_page.loginToApplication(testData.IncorrectUsername,testData.IncorrectPassword)

    await page.waitForTimeout(3000)

    const text = await login_page.errorMsg1.textContent()

    console.log(text)

    expect (text=="USER Email Doesn't Exist").toBeTruthy()
    
    await page.waitForTimeout(2000)
    expect (login_page.errorMsg1).toBeVisible()

  })


  test("Verify Login when user provides the correct username but doesnot provide the password", async({page})=> {
    
    const login_page =   new LoginPage(page)
    const Home_page  =   new Homepage(page)

    await page.goto(testData.ApplicationURL)

    await login_page.loginToApplication(testData.CorrectUsername,testData.BlankPassword)

    await page.waitForTimeout(3000)

    const text = await login_page.errorMsg2.textContent()

    console.log(text)

    expect (text=="Password is required").toBeTruthy()
    
    expect (login_page.errorMsg2).toBeVisible()

  })


  test ("Verify Logout feature is working", async({page})=> {
    
    const login_page =   new LoginPage(page)
    const Home_page  =   new Homepage(page)

    await page.goto(testData.ApplicationURL)

    await login_page.loginToApplication(testData.CorrectUsername,testData.CorrectPassword)

    await page.waitForTimeout(3000)

    await expect(page).toHaveURL("https://freelance-learn-automation.vercel.app/")

    await expect(page).toHaveTitle("Learn Automation Courses")

   await Home_page.logOutFromApp();

    await expect(page).toHaveURL("https://freelance-learn-automation.vercel.app/login")
  })
