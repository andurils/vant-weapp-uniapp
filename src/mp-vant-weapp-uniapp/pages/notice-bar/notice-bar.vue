<template>
	<div class="app">
		<wrap title="基础用法">
			<van-notice-bar :text="text" left-icon="//img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png" />
		</wrap>

		<wrap title="禁用滚动">
			<van-notice-bar :scrollable="false" :text="text" />
		</wrap>

		<wrap title="多行展示">
			<van-notice-bar wrapable :scrollable="false" :text="text" />
		</wrap>

		<wrap title="使用左右插槽">
			<van-notice-bar :text="text" custom-class="demo-margin-bottom">
				<text slot="left-icon">[公告]</text>
				<text slot="right-icon">[结束]</text>
			</van-notice-bar>

			<van-notice-bar :text="text" backgroundColor="#ECF9FF" color="#258FFA">
				<view slot="left-icon">
					<van-icon name="info-o" custom-class="demo-image" />自定义</view>

				<!-- <text slot="right-icon">[结束]</text> -->
			</van-notice-bar>
		</wrap>

		<wrap title="通告栏模式">
			<!-- closeable 模式，在右侧显示关闭按钮 -->
			<van-notice-bar mode="closeable" :text="text" custom-class="demo-margin-bottom" />
			<van-notice-bar mode="link" :text="text" @click="onClick" :url="homeUrl" />
		</wrap>

		<wrap title="自定义滚动速率">
			<van-notice-bar :text="text" :speed="speedValue" left-icon="//img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png" />
		</wrap>


	</div>
</template>

<script>
	import Page from '../../common/page';
	export default {
		data() {
			return {
				text: '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力',
				speedValue: 99,
				homeUrl: "/pages/dashboard/dashboard"
			};
		},
		methods: {
			onClick(e) {
				console.log(e);
			}
		}
	};
</script>

<style>
	.demo-margin-bottom {
		margin-bottom: 8px;
	}

	.demo-image {
		color: #07C160;
	}
</style>
