// pages/record/record.js
const API_HOST = 'http://localhost:3000'; // Our NestJS backend

Page({
  data: {
    uricAcid: null,
    dietLight: null, // 'green', 'yellow', 'red'
    dietDescription: '',
    patientId: null, // This should be fetched from globalData or storage after login
  },

  onLoad() {
    // For demo purpose, let's assume patient info is stored in globalData
    const app = getApp();
    if (app.globalData.patientInfo) {
      this.setData({
        patientId: app.globalData.patientInfo.id,
      });
    } else {
      // If no patient info, redirect to index to login
      wx.redirectTo({
        url: '/pages/index/index',
      });
    }
  },

  onUricAcidInput(e) {
    this.setData({
      uricAcid: e.detail.value,
    });
  },

  onDescriptionInput(e) {
    this.setData({
      dietDescription: e.detail.value,
    });
  },

  selectDiet(e) {
    this.setData({
      dietLight: e.currentTarget.dataset.light,
    });
  },

  submitRecord() {
    const { uricAcid, dietLight, dietDescription, patientId } = this.data;

    if (!uricAcid && !dietLight) {
      wx.showToast({
        title: '至少记录一项',
        icon: 'none',
      });
      return;
    }

    // --- MOCKING BACKEND SUBMISSION ---
    console.log("Simulating data submission:", this.data);
    wx.showToast({
      title: '模拟记录成功',
      icon: 'success',
      duration: 1500,
      complete: () => {
        // Navigate back after a short delay
        setTimeout(() => {
          wx.navigateBack();
        }, 1500);
      }
    });
    // --- END MOCKING ---

    /*
    // Original backend request code is commented out
    if (uricAcid) {
      wx.request({ ... });
    }
    if (dietLight) {
      wx.request({ ... });
    }
    */
  },
});
