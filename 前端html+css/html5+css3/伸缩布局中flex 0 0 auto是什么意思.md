 

### 介绍

在页面开发当中，经常使用到 `flex` 伸缩布局；很多人经常使用到 `flex` 的这一属性， `flex： 0 0 auto` 或者 `flex： 0 1 auto` 或者 `flex： 1 0 auto` 或者 `flex： 0 0 10%` ………… 但是大多数人都不太清楚这一属性的含义，下面主要介绍一下，这一属性的使用方式，以及含义：

### 定义

如上面的 `flex： 0 1 auto` ， 这一属性，flex后面跟了三个值，这三个值实际上是 `flex-grow` ，`flex-shrink` ，`flex-basis` 三个属性的缩写。有关于这三个值的介绍主要如下：

#### `flex-grow：`

属性用于设置或检索弹性盒子的扩展比率（即 `放大比例`）

*   默认值为 `0` ， 当项目有剩余空间时，也默认不会放大
*   若设置值为 `1` ， 则代表当项目有剩余的空间时，会自动放大占有比例
*   若设置值为 `n`， 则代表放大的比例是 `flex-grow` 为 1 的 `n`倍

#### `flex-shrink：`

属性指定了 flex 元素的收缩规则（即 `缩小比例`）

*   默认值为 `1` ， 当项目空间不足时，会默认缩小
*   若设置值为 `0` ，则代表当项目空间不足时，项目默认不会缩小
*   如果所有的项目的 `flex-shrink` 都设置为1； 则代表当项目空间不足时，它们缩小的比例都一致
*   `flex-shrink` 设置为 `n` ， 则代表当项目空间不足时，缩小的比例是 `flex-shrink` 为 1 的 `n`倍

#### `flex-basis：`

属性用于设置或检索弹性盒伸缩基准值（即 `项目占据的主轴的空间`）

*   默认值, `auto`， 长度等于灵活项目的长度
*   如果该项目未指定长度，则长度将根据内容决定
*   设置后，将根据设定的值占据固定的空间长度

### 常使用到的属性解释

1.  `flex: 1`：也就是 `flex-grow: 1`， 经常用于自适应布局；也就是设置父盒子为伸缩布局（`display:flex`），给子盒子设置`flex: 1`；这样做，内容区就会自动放大占满空间
2.  `flex: 0 0 auto`： 等同于 `flex: none`，默认元素有剩余空间也不放大，空间不足时也不能缩小，长度等于灵活项目的长度
3.  `flex: 0 1 auto`：默认有剩余空间也不放大，空间不足时可以缩小，长度等于灵活项目的长度
4.  `flex: 1 0 auto`：默认有剩余空间可以放大，空间不足时不缩小，长度等于灵活项目的长度
5.  `flex: 1 1 auto`：等同于 `flex: auto` ， 默认根据 `width` 和 `height` 属性调整元素的大小，
6.  `flex: 0 0 10%`：默认元素有剩余空间也不放大，空间不足时也不能缩小，长度占据当前项目总空间的`10%`

本文转自 <https://blog.csdn.net/Shivy_/article/details/122361132>，如有侵权，请联系删除。