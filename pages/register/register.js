// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    registerNum: null,
    name: null,
    phone: null,
    password: null,
    repassword: null,
  },
  //注册按钮
  register() {
    if (this.data.registerNum != null && this.data.name != null && this.data.phone != null && this.data.password != null && this.data.repassword != null) {
      if (this.data.password == this.data.repassword) {
        wx.request({
          url: 'http://localhost:8080/register',
          data: {
            "registerNum": this.data.registerNum,
            "name": this.data.name,
            "phone": this.data.phone,
            "password": this.data.password
          },
          success(res) {
            console.log(res)
            if (res.data.status == "success") {
              wx.showToast({
                title: res.data.msg,
              })
              wx.navigateTo({
                url: '/pages/login/login',
              })
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
          title: '两次密码不一致',
          icon: "none"
        })
      }
    } else {
      wx.showToast({
        title: '不能为空',
        icon: 'none'
      })
    }

  },
  //以下方法为获取用户输入数据
  registerNum(res) {
    this.setData({
      registerNum: res.detail.value,
    })
    console.log(this.data.registerNum)
  },
  registerName(res) {
    this.setData({
      name: res.detail.value,
    })
    console.log(this.data.name)
  },
  registerPhone(res) {
    this.setData({
      phone: res.detail.value,
    })
    console.log(this.data.phone)
  },
  registerPassword(res) {
    this.setData({
      password: res.detail.value,
    })
    console.log(this.data.password)
  },
  registerRepassword(res) {
    this.setData({
      repassword: res.detail.value,
    })
    console.log(this.data.repassword)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

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