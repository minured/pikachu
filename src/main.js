import str from "./pikachuCSS.js"

//面向对象的优化
const player = {
    //基本属性
    n: 0, //是索引,到不了length
    delay: 20,
    interval_id: undefined,
    playing : false,
    strHTML : "",
    strLen : str.length,

    ui: {
        codeShow : document.querySelector(".codeShow"),
        piKaChuCSS : document.querySelector(".pikachucss")
    },

    //一般一个对象有一个初始化方法
    init: () => {
        console.log(`字符总长度: ${player.strLen}`)
        player.play() 
        player.bindEvents()
    },
    events: {
        "#btnPause" : "pause",
        "#btnPlay": "play",
        "#btnSlow": "slow",
        "#btnNormal" : "normal",
        "#btnFast": "fast"
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {   //for in 会遍历到对象原型的属性
                let value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    writeStr : () => {
        //n 大于长度，清除interval
        if (parseInt(player.n) === str.length -1 ) {
            console.log(`播放完成, n: ${player.n}`)
            window.clearInterval(player.interval_id)
            player.playing = false
        }
    
        //转成HTML的换行和空格
        if (str[player.n] === "\n") {
            player.strHTML += "<br>"
        } else if(str[player.n] === " "){
            player.strHTML += "&nbsp"
        } else {
            player.strHTML += str[player.n]
        }
    
        //替换页面内容
        player.ui.codeShow.innerHTML = player.strHTML
        player.ui.piKaChuCSS.innerHTML = str.substr(0, player.n+1)
    
        
        //注意，可滚动高度还要计算 滚动条本身的宽度，这里先不计算，
        player.ui.codeShow.scrollTop = player.ui.codeShow.scrollHeight;
        player.n += 1
    },
    play : () => {
        //是否在播放
        if (player.playing === false) {
            //是否播放完
            if (player.n < player.strLen) {
                player.interval_id = setInterval(player.writeStr, player.delay)
                player.playing = true
            } else {
                console.log('已播放完，再点一次重新开始播放')
                //重置
                player.strHTML = ""
                player.ui.piKaChuCSS.innerHTML = ""
                player.n = 0
            }
        } else {
            console.log(`已经在播放,id: ${player.interval_id}`)
        }
    },
    pause : () => {
        window.clearInterval(player.interval_id)
        player.playing = false
    },
    slow : () => {
        player.pause()
        player.delay = 50
        player.play()
    },
    normal : () => {
        player.pause()
        player.delay = 20
        player.play()
    },
    fast : () => {
        player.pause()
        player.delay = 0
        player.play()
    }
}
//初始化
player.init()






 

