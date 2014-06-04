var test_of = {
    '1,视图模版': function () {
        compute_result_of_js_angular_section_1_practice_1()
    },

    '1,变量绑定': function () {
        compute_result_of_js_angular_section_2_practice_1()
    },
    '2,函数绑定': function () {
        compute_result_of_js_angular_section_2_practice_2()
    },

    '1,列表迭代器': function () {
        compute_result_of_js_angular_section_3_practice_1()
    },

    '1,本地存储': function () {
        compute_result_of_js_angular_section_4_practice_1()
    },
    '2,显示与隐藏': function () {
        compute_result_of_js_angular_section_4_practice_2()
    }

}

function compute_result_of_js_angular_section_1_practice_1() {

    var home_page_id = document.getElementById("home_page")

    if (home_page_id) {
        var scope = angular.element(home_page_id).scope();
        scope.$apply(function () {
            scope.help_order();
        });
        setTimeout('document.getElementById("order_details_page")?source.postMessage(true, "http://" + window.location.host):source.postMessage(false, "http://" + window.location.host)', 700)

    } else {
        source.postMessage(false, "http://" + window.location.host);
    }

}

function compute_result_of_js_angular_section_2_practice_1() {

    var home_page_id = document.getElementById("home_page");
    if (home_page_id) {
        var scope = angular.element(home_page_id).scope();
        scope.$apply(function () {
            scope.help_order();
        });
    }

    function test_choose_people(){
        var order_details_page_id = document.getElementById("order_details_page")
        if (order_details_page_id) {
            var scope = angular.element(order_details_page_id).scope();

            if (scope.choose_people && scope.choose_people == "选人") {
                console.log("1")
                source.postMessage(true, "http://" + window.location.host);
            } else {
                console.log("2")
                source.postMessage(false, "http://" + window.location.host);
            }

        } else {
            console.log("22")
            source.postMessage(false, "http://" + window.location.host);
        }
    }
    setTimeout(function() {test_choose_people()}, 700);

}

function compute_result_of_js_angular_section_2_practice_2() {

    var home_page_id = document.getElementById("home_page");
    if (home_page_id) {
        var scope = angular.element(home_page_id).scope();
        scope.$apply(function () {
            scope.help_order();
        });
    }

    setTimeout(function() {test_go_choose_person_function()}, 700);
    function test_go_choose_person_function(){
        var order_details_page_id = document.getElementById("order_details_page")
        if (order_details_page_id) {
            var scope = angular.element(order_details_page_id).scope();
            scope.$apply(function () {
                if (scope.choose_people == "选人" && typeof scope.go_choose_person == "function") {
                    scope.go_choose_person();
                }
            });
            setTimeout('document.getElementById("choose_people_page")?source.postMessage(true, "http://" + window.location.host):source.postMessage(false, "http://" + window.location.host)', 700);
        } else {
            source.postMessage(false, "http://" + window.location.host);
        }
    }
}

function compute_result_of_js_angular_section_3_practice_1() {

    var home_page_id = document.getElementById("home_page");
    if (home_page_id) {
        var scope = angular.element(home_page_id).scope();
        scope.$apply(function () {
            scope.help_order();
        });
    }

    setTimeout(function() {test_go_choose_person_function()}, 700);
    function test_go_choose_person_function(){
        var order_details_page_id = document.getElementById("order_details_page")
        if (order_details_page_id) {
            var scope = angular.element(order_details_page_id).scope();
            scope.$apply(function () {
                scope.go_choose_person();
            });
        }
    }

    setTimeout(function() {test_person_name()}, 1400);
    function test_person_name(){
        var choose_people_page_id = document.getElementById("choose_people_page");
        if (choose_people_page_id) {
            var scope = angular.element(choose_people_page_id).scope();
            scope.$apply(function () {
                var people = scope.people;
                var array = ['赵大','钱二','张三','李四','王五','刘六'];
                var count = 0;
                for(index in people){
                    count+=$.inArray(people[index].name, array);
                }

                count==15?source.postMessage(true, "http://" + window.location.host):source.postMessage(false, "http://" + window.location.host);

            });
        } else {
            source.postMessage(false, "http://" + window.location.host);
        }
    }
}

function compute_result_of_js_angular_section_4_practice_1() {

    var home_page_id = document.getElementById("home_page");
    if (home_page_id) {
        var scope = angular.element(home_page_id).scope();
        scope.$apply(function () {
            scope.help_order();
        });
    }

    setTimeout(function() {test_go_choose_person_function()}, 700);
    function test_go_choose_person_function(){
        var order_details_page_id = document.getElementById("order_details_page")
        if (order_details_page_id) {
            var scope = angular.element(order_details_page_id).scope();
            scope.$apply(function () {
                scope.go_choose_person();
            });
        }
    }

    setTimeout(function() {test_person_name()}, 1400);
    function test_person_name(){
        var choose_people_page_id = document.getElementById("choose_people_page");
        if (choose_people_page_id) {
            var scope = angular.element(choose_people_page_id).scope();
            localStorage.clear();
            scope.$apply(function () {
                scope.choose_person('赵大');
            });

            if (localStorage.getItem('person_name') == '赵大') {
                setTimeout('document.getElementsByClassName("well").length != 0 && document.getElementsByClassName("well")[0].value == "赵大" ? source.postMessage(true, "http://" + window.location.host) : source.postMessage(false, "http://" + window.location.host)', 700)
            } else {
                source.postMessage(false, "http://" + window.location.host);
            }
        } else {
            source.postMessage(false, "http://" + window.location.host);
        }
    }
}

function compute_result_of_js_angular_section_4_practice_2() {

    var home_page_id = document.getElementById("home_page");
    if (home_page_id) {
        var scope = angular.element(home_page_id).scope();
        scope.$apply(function () {
            scope.help_order();
        });
    }

    setTimeout(function() {test_go_choose_person_function()}, 700);
    function test_go_choose_person_function(){
        var order_details_page_id = document.getElementById("order_details_page")
        if (order_details_page_id) {
            var scope = angular.element(order_details_page_id).scope();
            scope.$apply(function () {
                scope.go_choose_person();
            });
        }
    }

    setTimeout(function() {test_ngshow()}, 1400);
    function test_ngshow(){
        var choose_people_page_id = document.getElementById("choose_people_page");
        if (choose_people_page_id) {
            var scope = angular.element(choose_people_page_id).scope();
            localStorage.clear();
            scope.$apply(function () {
                scope.choose_person('赵大');
            });
            if( document.getElementById('confirm').length != 0 && document.getElementById('confirm').attributes[2].nodeValue == 'person_name') {
                source.postMessage(true, "http://" + window.location.host);
            } else {
                source.postMessage(false, "http://" + window.location.host);
            }
        } else {
            source.postMessage(false, "http://" + window.location.host);
        }
    }
}
