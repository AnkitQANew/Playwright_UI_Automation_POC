const {expect} = require ('@playwright/test')

class Homepage 
{
   constructor (page) 

   {
      this.page = page

      this.menu                        = page.locator("//img[@alt='menu']")
      this.signout                     = page.locator("//button[normalize-space()='Sign out']")
      this.cartbtn                     = page.locator("//button[@class='cartBtn']")
      this.HomepageHeading             = page.locator("//h1[normalize-space()='Learn Automation Courses']")
      this.addToCart_item_1            = page.locator("//div[@class='home-container']//div[1]//div[2]//button[1]")
      this.removeFromCart_1            = page.locator("//button[normalize-space()='Remove from Cart']")

   }
    
   async logOutFromApp()
   {
    await this.page.click(this.menu)
   // await page.waitForTimeout(3000)
    await this.page.click(this.signout)
   }


    async HomepageHeading()
    {
      await expect(this.page.locator(this.HomepageHeading)).toBeVisible()

    }


}

module.exports=Homepage;