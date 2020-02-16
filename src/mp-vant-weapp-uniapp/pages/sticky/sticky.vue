<template>
	<view class="app">
		<wrap title="基础用法">
			<van-sticky>
				<van-button type="primary" custom-style="margin-left: 15px">
					基础用法
				</van-button>
			</van-sticky>
		</wrap>

		<wrap title="吸顶距离">
			<van-sticky offset-top="50">
				<van-button type="info" custom-style="margin-left: 115px">
					吸顶距离
				</van-button>
			</van-sticky>
		</wrap>

		<wrap title="指定容器">
			<view id="container" style="height: 150px; background-color: #fff;">
				<van-sticky :container="container">
					<van-button type="warning" custom-style="margin-left: 215px;">
						指定容器
					</van-button>
				</van-sticky>
			</view>
		</wrap>
	</view>
</template>

<script>
	import Page from '../../common/page';
	export default {
		data() {
			return {
				container: null
			}
		},
		onLoad() {
			this.container = wthis.selectComponent('#container');
		},
		computed: {},
		methods: {}
	}
</script>

<style>
	.app {
		height: 200vh;
	}

	.van-button {
		margin-left: 16px;
	}

	.sticky-container {
		position: relative;
		z-index: -1;
		height: 150px;
		background-color: #fff;
	}
</style>
