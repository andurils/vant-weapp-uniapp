<template>
	<view class="app">
		<wrap title="基础用法"></wrap>
		<van-tabbar :active="active" custom-class="tabbar" safe-area-inset-bottom="false" @change="onChange">
			<van-tabbar-item icon="home-o">标签1</van-tabbar-item>
			<van-tabbar-item icon="search" dot>标签2</van-tabbar-item>
			<van-tabbar-item icon="friends-o" info="5">标签3</van-tabbar-item>
			<van-tabbar-item icon="setting-o" info="20">标签4</van-tabbar-item>
		</van-tabbar>

		<wrap title="通过名称匹配"></wrap>
		<van-tabbar :active="activeName" custom-class="tabbar" safe-area-inset-bottom="false" @change="onNameChange">
			<van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
			<van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
			<van-tabbar-item name="friends" icon="friends-o">标签</van-tabbar-item>
			<van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
		</van-tabbar>

		<wrap title="自定义图标"></wrap>
		<van-tabbar :active="active2" custom-class="tabbar" :safe-area-inset-bottom="false" @change="onChange2">
			<van-tabbar-item info="3">
				<image slot="icon" :src="icon.normal" mode="aspectFit" style="width: 30px; height: 18px;" />
				<image slot="icon-active" :src="icon.active" mode="aspectFit" style="width: 30px; height: 18px;" />
				自定义1
			</van-tabbar-item>
			<van-tabbar-item icon="search">标签2</van-tabbar-item>
			<van-tabbar-item icon="setting-o">标签3</van-tabbar-item>
		</van-tabbar>

		<wrap title="自定义颜色"></wrap>
		<van-tabbar :active="active" custom-class="tabbar" :safe-area-inset-bottom="false" active-color="#07c160" @change="onChange">
			<van-tabbar-item icon="home-o">标签1</van-tabbar-item>
			<van-tabbar-item icon="search">标签2</van-tabbar-item>
			<van-tabbar-item icon="friends-o">标签3</van-tabbar-item>
			<van-tabbar-item icon="setting-o">标签4</van-tabbar-item>
		</van-tabbar>
		<van-notify id="van-notify" />
	</view>
</template>

<script>
	import Page from '../../common/page';
	import wrap from '@/components/wrap';
	import Notify from '@/wxcomponents/vant/notify/notify';
	export default {
		components: {
			wrap
		},
		data() {
			return {
				active: 0,
				active2: 0,
				activeName: 'search',
				icon: {
					normal: 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
					active: 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
				}
			};
		},
		onLoad() {},
		methods: {
			onChange(event) {
				this.active = event.detail;
				Notify({
					type: 'primary',
					message: `点击标签 ${event.detail + 1}`
				});
				 
			},
			onChange2(event) {
				this.active2 = event.detail; 
				Notify({
					type: 'primary',
					message: `点击标签 ${event.detail + 1}`,
				});
			},
			onNameChange(event) {
				this.activeName = event.detail;
				Notify({
					type: 'primary',
					message: `点击标签 ${event.detail + 1}`,
				});
			}
		}
	};
</script>

<style>
	.tabbar {
		position: relative !important;
	}
</style>
