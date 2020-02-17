# spreadsheet-demo

## [Handsontable](https://handsontable.com/docs/7.3.0/tutorial-introduction.html) vs [SpreadJS](https://demo.grapecity.com.cn/spreadjs/SpreadJSTutorial/home)

| 维度   | Handsontable | SpreadJS |
| ------ | ------------ | -------- |
| 扩展性 | 易           | 难       |
| 性能   | 优           | 优       |
| 文档   | 优           | 中       |
| 功能   | 中           | 强       |

**总结**

Handsontable（简称Hot）相对SpreadJS来说是较新、较轻量的电子表格库。  
Hot是开源的，代码以ES6+风格实现；SpreadJS不开源（企业授权可获得源码），从文档demo来看，应该是较旧的代码风格，API定义与JS流行风格差异较大。  

SpreadJS时间较长，基本上对标Excel，功能比Hot丰富。比如对[公式](https://demo.grapecity.com.cn/spreadjs/SpreadJSTutorial/features/calculation/basic-functions/purejs)（Hot 处于alpha版，不支持自定义）、[分组](https://demo.grapecity.com.cn/spreadjs/SpreadJSTutorial/features/outline/basic-group/purejs)（Hot不支持）、[图表](https://demo.grapecity.com.cn/spreadjs/SpreadJSTutorial/features/chart/basic-chart/purejs)（Hot需要继承第三方图表）的支持。  

Hot是通过html的table标签实现的，SpreadJS则通过canvas渲染。  
在自定义方面Hot比SpreadJS更加简单，因为使用html标签来渲染，开发者可以复用页面开发经验。    
性能上差不多，只要关闭自动调整宽高，Hot只渲染可视窗口的dom节点。  

授权方式及价格区别，[Hot](https://handsontable.com/pricing)、[SpreadJS](https://www.grapecity.com.cn/developer/spreadjs#price)。   

**性能**

以下是100列，分别一万、十万、一百万行表格渲染所消耗的时间(MacBook， 2.2 GHz Intel Core i7，Chrome 80)：

Hot关闭行列自动宽高：  
1e4行: 220ms  
1e5行: 235ms  
1e6行: 320ms  

SpreadJS：  
1e4行: 200ms  
1e5行: 200ms  
1e6行: 330ms  

## OT vs CRDT

### OT(Operational Transformation)
1989年被提出，理论与工程实践都经历了较长时间，本质是将每个用户的所有操作分解为原子操作、调整顺序，发送给其他用户。  
但因太多的边缘case，OT算法可能导致不同用户无法收敛到相同状态。

### CRDT(Conflict-free replicated data type)
2006年左右开始出现，2011年正式定义，并快速应用与分布式场景。基本原理图解

### 对比
OT更传统，目前在文本协同编辑领域应用更多，但更加复杂，对其理论研究的应用已到达极限。  
CRDT更新更简单，非常快速地应用于分布式数据同步场景。

对比而言：OT用复杂性换取了捕获意图的能力。CRDT的复杂度较低，但只能保证所有客户端都使用相同的数据，但是该数据可能不是预期的结构。（可演示的例子）

参考：[To OT or CRDT, that is the question](https://www.tiny.cloud/blog/real-time-collaboration-ot-vs-crdt/)

## CRDT算法js实现对比

Automerge 用于共享状态、复杂数据结构，API简单易用。  
Yjs专为协同编辑文本、富文本而设计，并在性能方面做了优化，大型文档共享时在性能方面占优势。  

yjs作者：https://github.com/yjs/yjs/issues/145  
性能对比：https://github.com/dmonad/crdt-benchmarks  