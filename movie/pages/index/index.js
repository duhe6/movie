// index.js
// 获取应用实例
const app = getApp()
// let api = require('../../utils/api.js');
let resultData = require('../../utils/data.js');
Page({
  data: {
    bannerData: [],
    subJectData:[],
    moreData:[],
  
  },

  onLoad() {
    // this.getBannerData();
    this.setData({
      bannerData: resultData.bannerData,
      subJectData: resultData.subJectData,
      moreData:resultData.moreData
    })
  },
  //   getData(url, method, data = {}, header = {}) {
  //     return new Promise(function (resolve, reject) {
  //         wx.request({
  //             url:url,
  //             data: data,
  //             method: method,
  //             header: header,
  //             success: function (res) {
  //                 if (res.statusCode == 200) {
  //                     resolve(res.data);
  //                 } else {
  //                     reject('error');
  //                 }
  //             },
  //             fail: function (e) {
  //                 reject(e);
  //             }
  //         })
  //     })
  // },
  //   getBannerData: function () {
  //     this.getData('http://apis.juhe.cn/fapig/douyin/billboard',
  //      'get', {
  //       key: 'b05c11f150c75a787504e96b2651db9a',
  //       type: 'hot_video'
  //     }).then(res => {
  //       console.log(res)
  //     }, e => {
  //       console.log(e)
  //     });

  //   },


})