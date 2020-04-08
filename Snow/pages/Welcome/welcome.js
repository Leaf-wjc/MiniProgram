Page({
  onTap: function (){
    // wx.navigateTo({
    //   url: '../home/home'
    // })
    wx.redirectTo({
      url: '../home/home'
    })
  },
  onUiTap: function (events){
    wx.redirectTo({
      url: '../UiFrame/uiFrame',
    })
  }
})