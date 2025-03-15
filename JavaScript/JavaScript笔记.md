# JavaScript笔记

## 字符串

### == 和 === 问题

new 关键字使代码复杂化。也可能产生一些意想不到的结果：
当使用 == 相等运算符时，相等字符串是相等的：

```javascript
var x = "Bill";             
var y = new String("Bill");
// (x == y) 为 true，因为 x 和 y 的值相等
```

当使用 `===` 运算符时，相等字符串是不相等的，因为 `===` 运算符需要类型和值同时相等。

```javascript
var x = "Bill";             
var y = new String("Bill");

// (x === y) 为 false，因为 x 和 y 的类型不同（字符串与对象）
```

甚至更糟。对象无法比较：

``` javascript
var x = new String("Bill");             
var y = new String("Bill");
// (x == y) 为 false，因为 x 和 y 是不同的对象

var x = new String("Bill");             
var y = new String("Bill");
// (x === y) 为 false，因为 x 和 y 是不同的对象
```

### 字符串的方法和属性















































