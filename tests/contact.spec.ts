import {test,expect} from '@playwright/test'
import Contact from '../pages/contact.page'

test.describe('contact', () => {
    let contact : Contact
    test('verify success message', async ({ page }) => {
        contact = new Contact(page)

        await contact.navigate();

        await contact.submitForm('test name','test@gmail.com','787890867')

        const success = contact.successAlert
        await expect(success).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    })
    
})
