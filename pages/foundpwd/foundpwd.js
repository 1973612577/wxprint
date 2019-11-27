// pages/foundpwd/foundpwd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:null,
    phone:null,
    name:null,
  },
  //提交找回密码
  foundpwd() {
    if (this.data.number != null && this.data.phone != null && this.data.name != null) {
      
        wx.request({
          url: 'http://localhost:8080/foundpwd',
          method: "post",
          data: {
            "number": this.data.number,
            "phone": this.data.phone,
            "name":this.data.name,
          },
          success(res) {
            console.log(res)
            if (res.data.status == "success") {
              wx.showToast({
                title: res.data.msg,
              })
              wx.setStorageSync("user", res.data.object)
              
              wx.navigateTo({
                url: '/pages/updatepwd/updatepwd',
              })
              // wx.navigateTo({
              //   url: '/pages/login/login',
              // })
              
            } else {
              wx.showToast({
                title: res.data.msg,
                icon: "none",
              })
            }
          }
        })
    } else {
      wx.showToast({
        title: '不能为空',
        icon: 'none'
      })
    }

  },
  inputNum(res) {
    this.setData({
      number: res.detail.value,
    })
    console.log("学号是：" + this.data.number)
  },
  inputPhone(res){
    this.setData({
      phone:res.detail.value,
    })
    console.log("手机号是："+this.data.phone)
  },
  inputName(res){
    this.setData({
      name: res.detail.value,
    })
    console.log("姓名是：" + this.data.name)
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