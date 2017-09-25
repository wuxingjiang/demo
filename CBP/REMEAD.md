# 引入方式
  依赖jquery
  PC 引用checkphone.js
  H5 引用checkphoneh5.js
<pre>
  <code>
   // PC和H5端的JS文件中使用
    
    var checkPhone = new RealInformation();
    checkPhone.init({
      isLogin: true  // 是否跳过登录验证
    }).then(function() {
      // 手机绑定成功 执行的操作
    })
  </code>
</pre>


  