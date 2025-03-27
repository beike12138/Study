// 获取当前所有的button按钮
const buttons = document.querySelectorAll(".timer__button");
// 获取剩余时间
const timerDisplay = document.querySelector(".display__time-left");
// 获取结束时间
const endTime = document.querySelector(".display__end-time");
let cutdown;
// 计时开始
function startTimer(e) {
  // 获取当前按钮的内的属性值, 并转为换为数字
  const time = parseInt(this.dataset.time);
  console.log(time);
  timer(time);
}

function timer(seconds) {
  // 清除上个定时器
  clearInterval(cutdown);
  // 获取当前时间
  const now = Date.now();
  //计算结束时间
  const then = now + seconds * 1000; // 毫秒
  // 计算剩余时间
  displayTimeLeft(seconds);
  // 计算结束时间
  displayEndTime(then);

  // 定时器
  cutdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(cutdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

// 显示剩余时间
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}
// 显示结束时间
function displayEndTime(timeStamp) {
  // 将结束时间转为时分秒格式
  const end = new Date(timeStamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${hour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}
// 给button添加点击事件
buttons.forEach((button) => button.addEventListener("click", startTimer));
//给表单添加提交事件
document.customForm.addEventListener("submit", function (e) {
  // 阻止表单的默认提交事件
  e.preventDefault();
  // 获取表单的输入框的值
  const mins = this.minutes.value;
  // 验证输入框的值 如果是数字则执行 否则 提示错误
  if (isNaN(parseInt(mins))) {
    alert("请输入数字");
    return;
  }
  timer(mins * 60);
  this.reset();
});
