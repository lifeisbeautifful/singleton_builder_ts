import BasePage from "./BasePage";
import{Locator, expect} from "@playwright/test";

export default class ProductsPage implements CreateOrderInterface
{
    static readonly pageUrl="https://www.saucedemo.com/inventory.html";
    page: any;
    souceLabBackPackAddBtn:Locator;
    addToCardBtns:any;
    removeBtns:any;

    constructor()
    {

    }

    async initPage()
    {
        this.page = await BasePage.getPage(); 
        await this.page.goto(ProductsPage.pageUrl);
        this.souceLabBackPackAddBtn = await this.page.locator("//button[@id='add-to-cart-sauce-labs-backpack']");
        this.addToCardBtns = await this.page.locator("//button[contains(text(), 'Add to cart')]").all();
    }

    async addFirstItemTocard() 
    {
        await this.souceLabBackPackAddBtn.click();
    }

    async addtemsToCard(itemsQuantity:Number) 
    {
        for(let i = 1; i <= this.addToCardBtns.length && i <= Number(itemsQuantity); i++)
        {
            await this.addToCardBtns[i].click();
        }
    }

    async clearCart()
    {
        this.removeBtns = await this.page.locator("//button[contains(text(), 'Remove')]").all();

        while(await this.removeBtns.length > 0)
        {
            await this.removeBtns[0].click();
            this.removeBtns = await this.page.locator("//button[contains(text(), 'Remove')]").all();
        }
    }

    async cardItemsToEqual(items:String)
    {
        let cart = await this.page.locator(`//a[@class='shopping_cart_link']/child::span[contains(text(), '${items}')]`);
        await expect(cart).toBeVisible();
        await expect(cart).toHaveText(String(items));
    }

}