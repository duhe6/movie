// pages/more-movie/more-movie.js
let resultData = require('../../utils/data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moreData: [],
    hidden: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    //动态设置导航栏标题
    wx.setNavigationBarTitle({
      title: options.title
    });
    // 动态设置导航栏颜色
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#000'
    });
    // 动态设置导航栏加载动画
    wx.showNavigationBarLoading();
    setTimeout(wx.hideNavigationBarLoading, 2000)
    this.getData();
  },
  getData: function () {
    let page = this.data.page;
    // wx.showLoading({
    //   title: '加载中...',
    // });
    this.setData({
      hidden: false
    })
    setTimeout(() => {
      // wx.hideLoading();
      this.setData({
        hidden: true
      })
      this.setData({
        moreData: resultData.moreData
      });
    }, 2000)
  },
  loadMore: function(){
    let movieList = this.data.moreData;
    // 翻页
    // let page = this.data.page;
    // page++;
    // this.getData();
    this.setData({
      moreData: movieList.concat(resultData.moreData)
    });
  },
 /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log(1);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log(2);
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