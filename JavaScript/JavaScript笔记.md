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

## JS控制CSS样式失效问题

```HTML
    <style>
        canvas {
            width: 800px;
            height: 800px;
            border: 1px solid black;
            background-color: pink;
        }
    </style>
    <canvas id="draw"></canvas>
```
```JavaScript
    const canvas = document.querySelector('#draw');
            // console.log(canvas);
            console.log(canvas.style.width);
            console.log(canvas.style.height);

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            console.log(canvas.width);
            console.log(canvas.height);
```


根据你的代码和问题，`console.log(canvas.style.width)` 打印不出 canvas 宽度的原因如下：
### 思考
好的，我现在需要解决用户的问题，用户在代码中使用`console.log(canvas.style.width)`打印不出canvas的宽度。首先，我需要仔细分析用户提供的代码和上下文。 首先看用户提供的HTML文件test.html。在CSS部分，canvas的样式被设置为width:800px和height:800px。然后在JavaScript中，用户尝试通过`canvas.style.width`来获取宽度，但输出为空。 用户的问题是，为什么`console.log(canvas.style.width)`打印不出宽度。我需要回忆一下HTML Canvas的属性和样式的关系。Canvas元素有两个相关的属性：一个是HTML属性width和height，另一个是CSS样式中的width和height。这两者是不同的。 HTML的canvas元素的width和height属性是实际的像素尺寸，决定了画布的坐标系统。而CSS样式中的width和height是控制元素在页面中的显示尺寸，可能改变元素的大小，但不会影响实际的像素比例。 在用户的代码中，他们先设置了CSS样式中的width和height为800px，这会影响canvas的显示大小。然后在JavaScript中，他们通过`canvas.width = window.innerWidth`和`canvas.height = window.innerHeight`修改了canvas的HTML属性，这会改变实际的像素区域，但不会影响CSS样式中的值。 用户使用`canvas.style.width`来获取的是CSS样式中的width值，而不是HTML属性的值。因此，当用户在JavaScript中修改了HTML属性的width后，CSS样式中的width并没有被自动更新，仍然保持原来的800px，或者如果用户没有显式设置的话可能为空。 但根据用户提供的代码，CSS样式中确实设置了width:800px，所以`canvas.style.width`应该返回"800px"。然而，用户提到打印不出来，可能是因为在代码中，用户可能在设置HTML属性之后，没有正确获取到CSS的样式值，或者存在其他问题。 另外，用户在代码中执行了`canvas.width = window.innerWidth`，这会改变HTML属性的width，但不会影响CSS的style.width。因此，如果用户想获取HTML属性的width，应该直接访问canvas.width，而不是canvas.style.width。 可能用户混淆了HTML属性和CSS样式。用户可能想获取的是HTML属性的宽度，但错误地使用了style.width。因此，正确的做法应该是： - 要获取HTML属性的宽度，使用canvas.width。 - 要获取CSS样式中的宽度，使用canvas.style.width，但要注意这可能返回空字符串，如果样式是通过CSS类或外部样式表设置的，而不是直接设置在元素的style属性上。 在用户的代码中，CSS样式是通过内部样式表设置的，而不是直接设置在canvas元素的style属性上，因此`canvas.style.width`可能返回空字符串，因为样式是来自外部样式表，而不是元素的内联style属性。 因此，用户的问题可能在于他们试图通过`canvas.style.width`来获取通过CSS样式表设置的宽度，而实际上需要使用window.getComputedStyle来获取计算后的样式。 总结问题原因： 1. 用户混淆了HTML属性和CSS样式属性。 2. 使用`canvas.style.width`只能获取元素内联样式中的width值，而用户的样式是通过内部样式表设置的，因此需要使用getComputedStyle。 解决方案： - 如果想获取HTML属性的宽度，使用canvas.width。 - 如果想获取CSS计算后的宽度，使用`window.getComputedStyle(canvas).width`。 现在需要将这些分析整理成用户容易理解的回答，并给出正确的代码示例。

---

### **核心问题：HTML 属性与 CSS 样式的区别**
1. **HTML 属性（`canvas.width`/`canvas.height`）**  
   - 定义 canvas 的**实际像素区域**（内部坐标系统的大小）。  
   - 通过 `canvas.width = 800` 设置。

2. **CSS 样式（`canvas.style.width`）**  
   - 控制 canvas 元素在页面中的**显示尺寸**，通过 CSS 样式表或内联样式设置。  
   - `canvas.style.width` 仅获取元素内联的 `style="width: ..."` 属性值，**不包括外部样式表或 `<style>` 标签中的样式**。

---

