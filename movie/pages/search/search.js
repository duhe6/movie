// pages/search/search.js
let resultData = require('../../utils/data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchData: [],
    scrollHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    const query = wx.createSelectorQuery(); //创建对象
    query.select('.search_box').boundingClientRect(function(rect) {
      // console.log(rect.height);
      var winHeight = wx.getSystemInfoSync().windowHeight;
      that.setData({
        scrollHeight: winHeight - rect.height
      })
    }).exec();
    this.setData({
      searchData: resultData.moreData
    })
  },
  searchMovie: function(e) {
    console.log(e.detail.value);
    //获取到要搜索的内容之后可以发送请求获取到特定内容后再设置到searchData中
    this.setData({
      searchData: resultData.moreData
    })
  },
  cancleSearch: function() {
    wx.navigateBack({
      url:'/pages/index/index'
    })
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