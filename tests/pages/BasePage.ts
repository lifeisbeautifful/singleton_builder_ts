import{Page, chromium} from "@playwright/test";

export default class BasePage{
    private static pageInstance:Page;

    private constructor()
    {

    }

    public static async getPage()
    {
        if(!BasePage.pageInstance)
        {
            const browser = await chromium.launch();
            const context = await browser.newContext();
            const page = await context.newPage();
            BasePage.pageInstance = await page;
        }

        return await BasePage.pageInstance;

    }

}