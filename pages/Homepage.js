const {expect} = require ('@playwright/test')

class Homepage 
{
   constructor (page) 

   {
      this.page = page

      this.menu             = "//img[@alt='menu']"
      this.signout          = "//button[normalize-space()='Sign out']"
      this.cartbtn          = "//button[@class='cartBtn']"
      this.HomepageHeading  = page.locator("//h1[normalize-space()='Learn Automation Courses']")
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