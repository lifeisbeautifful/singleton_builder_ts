export default class CreateOrder
{
    readonly CreateOrders: CreateOrderInterface;

    constructor(createOrders: CreateOrderInterface)
    {
        this.CreateOrders = createOrders;

    }

    async addOneItemToCard()
    {
        await this.CreateOrders.addOneItemTocard();

    }

    async addAllItemsToCard()
    {
        await this.CreateOrders.addAllItemsToCard();
    }
}