/**
 * a simple-to-use canvas component for WeChat mini-program.
 *
 * Copyright (c) 2018 ~ 2019, Yi-Fan Wu
 * Released under the MIT License.
 * https://github.com/ecomfe/echarts-for-weixin
 */


/**
 * get canvas context
 * @param {string} canvasId
 * @param {WeChat miniprogram component instance} self
 */
function getCtx(canvasId, self) {
  if (!canvasId) {
    console.warn('canvasId is not specified.');
    return;
  }
  return wx.createCanvasContext(canvasId, self);
}

/**
 * get bounding box
 * @param {string} canvasId
 * @param {WeChat miniprogram component instance} self
 */
function getBoundingClientRect(canvasId, self) {
  if (!canvasId) {
    console.warn('canvasId is not specified.');
    return;
  }
  return new Promise(resolve => {
    wx.createSelectorQuery().in(self).select('#' + canvasId)
      .boundingClientRect(res => {
        resolve(res);
      }).exec();
  })
}

/**
 * get the canvas that is suitable for node-canvas
 * @param {string} canvasId
 * @param {WeChat miniprogram component instance} self
 */
function getCanvas(canvasId, self) {
  if (!canvasId) {
    console.warn('canvasId is not specified.');
    return;
  }
  return new Promise(resolve => {
    const query = wx.createSelectorQuery().in(self);
    query
      .select('#' + canvasId)
      .fields({
        node: true,
        size: true
      })
      .exec(res => {
        const canvasNode = res[0].node;
        resolve(canvasNode);
      });
  })
}

export default class WxCanvas {
  constructor(ctx, canvasId, isNew, canvasNode) {
    this.ctx = ctx;
    this.canvasId = canvasId;
    this.chart = null;
    this.isNew = isNew;
    if (isNew) {
      this.canvasNode = canvasNode;
    } else {
      this._initStyle(ctx);
    }

    // this._initCanvas(zrender, ctx);

    this._initEvent();
  }

  getContext(contextType) {
    if (contextType === '2d') {
      return this.ctx;
    }
  }

  setChart(chart) {
    this.chart = chart;
  }

  attachEvent() {
    // noop
  }

  detachEvent() {
    // noop
  }

  _initCanvas(zrender, ctx) {
    zrender.util.getContext = function () {
      return ctx;
    };

    zrender.util.getCanvasId = function () {
      return this.canvasId;
    }
  }

  _initStyle(ctx) {
    var styles = ['fillStyle', 'strokeStyle', 'globalAlpha',
      'textAlign', 'textBaseLine', 'shadow', 'lineWidth',
      'lineCap', 'lineJoin', 'lineDash', 'miterLimit',
      'fontSize', 'fontFamily', 'fontWeight', 'fontStyle', 'fontVariant'
    ];

    styles.forEach(style => {
      Object.defineProperty(ctx, style, {
        set: value => {
          if ((style !== 'fillStyle' && style !== 'strokeStyle')
            || (value !== 'none' && value !== null)
          ) {
            ctx['set' + style.charAt(0).toUpperCase() + style.slice(1)](value);
          }
        }
      });
    });

    ctx.createRadialGradient = () => {
      return ctx.createCircularGradient(arguments);
    };
  }

  _initEvent() {
    this.event = {};
    const eventNames = [{
      wxName: 'touchStart',
      ecName: 'mousedown'
    }, {
      wxName: 'touchMove',
      ecName: 'mousemove'
    }, {
      wxName: 'touchEnd',
      ecName: 'mouseup'
    }, {
      wxName: 'touchEnd',
      ecName: 'click'
    }];

    eventNames.forEach(name => {
      this.event[name.wxName] = e => {
        const touch = e.touches[0];
        this.chart.getZr().handler.dispatch(name.ecName, {
          zrX: name.wxName === 'tap' ? touch.clientX : touch.x,
          zrY: name.wxName === 'tap' ? touch.clientY : touch.y
        });
      };
    });
  }

  get width() {
    if (this.canvasNode)
      return this.canvasNode.width;
    return 0;
  }

  set width(w) {
    if (this.canvasNode)
      this.canvasNode.width = w;
  }

  get height() {
    if (this.canvasNode)
      return this.canvasNode.height;
    return 0;
  }

  set height(h) {
    if (this.canvasNode)
      this.canvasNode.height = h;
  }
}
