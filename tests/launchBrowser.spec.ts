import { test, expect } from '@playwright/test';

test('multiple dropdowns', async ({ page }) => {

    await page.goto('https://letcode.in/dropdowns');

    const dropdown=page.locator('//select[@id="superheros"]');

    const count= await dropdown.count();

    console.log("count of total dropdowns:",count);

    const option=await dropdown.all();
 
    for(const result of option ){
        const text = await result.textContent();
        console.log(text)
    }
     await page.waitForTimeout(2000);

        await dropdown.selectOption([{index:0},{value:"aq"},{label:'The Avengers'}]);

        await page.waitForTimeout(2000);

     const result:any = await dropdown.evaluate(element =>(element as HTMLSelectElement).multiple);

     console.log("result:",result);

     const selected_option=await dropdown.locator('option:checked');

     console.log("selected dropdowns:",selected_option);

     const counts=await selected_option.count();

     console.log("total selected options:",counts);//3

     const selected_opttion_print= await selected_option.all()

     for(const results of selected_opttion_print){
        const texts= await results.textContent();
        console.log("text value:",texts)
     }
	
	 await  dropdown.selectOption([]);//unselect the selected dropdowns

      await page.waitForTimeout(2000);
    
    });