function Person(person_name) {
    this.name = person_name;
}

Person.get_all_people = function () {
    return users_data;
}

Person.get_chose_person_name = function () {
    return localStorage.getItem('person_name');
}

Person.prototype.save = function () {
    localStorage.setItem("person_name", this.name);
}