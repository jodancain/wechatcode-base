// pages/consult/consult.js
Page({
  data: {
    doctors: [
      {
        id: 1,
        avatar: 'https://img.icons8.com/plasticine/100/star.png',
        name: '王文龙',
        title: '主治',
        hospital: '温岭市第一人民医院',
        consultationCount: 195,
        rating: 100,
        intro: '暂无介绍',
        services: ['图文', '电话']
      },
      {
        id: 2,
        avatar: 'https://img.icons8.com/ios-glyphs/90/user-male-circle.png',
        name: '陈盛',
        title: '',
        hospital: '上海交通大学医学院附属仁济医院',
        consultationCount: 103,
        rating: 100,
        intro: '暂无介绍',
        services: ['图文']
      },
      {
        id: 3,
        avatar: 'https://img.icons8.com/clouds/100/building.png',
        name: '李挺',
        title: '',
        hospital: '上海交通大学医学院附属仁济医院',
        consultationCount: 103,
        rating: 100,
        intro: '暂无介绍',
        services: ['图文']
      },
      {
        id: 4,
        avatar: 'https://img.icons8.com/plasticine/100/doctor-male.png',
        name: '程勇军',
        title: '',
        hospital: '温岭市第一人民医院',
        consultationCount: 25,
        rating: 100,
        intro: '暂无介绍',
        services: ['图文']
      }
    ]
  },

  onLoad(options) {

  },
  
  goToConsultation(e) {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  }
});
