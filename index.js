/**
 * px2rpx插件
 * @author xiaoqiang <465633678@qq.com>
 * @created 2019/07/01 11:52:44
 */
// 操作流
const through = require('through2')

class Px2rpx {
  constructor(options) {
    this.options = options
  }
  /**
   * 转换rpx
   * @param {string} cssContent 
   */
  generateRpx(cssContent) {
    const { size } = this.options
    const pxRegExp = /\b(\d+(\.\d+)?)px\b/g
    return cssContent.replace(pxRegExp, function(px) { return parseFloat(px) * (750 / size) + 'rpx' })
  }
}
/**
 * px2rpx插件
 */
exports.px2rpx = function(options) {
  return through.obj((file, enc, cb) => {
    // 获取内容
    let content = file.contents.toString('utf-8')
    const px2rpx = new Px2rpx(options)
    file.contents = Buffer.from(px2rpx.generateRpx(content))
    cb(null, file)
  })
}
exports.Px2rpx = Px2rpx
