// pages/health-profile/health-profile.js
const app = getApp();

Page({
  data: {
    profile: {
      name: '',
      dob: '',
      height: '',
      weight: ''
    },
    genderArray: ['男', '女', '保密'],
    genderIndex: 0,
    conditions: [
      { name: '高血压', value: 'hypertension', checked: false },
      { name: '糖尿病', value: 'diabetes', checked: false },
      { name: '高血脂', value: 'hyperlipidemia', checked: false },
      { name: '冠心病', value: 'chd', checked: false },
      { name: '脑卒中', value: 'stroke', checked: false },
      { name: '肾脏病', value: 'kidney', checked: false },
    ],
    selectedConditions: []
  },

  onLoad() {
    // Load saved profile data from globalData if it exists
    if (app.globalData.healthProfile) {
      const { profile, genderIndex, selectedConditions } = app.globalData.healthProfile;
      const conditions = this.data.conditions.map(c => ({
        ...c,
        checked: selectedConditions.includes(c.value)
      }));
      this.setData({ profile, genderIndex, selectedConditions, conditions });
    }
  },

  bindGenderChange(e) {
    this.setData({ genderIndex: e.detail.value });
  },

  bindDobChange(e) {
    this.setData({ 'profile.dob': e.detail.value });
  },

  bindConditionsChange(e) {
    const selectedConditions = e.detail.value;
    const conditions = this.data.conditions.map(c => ({
      ...c,
      checked: selectedConditions.includes(c.value)
    }));
    this.setData({ selectedConditions, conditions });
  },

  formSubmit(e) {
    const formData = e.detail.value;
    const healthProfile = {
      profile: {
        name: formData.name,
        dob: formData.dob,
        height: formData.height,
        weight: formData.weight
      },
      genderIndex: this.data.genderIndex,
      selectedConditions: this.data.selectedConditions
    };

    // Save to globalData for this demo
    app.globalData.healthProfile = healthProfile;

    wx.showToast({
      title: '保存成功',
      icon: 'success',
      duration: 1500,
      complete: () => {
        setTimeout(() => {
          wx.navigateBack();
        }, 1500);
      }
    });
  }
});
