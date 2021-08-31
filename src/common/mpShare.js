// Vant Weapp 页面配置
export default{
    data(){
        return {
            //设置默认的分享参数
            share:{
				title: 'vant-weapp uniapp demo', // 默认为小程序名称
				path: '', // 默认为当前页面路径
				imageUrl: '', // 默认为当前页面的截图   
            }
        }
    },
	
	onShareAppMessage() {
		return {
		    title:this.share.title,
		    path:this.share.path,
		    imageUrl:this.share.imageUrl
		}
	},
	// 分享到朋友圈 
	// #ifdef MP-WEIXIN
	onShareTimeline() {
		return {
		    title:this.share.title,
		    path:this.share.path,
		    imageUrl:this.share.imageUrl 
		}
	}
	// #endif 
}


