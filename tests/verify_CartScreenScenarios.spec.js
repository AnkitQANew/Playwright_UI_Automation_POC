const {test,expect} = require ('@playwright/test')

  //const loginScreen =  require("../pages/LoginPage")
  const LoginPage     = require('../pages/LoginPage')
  const Homepage      = require('../pages/Homepage')
  const CartScreen    = require ('../pages/CartScreen')

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

  test ("Verify that if user click on the cart button then user must be navigate to the cart page", async({page})=> {
    
    const login_page =   new LoginPage(page)
    const Home_page  =   new Homepage(page)
    const cart_screen=   new CartScreen(page)

    /*await page.goto(testData.ApplicationURL)
    await login_page.loginToApplication(testData.CorrectUsername,testData.CorrectPassword)
    await expect(page).toHaveURL("https://freelance-learn-automation.vercel.app/")
  */
    await expect(page).toHaveTitle("Learn Automation Courses")

    await Home_page.cartbtn.click()

    expect (page).toHaveURL("https://freelance-learn-automation.vercel.app/cart")  

  })

  test ("Verify that if user add any item in the cart then on the cart page it gets added", async({page})=> {
    
    const login_page =   new LoginPage(page)
    const Home_page  =   new Homepage(page)
    const cart_screen=   new CartScreen(page)

   /* await page.goto(testData.ApplicationURL)
    await login_page.loginToApplication(testData.CorrectUsername,testData.CorrectPassword)
    await expect(page).toHaveURL("https://freelance-learn-automation.vercel.app/")
 */
    await expect(page).toHaveTitle("Learn Automation Courses")

    await Home_page.addToCart_item_1.click()
    await page.waitForTimeout(2000)
    
    await Home_page.cartbtn.click()

    expect (cart_screen.courseName_1).toBeVisible()
   

  })

  test ("Verify that if user adds one item in the cart then cart count gets chnages to 1", async({page})=> {
    
    const login_page =   new LoginPage(page)
    const Home_page  =   new Homepage(page)
    const cart_screen=   new CartScreen(page)

    /*await page.goto(testData.ApplicationURL)
    await login_page.loginToApplication(testData.CorrectUsername,testData.CorrectPassword)
    await expect(page).toHaveURL("https://freelance-learn-automation.vercel.app/")
*/
    await expect(page).toHaveTitle("Learn Automation Courses")

    await Home_page.addToCart_item_1.click()
    await page.waitForTimeout(2000)
    
    await Home_page.cartbtn.click()

    const cartCount = await cart_screen.cartItemCount.textContent()

    expect (cartCount==1).toBeTruthy()

  })