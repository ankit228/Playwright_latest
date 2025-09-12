import {test,expect} from '@playwright/test'
import HomePage from '../pages/home.page'

test.describe('Home', () => {
    let homePage:HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    })
    
    test('Get started and verify URL', async ({ page }) => {
        // homePage = new HomePage(page)

        // //await page.goto('https://practice.sdetunicorns.com/');
        // await homePage.navigate();

        // click on get started button using CSS selector
        await homePage.getStartedBtn.click()
        // Verify url
       await expect(page).toHaveURL(/.*#get-startedd/)
    })

    test('Reading text', async ({ page }) => {

        const ReadingText = await homePage.headingText;
        await expect(ReadingText).toBeVisible();
    })

    test('Verify home link enabled using css and text selector', async ({ page }) => {

        const homeText = await homePage.homeLink;
        await expect(homeText).toBeEnabled();
        
    })

    test('search icon', async ({ page }) => {
       
        await homePage.navigate()
        const search = await homePage.searchIcon;

        await expect(search).toBeVisible()
    })     

    test('Verify text of all nav links', async ({ page }) => {

        const expectedLinks = [
            "Home","About","Shop","Blog","Contact","My account"
        ]


        //const navLinks = homePage.navLinks;
        expect(await homePage.getNavLinksText()).toEqual(expectedLinks)
    })  
})
