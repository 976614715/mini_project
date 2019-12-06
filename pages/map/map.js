//map.js
Page({
  data: { // 参与页面渲染的数据
   
  },
  onLoad() {
    // 页面渲染后 执行
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {

        // const latitude = res.latitude // 纬度
        // const longitude = res.longitude // 经度
        // const speed = res.speed
        // const accuracy = res.accuracy
        wx.openLocation({
          latitude: res.latitude, // 纬度，范围为-90~90，负数表示南纬
          longitude: res.longitude, // 经度，范围为-180~180，负数表示西经
          scale: 100, // 缩放比例
          name: "京仪大厦",
          address: "地址：要去的地点详细描述"
        })
      }
    })
  },


})