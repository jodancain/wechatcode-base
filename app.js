// app.js
const { cloudEnvId } = require('./utils/cloud-config')

App({
  onLaunch() {
    if (wx.cloud) {
      wx.cloud.init({
        env: cloudEnvId,
        traceUser: true
      })
    } else {
      console.error('Please use base library 2.2.3 or above to enable cloud capabilities')
    }

    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    patientInfo: null // To store our backend's patient data
  }
})
