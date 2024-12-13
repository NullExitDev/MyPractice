window.addEventListener('load', function () {
    var left = document.querySelector('.left')
    var right = document.querySelector('.right')
    var container = document.querySelector('.container')
    var ul = document.querySelector('ul')
    var conWidth = container.offsetWidth
    //动画
    function animate(obj, target, callback) {
        obj.timer = setInterval(function () {
            var step = (target - obj.offsetLeft) / 10
            step = step > 0 ? Math.ceil(step) : Math.floor(step)
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer)
                callback && callback()
            }
            obj.style.left = obj.offsetLeft + step + 'px'
        }, 15)
    }

    container.addEventListener('mouseenter', function () {
        left.style.display = 'block'
        right.style.display = 'block'
        clearInterval(autoTimer)
        autoTimer = null
    })

    container.addEventListener('mouseleave', function () {
        left.style.display = 'none'
        right.style.display = 'none'
        autoTimer = setInterval(function () {
            right.click()
        }, 3000)
    })
    var first = ul.children[0].cloneNode(true)
    ul.appendChild(first)
    var flag = true
    var num = 0
    right.addEventListener('click', function () {
        if (flag) {
            flag = false
            if (num == ul.children.length - 1) {
                ul.style.left = 0
                num = 0
            }
            num++
            animate(ul, -num * conWidth, function () {
                flag = true
            })
        }
    })

    left.addEventListener('click', function () {
        if (flag) {
            flag = false
            if (num == 0) {
                num = ul.children.length - 1
                ul.style.left = -num * conWidth + 'px'
            }
            num--
            animate(ul, -num * conWidth, function () {
                flag = true
            })
        }
    })
    var autoTimer = setInterval(function () {
        right.click()
    }, 3000)

})