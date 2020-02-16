<template>
	<view>
		<wrap">
			<view class="container">
				<van-badge-group @change="onChange" custom-class="group">
					<van-badge title="标签名称" />
					<van-badge title="标签名称" info="8" />
					<van-badge title="标签名称" info="99" />
					<van-badge title="标签名称" info="99+" />
				</van-badge-group>
			</view>
		</wrap</template>

<script>
	import Page from '../../common/page';

	export default {
		data() {
			return {

			}
		},
		onLoad() {},
		methods: {
			onChange(event) {
				wx.showToast({
					icon: 'none',
					title: `切换至第${event.detail}项`
				});
			}
		}
	}
</script>

<style>
	.container {
		width: auto;
		margin: 0 15px;
		padding: 20px 0;
		background-color: #fff;
	}

	.group {
		margin: 0 auto;
	}
</style>
