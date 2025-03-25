export class Order {
    id;
    menuItem;
    status;
    meal;

    constructor (orderNumber, menuItem) {
        this.id = orderNumber;
        this.menuItem = menuItem;
        this.status = 'new';
        this.meal = '';
    }

    setStatus(newStatus) {
        
    }
}