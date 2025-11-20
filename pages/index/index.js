// pages/index/index.js
Page({
  data: {
    actionGrid: [
      { text: '病历夹', icon: 'https://img.icons8.com/fluency/96/user-folder.png' },
      { text: '副作用监测', icon: 'https://img.icons8.com/fluency/96/virus.png' },
      { text: '用药提醒', icon: 'https://img.icons8.com/fluency/96/alarm-clock.png' },
      { text: '化验解读', icon: 'https://img.icons8.com/?size=100&id=zYJm0WlfhiAb&format=png&color=000000' },
      { text: '问医生', icon: 'https://img.icons8.com/?size=100&id=ZHVdWnPWxBpU&format=png&color=000000' },
      { text: '名医会诊', icon: 'https://img.icons8.com/fluency/96/meeting.png' }
    ],
    activeTab: 'disease-intro',
    articles: {
      'disease-intro': [
        {
          id: 1,
          title: '风湿免疫患者新冠阳性，需要停药吗？',
          source: '全部',
          views: 2066,
          image: 'https://i.imgur.com/example-image-1.png'
        },
        {
          id: 2,
          title: '阳了怎么办？谁能居家？谁要吃药？谁应去医院？',
          source: '全部',
          views: 595,
          image: 'https://i.imgur.com/example-image-2.png'
        },
        {
          id: 3,
          title: '风湿病患者如何接种疫苗？2022ACR最新指南来了！',
          source: '全部',
          views: 857,
          image: 'https://i.imgur.com/example-image-3.png'
        }
      ],
      // Add other categories if needed
    }
  },

  handleActionTap() {
    wx.showToast({ title: '功能开发中', icon: 'none' });
  },

  handleTabSwitch() {
    wx.showToast({ title: '功能开发中', icon: 'none' });
  },

  handleArticleTap() {
    wx.showToast({ title: '功能开发中', icon: 'none' });
  }
});
