import BasePage from "./BasePage";
import{Locator, expect} from "@playwright/test";

export default class ProductsPage implements CreateOrderInterface
{
    static readonly pageUrl="https://www.saucedemo.com/inventory.html";
    page: any;
    souceLabBackPackAddBtn:Locator;
    addToCardBtns:any;
    cardItem:Locator;

    constructor()
    {

    }

    async initPage()
    {
        this.page = await BasePage.getPage(); 
        await this.page.goto(ProductsPage.pageUrl);
        this.souceLabBackPackAddBtn = await this.page.locator("//button[@id='add-to-cart-sauce-labs-backpack']");
        this.addToCardBtns = await this.page.locator("//button[contains(text(), 'Add to cart')]").all();
        this.cardItem = await this.page.locator("//span[@class='shopping_cart_badge']");
    }

    async addOneItemTocard() 
    {
        await this.souceLabBackPackAddBtn.click();
    }

    async addAllItemsToCard() 
    {
        for(let i = 0; i <= this.addToCardBtns.length; i++){
            await this.addToCardBtns[i].click();
        }
    }

    async cardItemsToEqual(items:String)
    {
        expect(await this.page.locator("//span[contains(text(), '1')]")).toHaveText(String(items));
    }

}