Page({
  onTap: function (){
    wx.navigateTo({
      url: '../home/home'
    })
  },
  onUnload: function (){
    console.log('the page is unload')
  },
  onHide: function (){
    console.log('the page is onHide')
  }
})