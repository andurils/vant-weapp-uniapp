<template>
	<view class="app">
		<wrap title="按钮类型">
			<view class="wrap-content">
				<van-button type="primary" class="wrap-item" @click="onClick">主要按钮</van-button>
				<van-button type="info" class="wrap-item">信息按钮</van-button>
				<van-button class="wrap-item">默认按钮</van-button>
				<van-button type="danger" class="wrap-item">危险按钮</van-button>
				<van-button type="warning" class="wrap-item">警告按钮</van-button>
			</view>
		</wrap>

		<wrap title="朴素按钮">
			<view class="wrap-content">
				<van-button type="primary" plain class="wrap-item">朴素按钮</van-button>
				<van-button type="info" plain class="wrap-item">朴素按钮</van-button>
			</view>
		</wrap>

		<wrap title="细边框" padding>
			<view class="wrap-content">
				<van-button type="primary" plain hairline class="wrap-item">细边框按钮</van-button>
				<van-button type="info" plain hairline class="wrap-item">细边框按钮</van-button>
			</view>
		</wrap>

		<wrap title="禁用状态">
			<view class="wrap-content">
				<van-button type="primary" disabled class="wrap-item" @click="onClick">禁用状态</van-button>
				<van-button type="info" disabled class="wrap-item">禁用状态</van-button>
			</view>
		</wrap>

		<wrap title="加载状态">
			<view class="wrap-content">
				<van-button loading type="primary" class="wrap-item" />
				<van-button loading loading-size="8px" type="primary" class="wrap-item" />
				<van-button loading type="primary" loading-type="spinner" class="wrap-item" />
				<van-button loading type="info" loading-text="加载中..." class="wrap-item" />
			</view>
		</wrap>

		<wrap title="图标按钮">
			<view class="wrap-content">
				<van-button icon="plus" type="primary" class="wrap-item" />
				<van-button icon="plus" type="primary" class="wrap-item">按钮</van-button>
				<van-button icon="friends" type="info" plain class="wrap-item">按钮</van-button>
				<van-button icon="https://img.yzcdn.cn/vant/logo.png" type="primary" plain class="wrap-item">按钮
				</van-button>
			</view>
		</wrap>

		<wrap title="按钮形状">
			<view class="wrap-content">
				<van-button type="primary" square class="wrap-item">方形按钮</van-button>
				<van-button type="info" round class="wrap-item">圆形按钮</van-button>
			</view>
		</wrap>

		<wrap title="按钮尺寸">
			<gap height="12"></gap>
			<van-button type="primary" size="large" class="wrap-item">大号按钮</van-button>
			<view class="wrap-content wrap-col-center">
				<van-button type="primary" size="normal" class="wrap-item">普通按钮</van-button>
				<van-button type="primary" size="small" class="wrap-item">小型按钮</van-button>
				<van-button type="primary" size="mini" class="wrap-item">迷你按钮</van-button>
			</view>
		</wrap>

		<wrap title="块级元素">
			<gap height="12"></gap>
			<van-button type="primary" block class="wrap-item">块级元素</van-button>
		</wrap>

		<wrap title="自定义颜色">
			<view class="wrap-content">
				<van-button color="#7232dd" class="wrap-item">单色按钮</van-button>
				<van-button color="#7232dd" plain class="wrap-item">单色按钮</van-button>
				<van-button color="linear-gradient(to right, rgb(255, 96, 52, 0.8), rgb(238, 10, 36, 1))"
					class="wrap-item">渐变色按钮
				</van-button>
			</view>
		</wrap>

		<wrap title="自定义样式">
			<view class="wrap-content">
				<van-button plain color="rgba(255, 59, 48, 1)" class="wrap-item"
					custom-style="width:200rpx;height:60rpx;border-radius:30rpx;font-size:28rpx;padding:0;">
					自定义样式
				</van-button>

				<van-button plain color="rgba(255, 59, 48, 1)" custom-class="custom-btn" class="wrap-item">外部自定义样式
				</van-button>
			</view>

		</wrap>

		<wrap title="高级示例 open-type/share">
			<view class="wrap-content">
				<!-- #ifdef MP-WEIXIN -->
				<van-button type="info" icon="good-job-o" open-type="share" class="wrap-item" :dataset="buttonInfo">
					用户转发</van-button>
				<!-- #endif -->
			</view>
		</wrap>

		<wrap title="高级示例 open-type/getUserInfo">
			<view class="wrap-content">

				<!-- #ifdef MP-WEIXIN -->
				<van-button type="primary" icon="wechat" open-type="getUserInfo" @getuserinfo="getUserInfo"
					class="wrap-item">获取用户信息
				</van-button>
				<!-- #endif -->

			</view>
		</wrap>

		<wrap title="高级示例 open-type/getPhoneNumber">
			<view class="wrap-content">


				<!-- #ifdef MP-WEIXIN -->
				<van-button type="info" plain icon="phone-o" class="wrap-item" open-type="getPhoneNumber"
					@getphonenumber="getUserPhoneNum">获取手机信息</van-button>
				<!-- #endif -->

			</view>
		</wrap>

		<wrap title="高级示例 open-type/openSetting">
			<view class="wrap-content">
				<!-- #ifdef MP-WEIXIN -->
				<van-button type="info" plain icon="setting-o" open-type="openSetting" @opensetting="getOpenSetting"
					class="wrap-item">
					授权设置
				</van-button>
				<!-- #endif -->
			</view>
		</wrap>

		<wrap title="高级示例 open-type/contact">
			<view class="wrap-content">
				<!-- #ifdef MP-WEIXIN -->
				<van-button type="info" plain icon="service-o" class="wrap-item" open-type="contact"
					@contact="getContact">客服会话</van-button>
				<!-- #endif -->

				<!-- #ifdef MP-WEIXIN -->
				<!-- show-message-card	 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示 -->
				<!-- send-message-title	  会话内消息卡片标题 -->
				<van-button type="info" icon="service-o" class="wrap-item" open-type="contact"
					send-message-title="发送小程序试试看标题" send-message-img="../../static/sample1.png" show-message-card="true"
					@contact="getContact">
					客服会话（卡片）
				</van-button>
				<!-- #endif -->
			</view>
		</wrap>
		<gap height="200"></gap>

		<van-toast id="van-toast" />
		<van-dialog id="van-dialog" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				buttonInfo: {
					title: 'button 示例',
					desc: '示例演示'
				}
			};
		},
		onLoad() {
			// 分享标题
			this.share.title = '自定义分享标题';
		},
		// 重写分享方法 这里如果写成onShareAppMessage: res => { ... }形式的箭头函数，在内部会无法获得this
		onShareAppMessage(res) {
			if (res.from === 'button') { // 来自页面内分享按钮
				console.log('onShareAppMessage', res.target)
			}
			return {
				title: this.share.title,
				path: '/pages/dashboard/dashboard'
			}
		},
		methods: {
			onClick() {
				this.$toast('click me !');
				// uni.showToast({	
				// 	title: '点我',
				// 	icon: 'none'
				// });
			},
			getUserInfo(event) {
				console.log('getUserInfo', event);
				const {
					errMsg,
					userInfo
				} = event.detail;
				if (errMsg == 'getUserInfo:ok') {
					let message = `${userInfo.nickName},欢迎回来!`;
					this.$dialog.alert({
						title: '登录成功',
						message
					}).then(() => {
						console.log('confirm 回调');
					});
				} else {
					this.$toast.fail('登录失败');
				}
			},
			getUserPhoneNum(event) {
				console.log('getPhoneNumber', event);
				const {
					errMsg,
					cloudID,
					encryptedData
				} = event.detail;
				if (errMsg == 'getPhoneNumber:ok') {
					// 信息需解密
					this.$toast.success('登录成功');
				} else {
					this.$toast.fail('登录失败');
				}
			},
			getOpenSetting(event) {
				console.log('openSetting', event)
				this.$toast('授权设置');
			},
			getContact(event) {
				console.log('getContact', event);
				this.$toast('从 客服会话 返回');
			}
		}
	};
</script>

<style lang="scss">
	.custom-btn {
		width: 240rpx !important;
		height: 60rpx !important;
		border-radius: 30rpx !important;
		font-size: 28rpx !important;
		padding: 0 !important;
	}

	.loading-btn {
		color: rgba(255, 59, 48, 1) !important;
	}
</style>
