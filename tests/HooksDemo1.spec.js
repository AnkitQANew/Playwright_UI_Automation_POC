const {test,expect} = require ('@playwright/test')

let page;

test.beforeEach(async ({browser})=> {

    page  = await browser.newPage();

    await page.goto("https://freelance-learn-automation.vercel.app/login")
    
    await page.locator("#email1").fill("Mark21@gmail.com")
    await page.locator("//input[@id='password1']").fill("admin@123")
    await page.locator("//button[@type='submit']").click()

    await page.waitForTimeout(5000)
    

})

test.afterEach (async () => {

    await page.locator("//img[@alt='menu']").click()

     await page.locator("//button[normalize-space()='Sign out']")

})


test ("Verify the Homepage",  async ()=> {


    await page.locator(".cartBtn").click()

     const text  = await page.locator("//div[@class='container-child']//h3[1]").textContent()

     console.log("The text is :::::: ",text)

     await expect (text=="Total Price: ₹0").toBeTruthy()

     await expect(page.locator("//div[@class='container-child']//h3[1]")).toBeVisible()

})


test ("Add product in the cart and verify the total",   async ()=> {

    const price1 = page.locator("//div[@class='home-container']//div[1]//div[2]//span[1]//b[1]").textContent()
                                 
    const price2 =  page.locator("//div[@class='container-child']//div[2]//div[2]//span[1]//b[1]").textContent()
    
    console.log("item 1 price:::::",price1)
    console.log("item 2 price:::::",price2)
    // adding first item in the cart 
       await page.locator("//div[@class='home-container']//div[1]//div[2]//button[1]").click()

    // adding second item in the cart 
    await page.locator("//div[@class='container-child']//div[2]//div[2]//button[1]").click()
   

    // navigating in the cart 

    await page.locator("//button[@class='cartBtn']").click()

    //const priceitem1  = await page.locator("//div[@class='cart-container']//b[1]").textContent()
    //console.log("The first price is   -----------",priceitem1 )

    // capturing the total price 

   const totalprice  = await page.locator("//div[@class='top-container']//b[1]").textContent()

   const total =  parseFloat(totalprice.replace('₹', ''));

   console.log("The total price is   -----------",totalprice )

    expect (total).toBe(2000)
         
})