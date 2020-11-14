<template>
	<view class="app">
		<wrap title="文字提示">
			<van-button type="primary" @tap="showToast" class="demo-margin-right">文字提示</van-button>
			<van-button type="primary" @tap="showLongToast">长文字提示</van-button>
		</wrap>

		<wrap title="加载提示"><van-button type="primary" @tap="showLoadingToast">加载提示</van-button></wrap>

		<wrap title="成功/失败提示">
			<van-button type="info" @tap="showSuccessToast" class="demo-margin-right">成功提示</van-button>
			<van-button type="danger" @tap="showFailToast">失败提示</van-button>
		</wrap>

		<wrap title="动态更新提示"><van-button type="primary" @tap="showCustomizedToast">动态更新提示</van-button></wrap>

		<van-toast id="van-toast" />
		<van-toast id="custom-selector" />
	</view>
</template>
<script>
import Page from '../../common/page'; 
import wrap from '@/components/wrap';
export default {
	components: {
		wrap
	},
	methods: {
		showToast() {
			this.$toast('提示内容');
		},

		showLongToast() {
			this.$toast('这是一条长文字提示，超过一定字数就会换行');
		},

		showLoadingToast() {
			this.$toast.loading({
				mask: true,
				message: '加载中...'
			});
		},

		showSuccessToast() {
			this.$toast.success('成功文案');
		},

		showFailToast() {
			this.$toast.fail('失败提示');
		},

		showCustomizedToast(duration) {
			var _vm = this;
			const text = second => `倒计时 ${second} 秒`;
			const toast = this.$toast.loading({
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
					_vm.$toast.clear();
				}
			}, 1000);
		}
	},
	components: {}
};
</script>

<style></style>
