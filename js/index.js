// A.模糊查询
// 1.获取元素
var keyWord = document.querySelector('.keyword');
var searchHelper = document.querySelector('.search_help')
// 2.定义数组,存储搜索的内容
var searchChArr = ['小米手机', '华为手机', '苹果手机', '小米电视', '苹果耳机', '蓝牙耳机', '蓝牙手表']
// 3.给输入框绑定内容改变事件
keyWord.oninput = function () {
    // 先清空内容
    searchHelper.innerHTML = ''
    for (var i = 0; i < searchChArr.length; i++) {
        if (searchChArr[i].indexOf(keyWord.value) != -1) {
            searchHelper.innerHTML += '<p>' + searchChArr[i] + '</p>'
            searchHelper.style.display = 'block'
        }
    }
}
keyWord.onblur = function () {
    searchHelper.style.display = 'none'
}

// B.轮播图的切换
let img = document.querySelector('.img')
let slideLeft = document.querySelector('.slide_left')
let slideRight = document.querySelector('.slide_right')
let slide = document.querySelector('.slide')
let slideLi = document.querySelectorAll('.slide li')
let imgArr = ['silde1.avif', 'silde2.avif', 'silde3.jpg', 'silde4.jpg', 'silde5.jpg', 'silde6.jpg', 'silde7.jpg', 'silde8.jpg']
let count = 0
// 定义函数，用来切换图片路径
function cutImg() {
    img.src = './images/' + imgArr[count]
    // 切换到某一张图的时候 某一个小圆点高亮
    for (let j = 0; j < slideLi.length; j++) {
        slideLi[j].className = ''
    }
    slideLi[count].className = 'active'

}

// 设置定时器
let timer = setInterval(function () {
    count++
    if (count > imgArr.length - 1) {
        count = 0
    }
    cutImg()
}, 2000)

// 点击下一张
slideRight.onclick = function () {
    count++
    if (count > imgArr.length - 1) {
        count = 0
    }
    cutImg()
}
// 点击上一张
slideLeft.onclick = function () {
    count--
    if (count < 0) {
        count = imgArr.length - 1
    }
    cutImg()
}
// 鼠标滑入滑出轮播图停止/播放
slide.onmouseover = function () {
    clearInterval(timer)
}
slide.onmouseout = function () {
    timer = setInterval(function () {
        count++
        if (count > imgArr.length - 1) {
            count = 0
        }
        cutImg()
    }, 2000)
}
// 轮播图小点随着图片闪动
for (let i = 0; i < slideLi.length; i++) {
    slideLi[i].onclick = function () {
        count = i
        cutImg()
    }
}

// C.实现楼层的定位切换
var header = document.querySelector('.header')
var banner = document.querySelector('.banner')
var elevator = document.querySelector('.elevator')

var search = document.querySelector('.search')
var searchLogo = document.querySelector('.search_logo')
var form = document.querySelector('.search .form')
// 实现楼层滚动，文字便是的效果
let items = document.querySelectorAll('.content .item')
let elevatorA = document.querySelectorAll('.elevator a')

// 楼层数组 数组中放四个数
let itemsArr = []
let base = header.offsetHeight + banner.offsetHeight
for (let i = 0; i < items.length; i++) {
    base = base + items[i].offsetHeight
    itemsArr.push(base)
}
// 清空楼层文字效果函数
var cleanColor = function () {
    for (var i = 0; i < elevatorA.length; i++) {
        elevatorA[i].style.color = ''
    }
}
// 获取窗口滚动事件
document.onscroll = function () {
    // 获取到滚动条垂直方向滚动了多少
    var top = document.documentElement.scrollTop || document.body.scrollTop
    // 获取到header/banner的高度 
    // 获取：元素 内容+padding+border 区域的尺寸
    let headerHeight = header.offsetHeight
    let bannerHeight = banner.offsetHeight
    if (top >= headerHeight + bannerHeight) {
        // 滚动到一定位置 让楼层变成固定定位
        elevator.className = 'elevator elevator_fix'

        // D.吸顶效果
        search.className = 'search search_fix'
        search.style.height = '50px'
        searchLogo.style.display = 'block'
        form.style.top = '8px'
    } else {
        elevator.className = 'elevator'
        search.className = 'search'
        search.style.height = '50px'
        searchLogo.style.display = 'none'
        form.style.top = '15px'
    }
    if (top < headerHeight + bannerHeight) {
        cleanColor()
    } else if (top >= headerHeight + bannerHeight && top < itemsArr[0]) {
        cleanColor()
        elevatorA[0].style.color = 'red'
    } else if (top >= itemsArr[0] && top < itemsArr[1]) {
        cleanColor()
        elevatorA[1].style.color = 'red'
    } else if (top >= itemsArr[1] && top < itemsArr[2]) {
        cleanColor()
        elevatorA[2].style.color = 'red'
    } else if (top >= itemsArr[2]) {
        cleanColor()
        elevatorA[3].style.color = 'red'
    }
}

// 缓慢滑动图片效果
var hmBox = document.querySelector('.ms2_center_right div')
hmBox.innerHTML += hmBox.innerHTML
let left = parseInt(getComputedStyle(hmBox).left)
console.log(left)
function hmMove() {
    left -= 10
    if (left <= -hmBox.clientWidth / 2) {
        left = 0
    }
    hmBox.style.left = left + 'px'
}
let hmTimer = setInterval(hmMove, 50)
// hmBox.onmouseover=function(){
//     clearInterval(hmTimer)
// }
// 鼠标放进去

let ul1lis = document.querySelectorAll('.ul1 li')
let ul12is = document.querySelectorAll('.ul2 li')
console.log(ul12is, ul1lis)
for (let i = 0; i < ul1lis.length; i++) {
    ul1lis[i].onmouseover = function () {
        for (let j = 0; j < ul1lis.length; j++){
            ul12is[i].style.display='none'
        }
        ul12is[i].style.display='block'
    }
    ul1lis[i].onmouseout = function () {
        for (let j = 0; j < ul1lis.length; j++){
            ul12is[j].style.display='none'
        }
    }
}

