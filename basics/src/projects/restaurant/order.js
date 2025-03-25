export class Order {
    id;
    menuItem;
    status;
    meal;
    static actualId = 1;

    constructor (menuItem) {
        this.id = `order-${this.actualId}`;
        this.actualId++;
        this.menuItem = menuItem;
        this.status = 'new';
        this.meal = '';
    }

    setStatus(newStatus) {
        
    }
}