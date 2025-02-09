const {test,expect} = require ('@playwright/test')


test ("Select value from Drop-Down ", async ({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/");
    
    //////////////////////// select with label ////////////////////
    await page.locator('id=country').selectOption({label:'India'})
    
    await page.waitForTimeout(5000)

   //////////////////////// select with visible text ////////////////////
   await page.locator('id=country').selectOption('Japan')

   await page.waitForTimeout(5000)

   //////////////////////// select with value ////////////////////
   await page.locator('id=country').selectOption({value:'uk'})

   await page.waitForTimeout(5000)

  //////////////////////// select by index ////////////////////
  await page.locator('id=country').selectOption({index:1})

  //await page.waitForTimeout(5000)

 ///////////////////////////////////  Find the drop-down lenght ////////////////////

   const Alloptions = await page.$$('#country option')

   await console.log("The total count is ===========",Alloptions.length)


   ///////////////////////////////////////////////////////////////////////////////////

     const DropDown  =  page.locator('#country')

     const countdata     =    DropDown.locator('option').count()

     console.log("The total count is >>>>>>>>>>>>>>",countdata.length)


     ///////////////////////////////////  verify the a particular data in a drop-down Approach 1 ////////////////////////////


     const allData  =  await page.locator('#country').textContent()

     await expect(allData.includes('India')).toBeTruthy()


     ///////////////////////////////////  verify the a particular data in a drop-down Approach  ////////////////////////////

     const dropdownData  =  await page.$$('#country option')
     let status = false;
     for (const x of dropdownData)
     {
        const txtData =  await x.textContent()

        console.log(txtData)

        if (txtData.includes('india'))

            {
                status=true;
                break;
            }

     }
              
               expect(status).toBeTruthy()

})   


