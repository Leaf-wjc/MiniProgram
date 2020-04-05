var requireData = require('../../data/data.js')
// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // setData中的数据必须是一个JS对象
    // this.setData({ article_list_data })ES6的语法
    // this.setData9({article_list_data})等同于下面的写法
    this.setData({homeData:requireData.homeList})
  }
})