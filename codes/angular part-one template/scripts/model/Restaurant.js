function Restaurant(restaurant_name) {
    this.name = restaurant_name;
}

Restaurant.get_all_restaurants = function () {
    return restaurants_data
}

Restaurant.prototype.save = function () {
    localStorage.setItem("restaurant_name", this.name);
}

Restaurant.get_chose_restaurant_name = function () {
    return localStorage.getItem('restaurant_name');
}