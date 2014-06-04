function Order() {
    this.person_name = Person.get_chose_person_name();
    this.restaurant_name = Restaurant.get_chose_restaurant_name();
    var food_name = Food.get_chose_food_name();
    var food = $.grep(Food.get_all_foods()[Restaurant.get_chose_restaurant_name()], function (food) {
        return food.name == Food.get_chose_food_name()
    })[0];
    console.log(food, "food")
    this.food_name = food.name;
    this.food_price = food.price;
}

Order.get_orders = function () {
    return JSON.parse(localStorage.getItem("orders")) || [];
}

Order.prototype.have_ordered = function () {
    var person_name = this.person_name;
    return $.grep(Order.get_orders(), function (order) {
        return order.person_name == person_name;
    }).length == 0
}

Order.prototype.process_order = function () {
    var orders = Order.get_orders();
    if (this.have_ordered()) {
        orders.push(this)
    }
    else {
        var current_order = this;
        var orders = $.map(orders, function (order) {
            if (order.person_name == current_order.person_name) {
                order = current_order;
            }
            return order
        })
    }
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.removeItem('food_name');
    localStorage.removeItem('person_name');
}

Order.clear_food_data = function () {
    localStorage.removeItem('food_name');
}

Order.get_total_money = function () {
    var money = 0
    for (var i = 0; i < Order.get_orders().length; i++) {
        money = money + Order.get_orders()[i].food_price;
    }
    return money;
}

Order.get_no_order_people = function () {
    var all_people = $.map(Person.get_all_people(), function (person) {
        return person.name;
    });
    var order_people = $.map(Order.get_orders(), function (order) {
        return order.person_name;
    })
    var no_order_people = $.map(all_people, function (person) {
        if ($.inArray(person, order_people) == -1) {
            return person;
        }
    })
    return no_order_people;
}