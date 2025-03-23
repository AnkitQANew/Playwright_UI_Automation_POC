const {expect} = require ('@playwright/test')

class CartScreen
{
    constructor (page) 

    {
       this.page = page
 
       this.cartBtn                       = page.locator("//button[@class='cartBtn']")
       this.enrollNow                     = page.locator("//button[normalize-space()='Enroll Now']")
       this.courseName_1                  = page.locator("//h2[normalize-space()='Java For Tester']")
       this.cartItemCount                 = page.locator("//span[@class='count']")
       
   
 
    }


}

module.exports=CartScreen;