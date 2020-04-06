var newsData = require('../../data/data.js');
Page({//新的页面都需要Page方法来对页面进行注册才可以

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var newsId = options.id;
    var detailData = newsData.homeList[newsId];
    this.setData({detailData});//如果遇见数据绑定失败，先考虑是否添加到data当中，再考虑绑定对象是否错误
  }
})