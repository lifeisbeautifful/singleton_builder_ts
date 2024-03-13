import {expect, test} from "@playwright/test";
import Loginpage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import CreateOrder from "./pages/CreateOrder";

test.describe.serial("Add products to card test", async() => {
    test.beforeAll("Login", async() => {
        const loginPage = new Loginpage();
        await loginPage.initPage();
        await loginPage.Login();
    });

   
    test("Add one item to card", async() => {
        const productspage = new ProductsPage();
        await productspage.initPage();
        const order = new CreateOrder(productspage);
        await order.addFirstItemToCard();
        await productspage.cardItemsToEqual("1");
    });

    test("Add several items to card", async() => {
        const productspage = new ProductsPage();
        await productspage.initPage();
        const order = new CreateOrder(productspage);
        await order.addItemsToCard(2);
        await productspage.cardItemsToEqual("2");
    });

    test.afterEach("Clear cart", async() => {
        const productspage = new ProductsPage();
        await productspage.initPage();
        const order = new CreateOrder(productspage);
        await order.clearCart();
    })
})

