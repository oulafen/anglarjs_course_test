function Food() {
}

Food.get_all_foods = function () {
    return foods_data;
}

Food.save_food = function (food_name) {
    localStorage.setItem("food_name", food_name);
}

Food.get_chose_food_name = function () {
    return localStorage.getItem('food_name');
}