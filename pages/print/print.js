// pages/print/print.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    array: ['A4', 'A3', '16开', '明信片'],
    element: "A4",
    user: null,
    file:{name:'',path:''},
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
    this.setData({
      element: this.data.array[this.data.index],
    })
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var user = this.data.user;
    // wx.request({
    //   url: 'http://localhost:8080/print',
    //   method: "post",
    //   data: {
    //     "size": e.detail.value.size,
    //     "number": user.number,
    //     //"pageSize": e.detail.value.pageSize,
    //     "printStyle": e.detail.value.printStyle,
    //     "printColor": e.detail.value.printColor,
    //     "note": e.detail.value.note
    //   },
    //   success(res) { 
    //   },
      
    // })
    var file=this.data.file;
    wx.uploadFile({
      url: "http://localhost:8080/print",
      filePath: file.path,
      name: 'file',
      formData:{
        "fileName":this.data.file.name,
        "size": e.detail.value.size,
        "number": user.number,
        //"pageSize": e.detail.value.pageSize,
        "printStyle": e.detail.value.printStyle,
        "printColor": e.detail.value.printColor,
        "note": e.detail.value.note
      },
      success(res) {
        //json字符串 需用JSON.parse转
        console.log(res);
      }
    })
  },
  formReset: function() {
    console.log('form发生了reset事件')
  },
  selectFile() {
    wx.chooseMessageFile({
      count: 1,
      type: "all",
      success: (res) => {
        var fileName = res.tempFiles[0].name;
        var filePath = res.tempFiles[0].path;
        this.setData({ ['file.name']: fileName, ['file.path']: filePath });
      }
    })
    console.log(this.fileName, this.fileName);
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var userTemp=wx.getStorageSync("user")
    this.setData({
      user:userTemp
    })

  },
  
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})