// pages/shop/caregory/newpro.js

var t = getApp(), e = t.requirejs("core"), a = (t.requirejs("icons"), t.requirejs("jquery"));

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

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
     wx.setNavigationBarTitle({
       title: '更多产品',
     }),
     wx.setNavigationBarColor({
       backgroundColor: '#FEECD2',
       frontColor: '#000000',
     })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      var _this = this
      e.get('goods.get_list',{},function(res){
        console.log(JSON.stringify(res),'22222222222222222')
         _this.setData({
            prolist:res.list
         })
      })
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