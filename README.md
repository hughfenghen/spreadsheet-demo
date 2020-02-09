# [Handsontable](https://handsontable.com/docs/7.3.0/tutorial-introduction.html) vs [SpreadJS](https://demo.grapecity.com.cn/spreadjs/SpreadJSTutorial/home)

| 维度   | Handsontable | SpreadJS |
| ------ | ------------ | -------- |
| 扩展性 | 易           | 难       |
| 性能   | 优           | 优       |
| 文档   | 优           | 中       |
| 功能   | 中           | 强       |

## 总结

Handsontable（简称Hot）相对SpreadJS来说是较新、较轻量的电子表格库。  
Hot是开源的，代码以ES6+风格实现；SpreadJS不开源（企业授权可获得源码），从文档demo来看，应该是较旧的代码风格，API定义与JS流行风格差异较大。  

SpreadJS时间较长，基本上对标Excel，功能比Hot丰富。比如对[公式](https://demo.grapecity.com.cn/spreadjs/SpreadJSTutorial/features/calculation/basic-functions/purejs)（Hot 处于alpha版，不支持自定义）、[分组](https://demo.grapecity.com.cn/spreadjs/SpreadJSTutorial/features/outline/basic-group/purejs)（Hot不支持）、[图表](https://demo.grapecity.com.cn/spreadjs/SpreadJSTutorial/features/chart/basic-chart/purejs)（Hot需要继承第三方图表）的支持。  

Hot是通过html的table标签实现的，SpreadJS则通过canvas渲染。  
在自定义方面Hot比SpreadJS更加简单，因为使用html标签来渲染，开发者可以复用页面开发经验。    
性能上差不多，只要关闭自动调整宽高，Hot只渲染可视窗口的dom节点。  

授权方式及价格区别，[Hot](https://handsontable.com/pricing)、[SpreadJS](https://www.grapecity.com.cn/developer/spreadjs#price)。   

## 性能

以下是100列，分别一万、十万、一百万行表格渲染所消耗的时间(MacBook， 2.2 GHz Intel Core i7，Chrome 80)：

Hot关闭行列自动宽高：  
1e4行: 220ms  
1e5行: 235ms  
1e6行: 320ms  

SpreadJS：  
1e4行: 200ms  
1e5行: 200ms  
1e6行: 330ms  