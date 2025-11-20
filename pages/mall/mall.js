// pages/mall/mall.js
Page({
  data: {
    filters1: [
      { key: 'composite', text: '综合', active: true, sort: 'desc' },
      { key: 'sales', text: '销量', active: false },
      { key: 'price', text: '价格', active: false, sort: 'neutral' }
    ],
    filters2: [
      { key: 'jd-logistics', text: '京东物流' },
      { key: 'delivery-time', text: '配送时效' },
      { key: 'brand', text: '品牌' },
      { key: 'origin', text: '国产/进口' },
    ],
    products: [
      {
        id: 'p1',
        store: 'WARSA海外旗舰店',
        image: 'https://i.imgur.com/UPlb42j.png',
        title: 'WARSA华岩美国原装进...',
        description: '强力酸净素 | 400+人浏览 | 美国原装进口',
        price: '287.00',
        originalPrice: '417.00',
        tags: ['全球购', '领券满360减80', '包邮', '7天价保'],
        sales: '1000+',
        rating: '100%',
      },
      {
        id: 'p2',
        store: 'Vinsic海外京东自营旗...',
        image: 'https://i.imgur.com/ABk37r6.png',
        title: 'Vinsic降尿酸益生菌胶囊芹菜籽...',
        description: '近7日人气商品 | 告别脚痛 | 专利降酸',
        price: '279.80',
        originalPrice: '388.00',
        tags: ['自营', '全球购', '明日达', '跨店每满300减50'],
        sales: '100万+',
        rating: '99%',
      },
      {
        id: 'p3',
        store: 'AFC海外旗舰店',
        image: 'https://i.imgur.com/S1n2a7j.png',
        title: 'AFC进口木犀草素降消尿酸痛风...',
        description: '溶解排结晶 | 有效降尿酸 | 痛风不反复',
        price: '218.00',
        originalPrice: '248.00',
        tags: ['全球购', '包邮', '7天价保'],
        sales: '1万+',
        rating: '99%',
      },
      {
        id: 'p4',
        store: 'AFC海外旗舰店',
        image: 'https://i.imgur.com/uS3P4v8.png',
        title: 'AFC进口木犀草素降消尿...',
        description: '改善痛风结晶 | 精准平衡尿酸',
        price: '336.00',
        originalPrice: '496.00',
        tags: ['全球购', '跨店每满300减50', '7天价保'],
        sales: '1万+',
        rating: '99%',
      }
    ]
  },

  onLoad(options) {

  },
  
  handleFilterTap() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },

  handleProductTap() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  }
});