### **你的代码问题分析**
#### 1. **CSS 样式未设置为内联样式**
   ```css
   canvas {
     width: 800px;
     height: 800px;
     /* 其他样式... */
   }
   ```
   - **问题**：  
     这是通过 CSS 类或样式表设置的，**不会直接反映在 `canvas.style.width` 中**。  
     `canvas.style.width` 只读取元素本身的 `style` 属性（如 `<canvas style="width: 800px">`），而非外部样式。

#### 2. **JavaScript 修改了 HTML 属性**
   ```javascript
   canvas.width = window.innerWidth; // 修改 HTML 属性
   ```
   - 这会改变 canvas 的实际像素区域，但 **不会影响 CSS 样式**。

#### 3. **`console.log(canvas.style.width)` 的实际值**
   - 如果 CSS 样式是通过 `<style>` 标签或外部样式表设置的，`canvas.style.width` **返回空字符串**，因为样式未直接写在元素的 `style` 属性中。

---

### **解决方案**
#### 1. **获取 CSS 计算后的样式**
   使用 `window.getComputedStyle()` 获取元素最终的 CSS 样式：
   ```javascript
   console.log(getComputedStyle(canvas).width); // 输出 "800px"
   console.log(getComputedStyle(canvas).height); // 输出 "800px"
   ```

#### 2. **获取 HTML 属性的宽度**
   直接访问 `canvas.width` 和 `canvas.height`：
   ```javascript
   console.log(canvas.width); // 输出 window.innerWidth 的值
   console.log(canvas.height); // 输出 window.innerHeight 的值
   ```

#### 3. **修正代码示例**
   ```javascript
   ;(function () {
     const canvas = document.querySelector('#draw');
     const ctx = canvas.getContext("2d");

     // 获取 HTML 属性的宽度
     console.log('HTML 属性 width:', canvas.width); // 初始值为默认 300（未设置时）

     // 设置 HTML 属性的宽度和高度
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;

     // 获取 CSS 计算后的样式
     console.log('CSS 样式 width:', getComputedStyle(canvas).width); // 输出 "800px"
     console.log('HTML 属性 width:', canvas.width); // 输出 window.innerWidth 的值

     // 其他代码...
   })();
   ```

---

### **关键点总结**
| **方法**                   | **获取的内容**                     | **适用场景**                   |
| -------------------------- | ---------------------------------- | ------------------------------ |
| `canvas.width`             | HTML 属性的像素区域宽度            | 绘制操作、坐标计算             |
| `canvas.style.width`       | 元素内联的 `style="width"` 值      | 直接修改元素的内联样式         |
| `getComputedStyle().width` | CSS 最终渲染后的宽度（含所有样式） | 获取元素在页面中的实际显示尺寸 |

---

### **完整修复后的代码**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    canvas {
      width: 800px;
      height: 800px;
      border: 1px solid black;
      background-color: pink;
    }
  </style>
</head>
<body>
  <canvas id="draw"></canvas>
  <script>
    ;(function () {
      const canvas = document.querySelector('#draw');
      const ctx = canvas.getContext("2d");

      // 获取 HTML 属性的初始值（默认 300×150）
      console.log('初始 HTML width:', canvas.width);
      console.log('初始 HTML height:', canvas.height);

      // 设置 HTML 属性的宽度和高度
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // 获取 CSS 计算后的样式（来自样式表）
      console.log('CSS 宽度:', getComputedStyle(canvas).width); // 输出 "800px"
      console.log('CSS 高度:', getComputedStyle(canvas).height); // 输出 "800px"

      // 获取 HTML 属性的新值
      console.log('修改后的 HTML width:', canvas.width); // 输出窗口宽度
      console.log('修改后的 HTML height:', canvas.height); // 输出窗口高度

      // 其他代码...
    })();
  </script>
</body>
</html>
```

---

### **最终结论**
- **`canvas.style.width` 无法获取 CSS 样式表设置的值**，需改用 `getComputedStyle()`。
- **HTML 属性（`canvas.width`）和 CSS 样式（`width`）是两个独立的概念**，需根据需求选择合适的获取方式。

[Js：DOM中的样式（包含行内样式、滚动区、可见区等）](https://blog.csdn.net/Y1914960928/article/details/145288336?spm=1001.2101.3001.6650.3&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EYuanLiJiHua%7EPosition-3-145288336-blog-140862685.235%5Ev43%5Epc_blog_bottom_relevance_base5&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EYuanLiJiHua%7EPosition-3-145288336-blog-140862685.235%5Ev43%5Epc_blog_bottom_relevance_base5&utm_relevant_index=4)











































