<template>
	<view class="app">
		<wrap title="文字提示">
			<van-cell title="文字提示" is-link data-type="warning" @click="showToast" />
			<van-cell title="长文字提示" is-link data-type="warning" @click="showLongToast" />
		</wrap>

		<wrap title="加载提示">
			<van-cell title="加载提示" is-link data-type="warning" @click="showLoadingToast" />
		</wrap>

		<wrap title="成功/失败提示">
			<van-cell title="成功提示" is-link data-type="warning" @click="showSuccessToast" />
			<van-cell title="失败提示" is-link data-type="warning" @click="showFailToast" />
		</wrap>

		<wrap title="动态更新提示">
			<van-cell title="动态更新提示" is-link data-type="warning" @click="showCustomizedToast" /> 
		</wrap>

		<van-toast id="van-toast" />
		<van-toast id="custom-selector" />
	</view>
</template>
<script>
	import Page from '../../common/page';
	import wrap from '@/components/wrap';
	import Toast from '@/wxcomponents/vant/toast/toast';
	export default {
		components: {
			wrap
		},
		methods: {
			showToast() {
				Toast('提示内容');
			},

			showLongToast() {
				Toast('这是一条长文字提示，超过一定字数就会换行');
			},

			showLoadingToast() {
				Toast.loading({
					mask: true,
					message: '加载中...'
				});
			},

			showSuccessToast() {
				// Toast.success('成功文案');
				Toast({
					type: 'success',
					message: '成功文案',
					onClose: () => {
						Toast('执行OnClose函数');
						console.log('执行OnClose函数');
					},
				});
			},

			showFailToast() {
				Toast.fail('失败提示');
			},

			showCustomizedToast(duration) {
				var _vm = this;
				const text = second => `倒计时 ${second} 秒`;
				const toast = Toast.loading({
					duration: 0,
					forbidClick: true,
					loadingType: 'spinner',
					message: text(3),
					selector: '#custom-selector'
				});

				let second = 3;
				const timer = setInterval(() => {
					second--;
					if (second) {
						toast.setData({
							message: text(second)
						});
					} else {
						clearInterval(timer);
						Toast.clear();
					}
				}, 1000);
			}
		},
		components: {}
	};
</script>

<style></style>
