<template>
	<view>
		<wrap title="按钮类型">
			<van-button class="demo-margin-right" @click="onClick">默认按钮</van-button>
			<van-button type="primary" class="demo-margin-right">主要按钮</van-button>
			<van-button type="info">信息按钮</van-button>

			<van-button type="danger" class="demo-margin-right">危险按钮</van-button>
			<van-button type="warning">警告按钮</van-button>
		</wrap>

		<wrap title="朴素按钮">
			<van-button type="primary" plain class="demo-margin-right">朴素按钮</van-button>
			<van-button type="info" plain>朴素按钮</van-button>
		</wrap>

		<wrap title="细边框" padding>
			<van-button type="primary" plain hairline class="demo-margin-right">细边框按钮</van-button>
			<van-button type="info" plain hairline>细边框按钮</van-button>
		</wrap>

		<wrap title="禁用状态">
			<van-button type="primary" disabled class="demo-margin-right" @click="onClick">禁用状态</van-button>
			<van-button type="info" disabled>禁用状态</van-button>
		</wrap>

		<wrap title="加载状态">
			<van-button loading type="primary" class="demo-margin-right" />
			<van-button loading type="primary" loading-type="spinner" class="demo-margin-right" />
			<van-button loading type="info" loading-text="加载中..." />
		</wrap>

		<wrap title="图标按钮">
			<van-button icon="star-o" type="primary" class="demo-margin-right" />
			<van-button icon="star-o" type="primary" class="demo-margin-right">按钮</van-button>
			<van-button icon="https://img.yzcdn.cn/vant/logo.png" type="primary" plain>按钮</van-button>
		</wrap>

		<wrap title="按钮形状">
			<van-button type="primary" square class="demo-margin-right">方形按钮</van-button>
			<van-button type="info" round>圆形按钮</van-button>
		</wrap>



		<wrap title="按钮尺寸">
			<van-button type="primary" size="large" class="demo-margin-right">大号按钮</van-button>

			<van-button type="primary" size="normal" class="demo-margin-right ">普通按钮</van-button>
			<van-button type="primary" size="small" class="demo-margin-right ">小型按钮</van-button>
			<van-button type="primary" size="mini" class="demo-margin-right  ">迷你按钮</van-button>
		</wrap>

		<wrap title="块级元素">
			<van-button type="primary" block>块级元素</van-button>
		</wrap>

		<wrap title="自定义颜色">
			<van-button color="#7232dd" class="demo-margin-right">单色按钮</van-button>
			<van-button color="#7232dd" plain class="demo-margin-right">单色按钮</van-button>
			<van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" class="demo-margin-right">渐变色按钮</van-button>
		</wrap>

		<wrap title="高级示例">
			<!-- #ifdef MP-WEIXIN -->
			<van-button type="info" icon="good-job-o" open-type="share" class="demo-margin-right">分享给好友</van-button>
			<!-- #endif -->

			<!-- #ifdef MP-WEIXIN -->
			<van-button type="primary" icon="wechat" class="demo-margin-right" open-type="getUserInfo" @getuserinfo="getUserInfo">微信快速登录</van-button>
			<!-- #endif -->

			<!-- #ifdef MP-WEIXIN -->
			<van-button type="default" icon="phone-o" class="demo-margin-right" open-type="getPhoneNumber" @getphonenumber="getUserPhoneNum">手机快速登录</van-button>
			<!-- #endif -->

			<!-- #ifdef MP-WEIXIN -->
			<van-button type="info" plain icon="setting-o" class="demo-margin-right" open-type="openSetting" @opensetting="getOpenSetting">授权设置</van-button>
			<!-- #endif -->



		</wrap>

		<wrap title="高级示例">
			<!-- #ifdef MP-WEIXIN -->
			<van-button type="info" plain icon="service-o" class="demo-margin-right" open-type="contact" @contact="getContact">客服会话</van-button>
			<!-- #endif -->

			<!-- #ifdef MP-WEIXIN -->
			<!-- show-message-card	 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示 -->
			<!-- send-message-title	  会话内消息卡片标题 -->
			<van-button type="info" icon="service-o" open-type="contact" session-from='button demo' send-message-title='发送小程序试试看标题'
			 show-message-card='true' @contact="getContact">客服会话</van-button>
			<!-- #endif -->
		</wrap>

		<van-toast id="van-toast" />
		<van-dialog id="van-dialog" />
	</view>
</template>

<script>
	import Page from '../../common/page';

	export default {
		data() {
			return {

			}
		},
		onLoad() {},
		methods: {
			onClick() {
				uni.showToast({
					title: '点我',
					icon: 'none'
				});
			},
			getUserInfo(event) {
				console.log(event);
				const {
					errMsg,
					userInfo
				} = event.detail;
				if (errMsg == "getUserInfo:ok") {
					let message = '欢迎回来！' + userInfo.nickName
					this.$dialog.alert({
						title: '登录成功',
						message,
					}).then(() => {
						console.log('confirm');
					});
				} else {
					this.$toast.fail('登录失败');
				}
			},
			getUserPhoneNum(event) {
				console.log(event);
				const {
					errMsg,
					cloudID,
					encryptedData
				} = event.detail;
				if (errMsg == "getPhoneNumber:ok") {
					// 信息需解密
					this.$toast.success('登录成功');
				} else {
					this.$toast.fail('登录失败');
				}
			},
			getOpenSetting(event) {
				this.$toast('授权设置');
			},
			getContact(event) {
				console.log(event);
				this.$toast('客服会话');
			}
		}
	}
</script>

<style>
	.row {
		height: 44px;
		margin-bottom: 15px;
	}
</style>
