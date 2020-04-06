var articleData = require('../../data/data.js');
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
    //获取URL参数中的文章id，此id是通过上个页面wx.navigateTo--API传递过来来的
    var articleId = options.id;
    this.setData({
      currentId: articleId
    });
    var detailData = articleData.articleList[articleId];
    this.setData({ detailData });//如果遇见数据绑定失败，先考虑是否添加到data当中，再考虑绑定对象是否错误
    //获取所有文章收藏状态
    var articleState = wx.getStorageSync('articleCollected');
    if (articleState) {
      var currentState = articleState[articleId];
      this.setData({
        collected: currentState
      })
    }
    else {
      articleState = {};
      articleState[articleId] = false;
      wx.setStorageSync('articleCollected', articleState);
    }


    // articleState[articleId] = currentState
    // wx.setStorageSync('articleCollected', data)
  },
  onCollectTap: function (events) {
    var articleState = wx.getStorageSync('articleCollected');
    var currentState = articleState[this.data.currentId];
    currentState = !currentState;
    this.setData({
      collected: currentState
    });
    articleState[this.data.currentId] = currentState;
    wx.setStorageSync('articleCollected', articleState);
  }

})