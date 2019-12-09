//uc.js
Page({
  data: { // 参与页面渲染的数据
    // uc_center: '中心内容区域',
    uc_name:'zhangtao'
  },
  onLoad() {
    // 页面渲染后 执行
    
  },
  scantocode: function () {
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
  openmap: function () {
    wx.navigateTo({
      url: '../map/map'
    })
  },
  mywebsite: function () {
    wx.navigateTo({
      url: '../web/web',
      success: function () {
      },       //成功后的回调；

      fail: function () { },         //失败后的回调；

      complete: function () { }      //结束后的回调(成功，失败都会执行)
    })
  },


})