const {test,expect} = require ('@playwright/test')

const LoginPage = require('../pages/LoginPage')
const Homepage  = require('../pages/Homepage')

const testData =   JSON.parse(JSON.stringify(require('../testdata.json')))


test.beforeEach(async ({ page }) => {
  
  const login_page =   new LoginPage(page)
  await page.goto(testData.ApplicationURL)
  await login_page.loginToApplication(testData.CorrectUsername,testData.CorrectPassword)
});

test.afterEach(async ({ page }) => {

  const Home_page  =   new Homepage(page)

  await Home_page.logOutFromApp()

});


test("Verify thet when user add one item in the cart then text gets chnage ot the same button to Remove From the Cart", async({page})=> {
    
    const login_page =   new LoginPage(page)
    const Home_page  =   new Homepage(page)

    /*await page.goto(testData.ApplicationURL)
    await login_page.loginToApplication(testData.CorrectUsername,testData.CorrectPassword)
    await expect(page).toHaveURL("https://freelance-learn-automation.vercel.app/")
    */
    await expect(page).toHaveTitle("Learn Automation Courses")

    await Home_page.addToCart_item_1.click()
    await page.waitForTimeout(2000)

    const remove_option =  await Home_page.removeFromCart_1.textContent()

    expect (remove_option=="Remove from Cart").toBeTruthy();

  })


  test("Verify that when user add an item in the cart and then remove the same item from the cart then button text gets changes to Add to Cart again", async({page})=> {
    
    const login_page =   new LoginPage(page)
    const Home_page  =   new Homepage(page)
    
    await expect(page).toHaveTitle("Learn Automation Courses")

    await Home_page.addToCart_item_1.click()
    await page.waitForTimeout(2000)

    const remove_option =  await Home_page.removeFromCart_1.textContent()

    expect (remove_option=="Remove from Cart").toBeTruthy()
    
    await page.waitForTimeout(2000)
    await Home_page.removeFromCart_1.click()

    const  add_item = await Home_page.addToCart_item_1.textContent()

    expect (add_item=="Add to Cart").toBeTruthy();


  })