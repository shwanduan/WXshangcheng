// pages/member/index/myteam.js
var t = getApp(), e = t.requirejs("core"), a = (t.requirejs("icons"), t.requirejs("jquery"));
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // twoValue:''
    // turnshow: ''
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
     
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      turnshow:true
    })
     let _this = this
     e.get("commission.down.getOneList",{},function(res){
         console.log(JSON.stringify(res),'1111111111111')
          
       
           res.list.forEach((item)=>{
                 console.log(item)    
                 
                 item['turnshow'] = 'false'
           })
           _this.setData({
            one:res.list
          })
          
     })
  },
   
    getTwo(y){
      // console.log(this.data.turnshow);
      // var bol  = this.data.turnshow;

      this.setData({
         turnshow : !this.data.turnshow,
       
      })
      console.log(this.data.turnshow)
      this.setData({
        twoValue : y.currentTarget.dataset.id
      })
      
      let _this = this
      let id = {
          id : y.currentTarget.dataset.id
      }
      e.get("commission.down.getTwoList",id,function(rs){
     
       
        // _this.data.two.forEach((item)=>{
        //   console.log(item)
        //   item['turnshow']  = "true"
        // })
        _this.setData({
          two:rs.list
      })
        console.log(_this.data.two,'24923840280')
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