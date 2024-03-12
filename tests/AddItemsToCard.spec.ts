import {expect, test} from "@playwright/test";
import Loginpage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";

test.describe.serial("Add products to card test", async() => {
    test.beforeAll("Login", async() => {
        const loginPage = new Loginpage();
        await loginPage.initPage();
        await loginPage.Login();
    });

   
    test("Add one item to card", async() => {
        const productspage = new ProductsPage();
        await productspage.initPage();
        await productspage.addOneItemTocard();
        await productspage.cardItemsToEqual("1");
    });

    test("Add all items to card", async() => {
        const productspage = new ProductsPage();
        await productspage.initPage();
        await productspage.addAllItemsToCard();
        await productspage.cardItemsToEqual("6");

    })
})

