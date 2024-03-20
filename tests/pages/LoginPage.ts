import BasePage from "./BasePage";
import{Locator, expect} from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

export default class Loginpage
{
    static readonly pageUrl="https://www.saucedemo.com/";
    page: any;
    userNameField:Locator;
    passwordField:Locator;
    loginBtn:Locator

    constructor()
    {
        
    }

    async initPage()
    {
        this.page = await BasePage.getPage(); 
        await this.page.goto(Loginpage.pageUrl);
        this.userNameField = await this.page.locator("//input[@placeholder='Username']");
        this.passwordField = await this.page.locator("//input[@placeholder='Password']");
        this.loginBtn = await this.page.locator("//input[@data-test='login-button']");
    }

    async Login()
    {
        await this.userNameField.fill("standard_user");
        //await this.userNameField.fill(process.env.USERNAME as string);
        await this.passwordField.fill("secret_sauce");
        await this.loginBtn.click();
        await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html");
    }

}