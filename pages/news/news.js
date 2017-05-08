var newsData=require('../../data/news_data.js')
Page({
  data:{
    
  },
  
   onLoad:function(){
    // 生命周期函数--监听页面加载1
    
    this.data.newsList =newsData.newsList;
    this.setData({
      news_list:newsData.newsList
    });
  },
  
  onPostTap:function(event){
  var postId =event.currentTarget.dataset.postid;
   wx.navigateTo({
      url: '../news/detailed/newsDetail'
   })
  },

  
})