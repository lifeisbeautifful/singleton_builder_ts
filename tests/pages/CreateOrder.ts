export default class CreateOrder
{
    readonly Orders: CreateOrderInterface;

    constructor(createOrders: CreateOrderInterface)
    {
        this.Orders = createOrders;
    }

    async addFirstItemToCard()
    {
        await this.Orders.addFirstItemTocard();
    }

    async addItemsToCard(items:Number)
    {
        await this.Orders.addtemsToCard(Number(items));
    }

    async clearCart()
    {
        await this.Orders.clearCart();
    }
}