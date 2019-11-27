// pages/updatepwd/updatepwd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    password: null,
    number: null
  },
  updatepwd() {
    var appuser = wx.getStorageSync("user");
    if (this.data.password == this.data.repwd) {
      wx.request({
        url: 'http://localhost:8080/updatepwd',

        data: {
          "password": this.data.password,
          "number": appuser.number,
        },
        success(res) {
          if (res.data.status == "success") {
            wx.showToast({
              title: res.data.msg,
            })
          }
        }
      })

      //console.log(res.data.object);
      console.log(appuser.number)
      wx.navigateTo({
        url: '/pages/login/login',
      })
    } else {
      wx.showToast({
        title: '两次密码不一致',
        icon: "none"
      })
    }
  },
  pwd(res) {
    this.setData({
      password: res.detail.value,
    })
    console.log(this.data.password)
  },
  repwd(res) {
    this.setData({
      repwd: res.detail.value,
    })
    console.log(this.data.repwd)
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