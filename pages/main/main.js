// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  print(){
    wx.navigateTo({
      url: '/pages/print/print',
    })
  },
  upload: function () {
    var that=this;
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      success(res) {
        var fileName = res.tempFiles[0].name;
        var filePath=res.tempFiles[0].path;
        that.setData({['file.name']:fileName,['file.path']:filePath});
        console.log(res);
        
        wx.uploadFile({
          url: "http://localhost:8080/uploadFile",
          filePath: res.tempFiles[0].path,
          name: 'file',
          success(res){
              //json字符串 需用JSON.parse转
            console.log(res);
          }
        })
      }
    })
  },
  queue(){
    wx.navigateTo({
      url: '/pages/queue/queue',
    })
  },
  myprint(){
    wx.navigateTo({
      url: '/pages/myprint/myprint',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})