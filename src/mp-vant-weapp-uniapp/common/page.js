// Vant Weapp 页面配置
export default{
    data(){
        return {
            //设置默认的分享参数
            share:{
				title: 'vant-weapp ui', // 默认为小程序名称
				path: '', // 默认为当前页面路径
				imageUrl: '', // 默认为当前页面的截图  
                desc:'',
                content:''
            }
        }
    },
	
	onShareAppMessage() {
		return {
		    title:this.share.title,
		    path:this.share.path,
		    imageUrl:this.share.imageUrl,
		    desc:this.share.desc,
		    content:this.share.content,
		    success(res){
		        uni.showToast({
		            title:'分享成功'
		        })
		    },
		    fail(res){
		        uni.showToast({
		            title:'分享失败',
		            icon:'none'
		        })
		    }
		}
	},
	// 朋友圈分享
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


