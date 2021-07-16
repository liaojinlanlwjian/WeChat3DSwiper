// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    List:[{
      imgsrc:'../../img/swiper.jpg'
    },
  {
    imgsrc:'../../img/swiper1.jpg'
  },
  {
    imgsrc:'../../img/swiper2.jpg'
  }
  ],
    news:[],
        list : [{
          'author': '萌兔子QAQ',
          'info': '我发现萌兔子,真的好帅!',
          'praise': 0,
          'hasChange': false,
        
        },
        {
          'author': '萌兔子QAQ',
          'info': '我发现萌兔子,真的好帅!',
          'praise': 133,
          'hasChange': false
        }
       ]
  },
  handleChange: function(e) {
    this.setData({
      currentIndex: e.detail.current
    })
  },
  praiseThis: function (e) {
    var index = e.currentTarget.dataset.curindex;
    if (this.data.list[index]) {
      var hasChange = this.data.list[index].hasChange;
      if (hasChange !== undefined) {
        var onum = this.data.list[index].praise;
        if (hasChange) {
          this.data.list[index].praise = (onum - 1);
          this.data.list[index].hasChange = false;
        } else {
          this.data.list[index].praise = (onum + 1);
          this.data.list[index].hasChange = true;
        }
        this.setData({
          list: this.data.list
        })
      }
    }
  },
  getdata(){
    // let url="http://v.juhe.cn/toutiao/index";
    // let key="1b1c90be202862dfba4cd7e8f533a856";
    let that=this;
    wx.request({
      url: url,
      data:{
        key:key
      },
      success(res){
        that.setData({
          news:res.data.result.data
        })
      }
    })
  },
  getDetail(e){

    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
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
    this.getdata();
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