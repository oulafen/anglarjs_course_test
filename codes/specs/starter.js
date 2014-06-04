var source = null;
var practice_name = null;

(function (finish_call_back) {
    window.addEventListener("message", function (msg) {
        console.log(msg.data)
        practice_name = msg.data;
        source = msg.source;
        source.postMessage('got', "http://" + window.location.host);
    }, false)
    boot(finish_call_back);
})(get_api);

function get_api(specs) {
    console.log(specs);
    var interval = setInterval(function () {
        if (source) {
            test_of[practice_name]();
            clearInterval(interval);
        }
    }, 500);
}


//source.postMessage(true,"http://"+window.location.host);          测试跑过 返回一个'正确'信号
//source.postMessage(false, "http://" + window.location.host)       测试未过 返回一个'错误'信号