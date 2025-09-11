import {Page, Locator} from '@playwright/test'

class Contact{
    page: Page
    name: Locator
    email: Locator
    phoneNumber: Locator
    submit: Locator
    successAlert: Locator

    constructor(page:Page){
        this.page = page
        this.name = page.locator('#evf-277-field_ys0GeZISRs-1');
        this.email = page.locator('#evf-277-field_LbH5NxasXM-2');
        this.phoneNumber = page.locator('#evf-277-field_66FR384cge-3');
        this.submit = page.locator('button[type="submit"]');
        this.successAlert = page.getByRole('alert');
        
    }

    async navigate(){
        await this.page.goto("/contact/");
    }

    async submitForm(name:string,email:string,phone:string){
        await this.name.fill(name);
        await this.email.fill(email);
        await this.phoneNumber.fill(phone);
        await this.submit.click();
    }
}

export default Contact;