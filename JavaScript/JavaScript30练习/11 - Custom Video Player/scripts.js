//获取所有元素
const player = document.querySelector('.player');
//获取视频元素
const video = player.querySelector('.viewer');
//获取进度条
const progress = player.querySelector('.progress');
//获取进度条滑块
const progressBar = player.querySelector('.progress__filled');
//获取播放和暂停按钮
const toggle = player.querySelector('.toggle');
//获取所有的前进和后退按钮
const skipButtons = player.querySelectorAll('[data-skip]');
//获取所有的控制键 音量控制键 播放速度键
const ranges = player.querySelectorAll('.player__slider');

//视频的播放与暂停
function togglePlay() {
    //判断视频是否在播放
    const method = video.paused ? 'play' : 'pause';
    console.log(method);
    //调用play和pause方法 
    // 使用video[method]() 替换 video.paly() 和video.pause()
    video[method]();    
}
//播放按钮的切换
function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
}
//控制进度条
function progressHandler() {
    //进度条百分比 当前时间 / 总时间 * 100
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}
//控制视频前进和后退
function skip() {
    //获取当前data-skip属性的值
    vedio.currentTime += parseFloat(this.dataset.skip);

}
//控制音量和播放速度
function handleRangeUpdate() {
    //获取当前属性的值
    video[this.name] = this.value;
}
//进度条控制视频播放位置
function scrub(e) {
    //获取点击位置的百分比
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    //设置当前播放时间
    video.currentTime = scrubTime;
}

//播放和暂停按钮的切换由视频的播放和暂停事件触发
//视频被点击触发video的播放和暂停
video.addEventListener('click', togglePlay);
//视频播放时触发播放按钮的切换
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
//视频进度控制进度条
video.addEventListener('timeupdate', progressHandler);

//播放按钮的切换由播放按钮的点击事件触发
//点击播放按钮 => 视频播放或暂停 => 播放按钮的切换
toggle.addEventListener('click', togglePlay);

//给所有前进后退按钮绑定事件
skipButtons.forEach(button => button.addEventListener('click', skip))

//给音量和视频速度控制键绑定改变和鼠标移动事件
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

// 拖动和点击进度条 控制视频播放位置
// 当鼠标在进度条上按下并移动时触发函数
let mousedown = false;
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));





















