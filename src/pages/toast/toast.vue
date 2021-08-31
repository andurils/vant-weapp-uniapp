<template>
	<view class="app">
		<wrap title="文字提示">
			<gap height="24"></gap>
			<van-cell title="文字提示" is-link @click="showToast" />
			<van-cell title="长文字提示" is-link @click="showLongToast" />
			<van-cell title="加载提示" is-link @click="showLoadingToast" />
			<van-cell title="成功提示" is-link @click="showSuccessToast" />
			<van-cell title="失败提示" is-link @click="showFailToast" />
		</wrap>

		<wrap title="动态更新提示">
			<gap height="24"></gap>
			<van-cell title="动态更新提示" is-link @click="showCustomizedToast" />
		</wrap>

		<wrap title="position位置">
			<gap height="24"></gap>
			<van-cell title="top" is-link @click="showPosition('top')" />
			<van-cell title="middle" is-link @click="showPosition('middle')" />
			<van-cell title="bottom" is-link @click="showPosition('bottom')" />
		</wrap>
		<gap height="200"></gap>

		<van-toast id="van-toast" />
		<van-toast id="custom-selector" />
	</view>
</template>
<script>
	export default {
		methods: {
			showToast() {
				this.$toast({
					message: 'click me!',
					forbidClick: true,
				});
			},
			showLongToast() {
				this.$toast('这是一条长文字提示，超过一定字数就会换行');
			},
			showLoadingToast() {
				this.$toast.loading({
					mask: true,
					message: '加载中...',
					loadingType: 'spinner',
				});
			},
			showSuccessToast() {
				// Toast.success('成功文案');
				this.$toast({
					type: 'success',
					message: '成功文案',
					onClose: () => {
						this.$toast('执行OnClose函数');
						console.log('执行OnClose函数');
					},
				});
			},
			showFailToast() {
				this.$toast.fail('失败提示');
			},
			showPosition(positionValue) {
				this.$toast({
					position: positionValue,
					message: `${positionValue}`,
				});
			},
			showCustomizedToast(duration) {
				var _vm = this;
				const text = second => `倒计时 ${second} 秒`;
				const toastObj = this.$toast.loading({
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
						toastObj.setData({
							message: text(second)
						});
					} else {
						clearInterval(timer);
						this.$toast.clear();
					}
				}, 1000);
			}
		},
	};
</script>
