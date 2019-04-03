# 一个字典应用

![img](./theme/look.gif)
### 制作背景： 
- 查阅相关技术文档时常需要查询单词释义，那就得打开谷歌翻译，时间久了就依赖上了
- 所以呢，我自己写一个学习工具：字典

## 由于数据接口丢失，词典项目暂时停止,待我自己抓一份数据

### 数据来源：
- 来自一位前端前辈的馈赠 
- 当然，在V3.0的字典里边会用我自己写的一个爬虫[基于Node.js]
- 在此感谢 @xieranmaya 前辈数据方面的支持

### 字典内容：
- 单词释义
- 单词发音(E & A)
- 例句
- 没有广告

### 展示：
V_1.0 URL: http://sliver.site/dictionary.github.io/index.html  
V_2.0 URL: http://sliver.site/dictionary.github.io/dictionary.html  
v-2.1 URL: https://github.com/Yinlongcoding/dictionary.github.io
### 迭代过程：
每一天的迭代内容我都会在 update.md 里声明 
url：http://sliver.site/dictionary.github.io/update.md

### 技术栈：
- Vue.js       
- CSS(3)       
- HTML(5)    

### 关于兼容
* "大佬"-IE
    - 兼容到IE9(其他我不去关心，某猫都宣布 IE8被阉了)
    - “优雅降级”-某些CSS3的特性并不支持，所以有些情况下不会有特别炫酷的样式
    - 还是由衷的希望使用最新版的Chrome来观看页面效果
* 360之类的
    - 尽力兼容，有时候所谓的双核并非好事

### 关于优化
* V2.0 已完成
    - 优化代码
    - 去除备选单词列表
    - 页面整体布局改动
    - 解决关于输入框内每添加(删除)一个字符时频繁触发请求造成性能问题  
    - 添加响应式支持移动端使用
    - 添加夜间模式
    - 字典内部包含我送给用户的彩蛋内容，待用户自行发现。

### 总结一下：
- 善于发现问题和解决问题才是优化的最终目的，页面性能的提升才是需求的源泉。
- 继承CommonJs的思想，webpack打包是最终的走向
