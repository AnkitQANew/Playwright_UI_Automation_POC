
class LoginPage 
{

     constructor (page)

     {
        this.page = page

        this.usermane = "#email1"
        this.password = "//input[@id='password1']"
        this.LoginBtn = "//button[@type='submit']"

     }

     async loginToApplication(Username,Password)
     {
        await this.page.fill(this.usermane, Username)
        await this.page.fill(this.password, Password)
        await this.page.click(this.LoginBtn)

     }


}

module.exports=LoginPage;
