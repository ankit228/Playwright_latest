import { Page, Locator } from "@playwright/test";

class Blog{
    page: Page;
    recentPost: Locator;
    constructor(page:Page){
        this.page = page
        this.recentPost = page.locator('#recent-posts-3 ul li')
    }

    async navigate(){
        await this.page.goto('/blog/')
    }
}

export default Blog;