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
    var article_list_data = [
      {
        author_img: '/images/author/author1.jpg',
        author_date: 'Sep 18 2016',
        article_tit: '千与千寻:记忆重庆·没有森林',
        article_img: '/images/article/article1.jpg',
        article_content: '虽然锦城与山城一家亲,第一次完整的拥入她还是在两年前的初夏；网络上重庆的魔幻名气伊始，千与千寻的画面感让越来越多的人心驰神往，除了这些，最好体验给我的还有满城的烟火气，路边摊的小面与九宫格的火锅香~~~',
        collect_num: '42',
        look_num: '196'
      },
      {
        author_img: '/images/author/author2.jpg',
        author_date: 'Sep 18 2016',
        article_tit: 'Switch:给你更多可能',
        article_img: '/images/article/article2.jpg',
        article_content: 'Joy-Con是Switch主机的游戏手柄，它是可拆分的。拆分后，由原来的掌上模式变成电视模式或桌面模式。一机三用，可玩性相当高。早就2006年Wii发布的时候，就已经有体感手柄，但是长期玩体感很容易疲劳；到了2011年改善版WiiU登场，采用了两块屏幕，掌机的屏幕又得不到充分利用~~~',
        collect_num: '46',
        look_num: '999'
      }
    ]
    // setData中的数据必须是一个JS对象
    this.setData({article_list_data})//ES6的语法
    // this.setData9({article_list_data})等同于下面的写法
    // this.setData({article_list_data:article_list_data})
    
    console.log('onLoad')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onUnload')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
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
    console.log('onReachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('share')
  }
})