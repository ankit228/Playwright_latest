import {test,expect} from '@playwright/test'
import CartPage from '../pages/cart.page'
const path = require('path')

test.describe('upload file', () => {
    let cartPage : CartPage

    test('should upload test file', async ({ page }) => {
        cartPage = new CartPage(page)

        await page.goto('https://practice.sdetunicorns.com/cart/')

        // provide test file path
        const filePath = path.join(__dirname,'../data/Ankit QA.pdf');

        cartPage.uploadComponent().uploadFile(filePath)

        // assertion
        //const message = page.locator('#wfu_messageblock_header_1_label_1')
        const message = cartPage.uploadComponent().message
        // await expect(message).toContainText('uploaded successfully')
    })
    
})
