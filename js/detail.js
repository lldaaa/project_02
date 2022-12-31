// 实现商品小图切换
var bottomImgPrev = document.querySelector('.bottom_img .prev')
var bottomImgNext = document.querySelector('.bottom_img .next')
var bottomImgUl = document.querySelector('.small_imgs ul')

var mainImg = document.querySelector('.main_img img')
var bottomImgLis = document.querySelectorAll('.small_imgs li')
let imgsrc = mainImg.src


bottomImgPrev.onclick = function () {
    bottomImgUl.style.left = '0'
}
bottomImgNext.onclick = function () {
    bottomImgUl.style.left = '-116px'
    console.log('ii')
}
// 图片切换
for (let i = 0; i < bottomImgLis.length; i++) {
    bottomImgLis[i].onmouseover = function () {
        // console.log(bottomImgLis[i].children.src)
        mainImg.src = bottomImgLis[i].children[0].src
    }
    bottomImgLis[i].onmouseout = function () {
        mainImg.src = imgsrc
    }
}

// 放大图片
let boximg = document.querySelector('.main_img')
let boximgFang = document.querySelector('.fang')
let boximgImg = document.querySelector('.bigimg')

let bigimgbox = document.querySelector('.bigimg')
let bigimg = document.querySelector('.bigimg img')
console.log(bigimgbox.pageX, bigimg.clientWidth)
boximg.onmouseover = function () {
    boximgFang.style.display = 'block'
    boximgImg.style.display = 'block'
}
boximg.onmouseout = function () {
    boximgFang.style.display = 'none'
    boximgImg.style.display = 'none'

}
// 给boximg添加鼠标移动事件
boximg.onmousemove = function (e) {
    // 获取鼠标距离文档流顶部/左侧的距离
    let pagey = e.pageY
    let pagel = e.pageX
    // 获取boximg距离文档流顶部/左侧的距离
    let offsettop = boximg.offsetTop
    let offsetleft = boximg.offsetleft
    // 获取黄色小块的高度/宽度的一半
    let h = boximgFang.clientHeight / 2
    let w = boximgFang.clientWidth / 2
    // 获取小黄块的移动高度/宽度
    let top = pagey - offsettop - h
    let left = pagey - offsettop - w

    // 限制小黄块移动范围
    if (top < 0) {
        top = 0
    } else if (top > boximg.clientHeight - boximgFang.clientHeight) {
        top = boximg.clientHeight - boximgFang.clientHeight
    }
    if (left < 0) {
        left = 0
    } else if (left > boximg.clientWidth - boximgFang.clientWidth) {
        left = boximg.clientWidth - boximgFang.clientWidth
    }

    boximgFang.style.top = top + 'px'
    boximgFang.style.left = left + 'px'

    // 比例
    let y = top / (boximg.clientHeight - boximgFang.clientHeight)
    let x = left / (boximg.clientWidth - boximgFang.clientWidth)
    let yy = y * (800 - 540)
    let xx = x * (800 - 540)
    bigimg.style.top = -yy + 'px'
    bigimg.style.left = -xx + 'px'
}

// 实现购物车数量的改变
let reduce=document.querySelector('.reduce')
let add=document.querySelector('.add')
let buyNumber=document.querySelector('.buy_number')
add.onclick=function(){
    buyNumber.value++
    if(buyNumber.value>1){
        reduce.className='reduce'
    }
}
reduce.onclick=function(){
    buyNumber.value--
    if(buyNumber.value<=1){
        buyNumber.value=1
        reduce.className='reduce disable'
    }
}
