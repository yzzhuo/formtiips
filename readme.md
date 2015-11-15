###自定义插件formtoolltip的使用方法

+ 将提示规则写入TipRule.json文件中，格式参考默认文件：每个输入框的name对应提示规则的name。

+ 用js调用插件，如：    
     $.getJSON("../js/TipRule.json",function(data) {
     $(":input").tiptool(data);//对所有input使用插件，但它只会对有提示规则的输入框起作用
  });
