import{test,expect} from '@playwright/test'
import Blog from '../pages/blog.page'

test.describe('Blog', () => {
    let blog : Blog;
    test('Verify recent post', async ({ page }) => {
        blog = new Blog(page)

        await blog.navigate();

        // get the recent post list elements
        const recent = blog.recentPost

        for (const el of await recent.elementHandles()) {
            const text = (await el.textContent())!;
            expect(text.trim().length).toBeGreaterThan(10)
        }

        expect(await recent.count()).toEqual(5)
    })
    
})
