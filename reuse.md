## v2.0  迭代分析

* 基于 vue.js component 
    - 可复用性
        + 什么是可复用性？
            * 我简单理解为我可能要用到多次的代码只写一遍，后面用到时直接调用。
        + 我的结构有哪些需要用到 component ?
            * 针对 v1.0的代码我分析了一下，需要复用情况不多
            * 集中在，单词备选栏（版本移除），单词音标，释义，例句及历史记录方面
            * 其他块多次使用的如前面所讲的，故为每个需要用到的区块都写一个模块
            * 添加 phonetic[音标]、pronunciation[发音]、example[例句]、history(历史查阅) 4个模块
    - 数据如何传输
        + props :['message'...]
    - 代码量 
        + 总体代码量会减少，但并不明显，待后期改进

* 3.18:
    - 对数据进行分析发现，examples和释义在同一个对象中，这样给模块书写造成一定的麻烦
    - 尝试多次后，暂时决定取消一些模块

* 3.19: 
    - 关于history模块，在编写模块时，如果要使用components会出现很多无用的div 嵌套，显然这并不符合语义化，
    - 所以，关于历史模块继续沿用 v1.0 模式，创建数组，遍历。
