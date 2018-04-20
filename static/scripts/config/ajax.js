/**
 * 封装ajax by Summer
 */
var ERROR_MESSAGE = '网络错误, 请稍后再试';

var ajax = {
    _ajax:function(url, data, options){

        return new Promise((resolve,reject) => {
            options = $.extends({
                type: 'POST',
                url: url,
                data: data,
                dataType: 'json',
                timeout : 120000, //超时时间两分钟
                beforeSend:function(data){
                    
                },
                success:function(data){
                    if (data.code == 0) {
                        return resolve(data);
                    } else {
                        data.msg = $.trim(data.msg) || ERROR_MESSAGE;
                        return reject(data);
                    }
                },
                error:function(data,textStatus){
                    if(textStatus=='timeout'){
                        //处理超时的逻辑
                        return reject({ code: "", msg: ERROR_MESSAGE });
                    }
    
                    var json = data.responseJSON;
                    //停留页面太久导致登陆状态失效
                    if (data.code == '10007') {
                        HttpUtil.redirect('/login');
                    }
    
                    if (json && json.msg) {
                        return reject(json);
                    } else {
                        return reject({ code: "", msg: ERROR_MESSAGE });
                    }
                },
                complete:function(data){
                    
                }
            },options);

            $.ajax(options);
        })
    }

};

export default ajax;