/**
 * Created by wuxingjiang on 2017/9/19.
 */
(function(t){function z(){for(var a=0;a<g.length;a++)g[a][0](g[a][1]);g=[];m=!1}function n(a,b){g.push([a,b]);m||(m=!0,A(z,0))}function B(a,b){function c(a){p(b,a)}function h(a){k(b,a)}try{a(c,h)}catch(d){h(d)}}function u(a){var b=a.owner,c=b.state_,b=b.data_,h=a[c];a=a.then;if("function"===typeof h){c=l;try{b=h(b)}catch(d){k(a,d)}}v(a,b)||(c===l&&p(a,b),c===q&&k(a,b))}function v(a,b){var c;try{if(a===b)throw new TypeError("A promises callback cannot return that same promise.");if(b&&("function"===
  typeof b||"object"===typeof b)){var h=b.then;if("function"===typeof h)return h.call(b,function(d){c||(c=!0,b!==d?p(a,d):w(a,d))},function(b){c||(c=!0,k(a,b))}),!0}}catch(d){return c||k(a,d),!0}return!1}function p(a,b){a!==b&&v(a,b)||w(a,b)}function w(a,b){a.state_===r&&(a.state_=x,a.data_=b,n(C,a))}function k(a,b){a.state_===r&&(a.state_=x,a.data_=b,n(D,a))}function y(a){var b=a.then_;a.then_=void 0;for(a=0;a<b.length;a++)u(b[a])}function C(a){a.state_=l;y(a)}function D(a){a.state_=q;y(a)}function e(a){if("function"!==
  typeof a)throw new TypeError("Promise constructor takes a function argument");if(!1===this instanceof e)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this.then_=[];B(a,this)}var f=t.Promise,s=f&&"resolve"in f&&"reject"in f&&"all"in f&&"race"in f&&function(){var a;new f(function(b){a=b});return"function"===typeof a}();"undefined"!==typeof exports&&exports?(exports.Promise=s?f:e,exports.Polyfill=e):"function"==
typeof define&&define.amd?define(function(){return s?f:e}):s||(t.Promise=e);var r="pending",x="sealed",l="fulfilled",q="rejected",E=function(){},A="undefined"!==typeof setImmediate?setImmediate:setTimeout,g=[],m;e.prototype={constructor:e,state_:r,then_:null,data_:void 0,then:function(a,b){var c={owner:this,then:new this.constructor(E),fulfilled:a,rejected:b};this.state_===l||this.state_===q?n(u,c):this.then_.push(c);return c.then},"catch":function(a){return this.then(null,a)}};e.all=function(a){if("[object Array]"!==
  Object.prototype.toString.call(a))throw new TypeError("You must pass an array to Promise.all().");return new this(function(b,c){function h(a){e++;return function(c){d[a]=c;--e||b(d)}}for(var d=[],e=0,f=0,g;f<a.length;f++)(g=a[f])&&"function"===typeof g.then?g.then(h(f),c):d[f]=g;e||b(d)})};e.race=function(a){if("[object Array]"!==Object.prototype.toString.call(a))throw new TypeError("You must pass an array to Promise.race().");return new this(function(b,c){for(var e=0,d;e<a.length;e++)(d=a[e])&&"function"===
typeof d.then?d.then(b,c):b(d)})};e.resolve=function(a){return a&&"object"===typeof a&&a.constructor===this?a:new this(function(b){b(a)})};e.reject=function(a){return new this(function(b,c){c(a)})}})("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this);

/**
 *
 * @param {Object} params
 */
function RealInformation () {
  var _closeBtnImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBM0RCRUQ5NzlDRTcxMUU3OUIxREU3RTI4NDYxREExRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBM0RCRUQ5ODlDRTcxMUU3OUIxREU3RTI4NDYxREExRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEzREJFRDk1OUNFNzExRTc5QjFERTdFMjg0NjFEQTFFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEzREJFRDk2OUNFNzExRTc5QjFERTdFMjg0NjFEQTFFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0QfgswAAAKlJREFUeNqc04EJwjAQBdDz415CHaHFTlK6gugiLdQJAi26jkt4gVPamMslDXwCSXgc3OXgnHsTUcN5UvmqOCMEmDinPQCnhVRQCv0Azgw59FCdCW0Af4DV5SsD+gNCxILOMSCGaJAHhhigISHUp4AU8oXunKvss/YQRhc6qaRLdQ1GFy6cmzVHMIBlNUcqhAyALAiZQBJCAaBCKAQo9teOO4BwIB8fAQYAsnY/P7CM+4sAAAAASUVORK5CYII=';
  var _errorImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MDgzQTYwRjlDMUExMUU3ODZBQjhFRDExODBFRTdCRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3MDgzQTYxMDlDMUExMUU3ODZBQjhFRDExODBFRTdCRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjcwODNBNjBEOUMxQTExRTc4NkFCOEVEMTE4MEVFN0JGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjcwODNBNjBFOUMxQTExRTc4NkFCOEVEMTE4MEVFN0JGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WlpN9wAAAUtJREFUeNqclLtKA1EQhndPxEZwFXwAE62MlYpWQVvBQpC8gO+l9gZBwcJSOy/RwkuXxAtYKYiKhaKr38i/sFnW4NkfPkIyO3/mnJnZ8LJWC3JUhkl9RvrtGa7hCjrZhL7M9xFYggE4g0N4UmwYxmER3mAXHvOMRqEO+3AKceZPHsQRzMAqbMKNBV2qEjPZgpMck7Qsdqxn68r9NQphGQ7yzt5DbeVYbuh0of3QDPzVVG7ZjKq62LiAUazcalJRW4FvT0ytpKIo1eIistzIjD5T7kVUSrr2qmErqiF4MaN7TWygUfDBVIE7M7qAqdRw+sgp99ypYx8ae19NK7fjdNHbMK8y/6sxWIAd80iOY1vcgBVVFvYwsNisnm1okbu237Z4Q7szpzdAS3NSUncqOs47rP/1GkkqW1PChAwH4ctaDLewp+Xumr0fAQYAN3xWQbXTTt4AAAAASUVORK5CYII=';
  var _successImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFODZFMURFQzlDNEIxMUU3QjJGOUNCQzg4OTY4MjAzQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFODZFMURFRDlDNEIxMUU3QjJGOUNCQzg4OTY4MjAzQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU4NkUxREVBOUM0QjExRTdCMkY5Q0JDODg5NjgyMDNDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU4NkUxREVCOUM0QjExRTdCMkY5Q0JDODg5NjgyMDNDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dsQInAAAB/VJREFUeNrsnXuQTmUc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'
  this.islogin = false;
  this.isBindeMobile = false;
  this.isHasBindPhone = false; // 是否已经绑定过手机
  this.tpl = "<div class=\"js_CBP_bindPhone\" style=\"z-index:99999;display: none;font-family: -apple-system-font,Helvetica Neue,sans-serif;background:rgba(0,0,0,.3);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#BF000000,endColorstr=#BF000000);width:100%;height:100%;position:fixed; top: 0; left: 0; \"><div style=\"width:300px;width:320px\\9;box-sizing: content-box;height:220px;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;background:#fff;padding:40px 40px\"><div><div id=\"js_CBP_closeBtn\" style=\"cursor:pointer;width:17px;position:absolute;top:15px;right:15px\"><img style=\"width:100%\" src=\""+ _closeBtnImg +"\" alt=\"closeBtn\"><\/div><\/div><div class=\"js_CBP_bindPhoneModal\"><p style=\"padding-bottom:8px;margin:0;color:#a0a0a0;text-align:center\">为了您的账户安全，请验证手机号码<\/p><div style=\"padding:8px 0\"><input id=\"js_CBP_mobilePhone\" placeholder=\"请输入11位手机号码\" maxlength=\"11\" style=\"width:100%;border:1px solid #93b1e4;	box-sizing: border-box;border-radius:5px;height:40px; line-height: 40px;padding:0 10px;padding:0\\9; text-indent:10px\\9;outline:0\" type=\"tel\"><\/div><div style=\"padding:8px 0\"><input id=\"js_CBP_verificationCode\" placeholder=\"短信验证码\" style=\"width:193px;	box-sizing: border-box;border:1px solid #93b1e4;border-radius:5px;height:40px; line-height: 40px;padding:0 10px;outline:0\" type=\"text\"> <input id=\"js_CBP_verificationButton\" style=\"cursor:pointer;width:86px;	box-sizing: border-box;border-radius:5px;height:40px;float:right;background:#d43d3d;color:#fff;border:none;outline:0\" value=\"获取验证码\" type=\"button\"><\/div><div id=\"js_CBP_codeErrMsgBox\" style=\"opacity:0;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);padding:2% 5% 0 5%;margin:0;font-size:12px\"><img style=\"width:12px;vertical-align:baseline\" src=\""+ _errorImg +"\" alt=\"icon\"> <span id=\"js_CBP_codeErrMsg\" style=\"vertical-align:baseline;color:#d43d3d\"><\/span><\/div><div style=\"padding-top:15px\"><button id=\"js_CBP_submit\" style=\"cursor:pointer;width:100%;border:none;background:#d43d3d;color:#fff;height:40px;border-radius:5px\">提交<\/button><\/div><\/div><div class=\"js_CBP_bindPhoneSuccess\" style=\"display:none;text-align:center\"><img style=\"padding:50px 0 20px 0\" width=\"80px\" src=\""+ _successImg +"\" alt=\"success\"><p style=\"font-size:24px;color:#999;margin:0;padding:0;\">恭喜你，验证成功<\/p><p style='padding: 8px 0; margin: 0; color:#999' id='js_CBP_closeCountDown'></p><\/div><\/div><\/div>\n";
  this.isCountDown = false; // 是否倒计时中
  var _this = this;
  var reg = 'http://reg.tool.hexun.com';

  this.api = {
    checkLogin: reg + '/wapreg/checklogin.aspx?format=json&encode=utf-8',
    checkBindMobile: reg + '/wapreg/checkbindmobile.aspx',
    checkBindWechat: reg + '/wapreg/CheckBindWechat.aspx',
    bindWechat: reg + '/bindweixin.aspx?fromhost=weixin&gourl=' + escape(window.location.href),
    bindMobile: reg + '/wapreg/UserMobile.aspx',
    getCode: reg + '/wapreg/UserMobile.aspx'
  };

  if(jQuery('.js_CBP_bindPhone').length < 1) {
    jQuery('body').append(this.tpl);
  }

}

RealInformation.prototype.init = function (params) {
  var _this = this;
  if(params) {
    _this.islogin = params.isLogin;
  }

  return new Promise( function (resolve, reject) {
    _this.resolve = resolve;
    _this.reject = reject;
    _this.getLoginInfo();
  })

}

RealInformation.prototype.ajax = function (url, data, successCallback) {
  var _this = this;
  jQuery.ajax({
    type:"GET",
    dataType: "jsonp",
    url: url,
    data: data,
    success: function (data) {
      if(successCallback && typeof successCallback === 'function') {
        successCallback.call(this, data)
      }
    },
    error: function (errMsg) {

    }
  })
}

/**
 * 获取登录信息
 */
RealInformation.prototype.getLoginInfo = function () {
  var _this = this;
  this.ajax(this.api.checkLogin,{}, function (data) {
    if(data.islogin == 'True') { // 检测用户已经登录
      _this.loginInfo = data;
      // 检测用户是否绑定手机
      _this.testIsBindeMobile();
    } else {
      // 做登录操作
      _this.doLogin();
    }
  })
}

/**
 * 检测是否绑定手机
 */
RealInformation.prototype.testIsBindeMobile = function () {
  var _this = this;
  this.ajax(this.api.checkBindMobile, {}, function (data) {

    if(data.code == 1 ) {// 用户已经绑定手机
      _this.isBindeMobile = true;
      _this.isHasBindPhone = true;
      _this.resolve(_this);

      // console.log('检测已经绑定手机')
    } else {
      // 显示输入面板
      _this.bindMobileModelShow();
      // 添加绑定事件
      _this.addEvent();
    }

    // // 测试开发 加入没有绑定手机号码

  })
}


RealInformation.prototype.isSupportPlaceholder = function () {
  var input = document.createElement('input');
  return 'placeholder' in input;
}

RealInformation.prototype.placeholder = function(obj, val) {
  var jQueryinput = obj;
  var val = val;
  jQueryinput.attr({value:val});
  jQueryinput.focus(function () {
    if(jQueryinput.val() == val) {
      jQuery(this).attr({value: ''});
    }
  }).blur(function () {
    if(jQueryinput.val() == '') {
      jQuery(this).attr({value:val})
    }
  })
}

RealInformation.prototype.bindMobileModelShow = function () {
  var _this = this;
  var jQuerymodel = jQuery('.js_CBP_bindPhone');
  jQuerymodel.show();
  // 不支持placehOLER填充
  if(!this.isSupportPlaceholder()) {
    jQuerymodel.find('input').not('input[type = "password"]').each(
      function () {
        var self = jQuery(this);
        var val = self.attr('placeholder');
        _this.placeholder(self, val)
      }
    )
  }
}

RealInformation.prototype.bindMobileModelHide = function () {
  jQuery('.js_CBP_bindPhone').hide();
}

RealInformation.prototype.bindSuccessShow = function () {
  jQuery('.js_CBP_bindPhoneModal').hide();
  jQuery('.js_CBP_bindPhoneSuccess').show();

  var s =  3;
  var timer;
  var countdDown = function () {

    timer= setTimeout(function () {
      jQuery('#js_CBP_closeCountDown').text( s +'秒后自动关闭');
      s--;
      if(s >= 0) {
        countdDown ()
      } else {
        jQuery('.js_CBP_bindPhone').fadeOut('fast');
        clearTimeout(timer);
      }
    }, 1000)
  }

  countdDown()
}

/**
 * 绑定手机
 * tel {Number} 手机号
 * code {Number} 验证码
 */
RealInformation.prototype.bindMobile = function (tel, code) {
  var _this = this;
  var params = {
    act: 'binddw',
    mobile: tel,
    code: code,
    client: 'common'
  }
  this.ajax(this.api.bindMobile, params, function (data) {
    if(data.code == 1) { // 绑定成功
      _this.bindSuccessShow();
      _this.isBindeMobile = true;
      setTimeout(function () {
        _this.resolve(_this)
      }, 300)

    } else { // 绑定错误
      _this.codeErrorMsgShow(data.msg);
    }

    // 假设绑定成功
    // _this.bindSuccessShow()
    // setTimeout(function () {
    //   _this.resolve(_this)
    // }, 300)
  })
}

/**
 * 绑定微信
 */
RealInformation.prototype.checkBindWechat = function () {
  var _this = this;
  this.ajax(this.api.checkBindWechat, {}, function (data) {
    if(data.code == 1 ) {// 用户已经绑定微信
      _this.isBindWechat = true;
    } else {
      // 用户没有绑定手机
      location.href = _this.api.bindWechat;
    }
  })
}

/**
 * 登录
 */
RealInformation.prototype.doLogin= function () {
  if(typeof popupLogin === "function") {
    popupLogin()
  } else {
    location.href = 'https://reg.hexun.com/login.aspx?gourl=' + escape(location.href)
  }
}

RealInformation.prototype.getCode = function (phone) {
  var _this = this;
  var params = {
    act: 'sendsms',
    mobile: phone,
    client: 'common'
  }

  if(_this.isCountDown) {
    return false
  }
  _this.isCountDown = true;

  this.ajax(this.api.getCode, params, function (data) {
    if(data.code == 1) {
      _this.codeCountDown()
    } else {
      _this.codeErrorMsgShow(data.msg);
      _this.isCountDown = false;
    }
  })
}

/**
 * 添加事件
 */
RealInformation.prototype.addEvent = function () {
  var _this = this;

  if(typeof jQuery().on === 'function') {
    jQuery(document).on('click', '#js_CBP_closeBtn', function () { // 关闭弹窗
      _this.bindMobileModelHide()
    }).on('click', '#js_CBP_verificationButton', function () {// 添加获取验证码事件
      _this.getCodeBtn = jQuery('#js_CBP_verificationButton');
      var phone = jQuery('#js_CBP_mobilePhone').val();
      // 清空验证码
      if(_this.isSupportPlaceholder()) { // 防止IE8/9 点击获取验证码的时候清楚提示
        jQuery('#js_CBP_verificationCode').val("");
      }

      if(_this.testPhone(phone)) {
        _this.getCode(phone)
      }
    }).on('click', '#js_CBP_submit', function () {
      var phone = jQuery('#js_CBP_mobilePhone').val();
      var code = jQuery('#js_CBP_verificationCode').val();
      // 验证手机号码
      if(_this.testPhone(phone) && _this.testCode(code)) {
        _this.bindMobile(phone, code)
      }
    }).on('input', '#js_CBP_mobilePhone', function () { // 手机input事件
      // 当用户输入时再次验证
      _this.testPhone(jQuery(this).val())
    }).on('input', '#js_CBP_verificationCode', function () {
      // 当用户输入时再次验证
      _this.testCode(jQuery(this).val())
    })

  } else if (typeof jQuery().live === 'function') {
    jQuery('#js_CBP_closeBtn').live('click', '#js_CBP_closeBtn', function () { // 关闭弹窗
      _this.bindMobileModelHide()
    })

    jQuery('#js_CBP_verificationButton').live('click', '#js_CBP_verificationButton', function () {// 添加获取验证码事件
      _this.getCodeBtn = jQuery('#js_CBP_verificationButton');
      var phone = jQuery('#js_CBP_mobilePhone').val();
      // 清空验证码
      if(_this.isSupportPlaceholder()) { // 防止IE8/9 点击获取验证码的时候清楚提示
        jQuery('#js_CBP_verificationCode').val("");
      }

      if(_this.testPhone(phone)) {
        _this.getCode(phone)
      }
    })

    jQuery('#js_CBP_submit').live('click', '#js_CBP_submit', function () {
      var phone = jQuery('#js_CBP_mobilePhone').val();
      var code = jQuery('#js_CBP_verificationCode').val();
      // 验证手机号码
      if(_this.testPhone(phone) && _this.testCode(code)) {
        _this.bindMobile(phone, code)
      }
    })

    jQuery('#js_CBP_mobilePhone').live('input', '#js_CBP_mobilePhone', function () { // 手机input事件
      // 当用户输入时再次验证
      _this.testPhone(jQuery(this).val())
    })

    jQuery('#js_CBP_verificationCode').live('input', '#js_CBP_verificationCode', function () {
      // 当用户输入时再次验证
      _this.testCode(jQuery(this).val())
    })

  }

}

/**
 * 绑定手机
 * phone {Number} 手机号
 * code {Number} 验证码
 */
RealInformation.prototype.testPhone= function (phone) {
  if(!phone) {
    this.codeErrorMsgShow('请输入手机号码');
    return false;
  } else {
    this.codeErrorMsgHide();
    return true;
  }

}

//
RealInformation.prototype.testCode = function (code) {
  if(!code) {
    this.codeErrorMsgShow('请输入验证码');
    return false;
  } else {
    this.codeErrorMsgHide()
    return true;
  }

}

RealInformation.prototype.codeCountDown = function () {
  // console.log('进入短信倒计时')
  var _this = this;
  var s = 60;
  var countDown = function () {
    var timer = setTimeout(function() {
      _this.getCodeBtn.css({background: '#e99e9e'});
      _this.getCodeBtn.val(s + 's');
      if(s > 0) {
        s--;
        countDown()
      } else {
        clearTimeout(timer);
        _this.getCodeBtn.css({background: '#d43d3d'});
        _this.getCodeBtn.val('重新发送');
        _this.isCountDown = false;
      }

    }, 1000);

  }

  countDown()
};

/**
 * 手机号码错误提示
 * str {String} 提示信息
 */
RealInformation.prototype.phoneErrorMsgShow = function (str) {
  jQuery('#js_CBP_phoneErrMsg').text(str);
  jQuery('#js_CBP_phoneErrMsgBox').css({'opacity': '1'})
};

/**
 * 验证码错误提示
 * str {String} 提示信息
 */
RealInformation.prototype.codeErrorMsgShow = function (str) {
  jQuery('#js_CBP_codeErrMsg').text(str);
  jQuery('#js_CBP_codeErrMsgBox').css({'opacity': '1'})
};

RealInformation.prototype.codeErrorMsgHide = function (str) {
  jQuery('#js_CBP_codeErrMsg').text("");
  jQuery('#js_CBP_codeErrMsgBox').css({'opacity': '0'})
};
