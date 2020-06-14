// import str from './pikachuCSS'

class CSSPlayer {
  //
  constructor(codeShowSelector, drawSelector, str) {
    this.ui = {
      codeShow: document.querySelector(codeShowSelector),
      draw: document.querySelector(drawSelector)
    }
    this.str = str
    this.n = 0
    this.delay = 20
    this.interval_id = undefined
    this.playing = false
    this.strHTML = ''
    this.CSSLen = this.str.length
    this.events = {
      '#btnPause': 'pause',
      '#btnPlay': 'play',
      '#btnSlow': 'slow',
      '#btnNormal': 'normal',
      '#btnFast': 'fast',
    }
  }
  init() {

    this.play()
    this.bindEvents()
  }

  bindEvents() {

    for (let key in this.events) {
      if (this.events.hasOwnProperty(key)) {
        //for in 会遍历到对象原型的属性
        let value = this.events[key]
        //onclick=fn中，this指的是元素本身，故用bind绑定this
        document.querySelector(key).onclick = this[value].bind(this)
      }
    }
  }

  writeStr() {
    //n 大于长度，清除interval
    if (parseInt(this.n) === this.str.length - 1) {
      console.log(`播放完成, n: ${this.n}`)
      window.clearInterval(this.interval_id)
      this.playing = false
    }

    //转成HTML的换行和空格
    if (this.str[this.n] === '\n') {
      this.strHTML += '<br>'
    } else if (this.str[this.n] === ' ') {
      this.strHTML += '&nbsp'
    } else {
      this.strHTML += this.str[this.n]
    }
    //替换页面内容
    this.ui.codeShow.innerHTML = this.strHTML
    this.ui.draw.innerHTML = this.str.substr(0, this.n + 1)

    //注意，可滚动高度还要计算 滚动条本身的宽度，这里先不计算
    this.ui.codeShow.scrollTop = this.ui.codeShow.scrollHeight
    this.n += 1
  }

  play() {
    //是否在播放
    if (this.playing === false) {
      //是否播放完
      if (this.n < this.CSSLen) {
        this.interval_id = setInterval(() => {this.writeStr()}, this.delay)
        this.playing = true
      } else {
        console.log(this.n)
        console.log('已播放完，再点一次重新开始播放')
        //重置
        this.strHTML = ''
        this.ui.draw.innerHTML = ''
        this.n = 0
      }
    } else {
      console.log(`播放中, id: ${this.interval_id}`)
    }
  }



  pause() {
    window.clearInterval(this.interval_id)
    this.playing = false
  }

  slow() {
    this.pause()
    this.delay = 50
    this.play()
  }

  normal() {

    this.pause()
    this.delay = 20
    this.play()
  }

  fast() {
    this.pause()
    this.delay = 0
    this.play()
  }

}

export default CSSPlayer
