// import { test, expect } from '@playwright/test';

// test.describe('My account', () => {
//     test.beforeEach(async ({ page }) => {
//         await page.goto('/my-account')
//         await page.locator('#username').fill('practiceuser1')
//         await page.locator('#password').fill('PracticePass1!')
//         await page.locator('button[name="login"]').click()
//     })

//     test('Access order', async ({ page }) => {
//         await page.goto('/my-account');
//         page.locator(`li a[href*= 'orders']`).click()
//         await expect(page).toHaveURL(/.*orders/)
//     })

//     test('Access Downloads', async ({ page }) => {
//         await page.goto('/my-account')
//         await page.locator(`li a[href*='downloads']`).click()
//         await expect(page).toHaveURL(/.*downloads/)
//     })   
    
// })

// How run above test using beforeAll - beforeall works totally differently

import { test, expect, Page } from '@playwright/test';

test.describe.serial('My account', () => {
    let page : Page
    test.beforeAll(async ({browser}) => {
        page = await browser.newPage();
        await page.goto('/my-account')
        await page.locator('#username').fill('practiceuser1');
        await page.locator('#password').fill('PracticePass1!');
        await page.locator('button[name="login"]').click();
    })

    test('Access order', async () => {
        await page.goto('/my-account');
        page.locator(`li a[href*= 'orders']`).click();
        await expect(page).toHaveURL(/.*orders/)
    })

    test('Access Downloads', async () => {
        await page.goto('/my-account')
        await page.locator(`li a[href*='downloads']`).click()
        await expect(page).toHaveURL(/.*downloadss/)
    })   
})



