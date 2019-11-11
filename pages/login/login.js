// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: null,
    password:null,

  },
  loginTap(){
    console.log("登录按钮")
    wx.request({
      url: '',
      method:"post",
      data:{
        "number":this.data.number,
        "password":this.data.password
      },
      success(res){
        //跳转到主页面
        wx.switchTab({
          url: '/pages/main/main',
        })
      }
    })
  },
//学号输入框事件
inputNum(res){
  this.setData({
    number:res.detail.value,
  })
  console.log(this.data.number)
},
//密码输入框
inputPwd(res){
  this.setData({
    password: res.detail.value,
  })
},
register(){
  console.log("注册账号");
  wx.navigateTo({
    url: '/pages/register/register',
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