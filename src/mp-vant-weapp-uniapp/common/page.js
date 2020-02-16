// Vant Weapp 页面配置
export default function(options = {}) {
  return Page({
    onShareAppMessage() {
      return {
        title: 'vant-weapp ui'
      };
    },
    ...options
  });
}
