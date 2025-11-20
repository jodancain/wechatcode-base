// pages/video/video.js
Page({
  data: {
    categories: [
      { id: 'hyperuricemia', name: '高尿酸血症' },
      { id: 'gout', name: '痛风', active: true },
      { id: 'rheumatoid', name: '类风湿关节炎' },
      { id: 'lupus', name: '红斑狼疮' },
    ],
    videos: [
      {
        id: 'v1',
        thumbnail: 'https://i.imgur.com/8m5s1Ym.png',
        title: '为什么会得痛风？',
        doctor: '王文龙'
      },
      {
        id: 'v2',
        thumbnail: 'https://i.imgur.com/n1YJ4bZ.png',
        title: '痛风常见表现有哪些...',
        doctor: '王文龙'
      },
      {
        id: 'v3',
        thumbnail: 'https://i.imgur.com/n1YJ4bZ.png',
        title: '痛风对人体有哪些...',
        doctor: '王文龙'
      },
      {
        id: 'v4',
        thumbnail: 'https://i.imgur.com/8m5s1Ym.png',
        title: '治疗痛风最好的办...',
        doctor: '王文龙'
      },
      {
        id: 'v5',
        thumbnail: 'https://i.imgur.com/n1YJ4bZ.png',
        title: '痛风真的能够临床...',
        doctor: '王文龙'
      },
      {
        id: 'v6',
        thumbnail: 'https://i.imgur.com/8m5s1Ym.png',
        title: '为何肥胖者易痛风...',
        doctor: '王文龙'
      }
    ]
  },

  onLoad(options) {

  },

  handleCategoryTap() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },

  handleVideoTap() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  }
});
