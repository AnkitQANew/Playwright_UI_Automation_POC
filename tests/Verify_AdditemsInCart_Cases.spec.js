const {test,expect} = require ('@playwright/test')

const LoginPage = require('../pages/LoginPage')
const Homepage  = require('../pages/Homepage')

const testData =   JSON.parse(JSON.stringify(require('../testdata.json')))


test("Verify then when user one item in the cart then text gets chnage for the same button to Remove From the Cart", async({page})=> {
    
    const login_page =   new LoginPage(page)
    const Home_page  =   new Homepage(page)

    await page.goto(testData.ApplicationURL)

    await login_page.loginToApplication(testData.CorrectUsername,testData.CorrectPassword)

    await expect(page).toHaveURL("https://freelance-learn-automation.vercel.app/")

    await expect(page).toHaveTitle("Learn Automation Courses")

    await Home_page.addToCart_item_1.click()
    await page.waitForTimeout(2000)

    const remove_option =  await Home_page.removeFromCart_1.textContent()

    expect (remove_option=="Remove from Cart").toBeTruthy();

  })