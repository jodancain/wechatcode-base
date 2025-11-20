// pages/profile/profile.js
const app = getApp();

Page({
  data: {
    userInfo: {
      avatarUrl: 'https://img.icons8.com/?size=100&id=0yCd8ocCXRy1&format=png&color=000000',
      nickName: '溪河',
      id: '739375049617477'
    },
    personalProfile: [
      { text: '基本信息', icon: 'https://img.icons8.com/?size=100&id=T5dnyLNPujOw&format=png&color=000000' },
      { text: '病史记录', icon: 'https://img.icons8.com/?size=100&id=19624&format=png&color=000000' },
      { text: '生活史', icon: 'https://img.icons8.com/?size=100&id=Sl3t7FLe5ImE&format=png&color=000000' },
      { text: '过敏史', icon: 'https://img.icons8.com/fluency/96/bee.png' },
      { text: '家族史', icon: 'https://img.icons8.com/fluency/96/family.png' },
      { text: '既往史', icon: 'https://img.icons8.com/fluency/96/order-history.png' },
    ],
    commonTools: [
      { text: '健康报告', icon: 'https://img.icons8.com/fluency/96/graph-report.png' },
      { text: '体格检查', icon: 'https://img.icons8.com/?size=100&id=pDNEMNWV6ybf&format=png&color=000000' },
      { text: '疾病自测', icon: 'https://img.icons8.com/fluency/96/questions.png' },
      { text: '化验检查', icon: 'https://img.icons8.com/fluency/96/test-tube.png' },
      { text: '用药记录', icon: 'https://img.icons8.com/?size=100&id=108787&format=png&color=000000' },
      { text: '复诊随访', icon: 'https://img.icons8.com/fluency/96/planner.png' },
      { text: '病历上传', icon: 'https://img.icons8.com/fluency/96/upload-to-cloud.png' },
    ],
    servicePackages: {
      points: 210,
      pointsIcon: 'https://img.icons8.com/fluency/96/coin-in-hand.png',
      mallText: '新品上架',
      mallIcon: 'https://img.icons8.com/fluency/96/shopping-cart-loaded.png'
    },
    otherOptions: [
      { text: '我的收藏', icon: 'https://img.icons8.com/fluency/96/add-to-favorites.png' },
      { text: '我的转诊', icon: 'https://img.icons8.com/?size=100&id=BiKaAycKn58r&format=png&color=000000' },
      { text: '我的设备', icon: 'https://img.icons8.com/fluency/96/multiple-devices.png' },
      { text: '我的家属', icon: 'https://img.icons8.com/fluency/96/conference-call.png' },
      { text: '日记', icon: 'https://img.icons8.com/fluency/96/spiral-bound-booklet.png' },
      { text: '我的会诊', icon: 'https://img.icons8.com/?size=100&id=23291&format=png&color=000000' },
      { text: '患友邀请', icon: 'https://img.icons8.com/?size=100&id=p9YIZZtWTqlJ&format=png&color=000000' },
      { text: '咨询订单', icon: 'https://img.icons8.com/fluency/96/purchase-order.png' },
      { text: '关于我们', icon: 'https://img.icons8.com/fluency/96/about.png' },
    ]
  },

  onShow() {
    // This logic can be adapted later. For now, we use static data.
  },

  handleNavigate() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  },
  
  // Keep original navigation for now
  goToHealthProfile() {
    wx.navigateTo({
      url: '../health-profile/health-profile',
    });
  }
});
