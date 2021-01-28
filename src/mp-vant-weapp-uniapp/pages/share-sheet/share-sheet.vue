<template>
	<div class="app">
		<wrap title="基础用法">
			<van-cell is-link title="显示分享面板" data-type="basic" @click="onShowShareSheet" />
			<van-share-sheet :show="show.basic" title="立即分享给好友" :options="options" @close="onClose" @select="onSelect" />
		</wrap>

		<wrap title="展示多行选项">
			<van-cell is-link title="显示分享面板" data-type="multiLine" @click="onShowShareSheet" />
			<van-share-sheet :show="show.multiLine" title="立即分享给好友" :options="multiLineOptions" @close="onClose" @select="onSelect" />
		</wrap>

		<wrap title="自定义图标">
			<van-cell is-link title="显示分享面板" data-type="customIcon" @click="onShowShareSheet" />
			<van-share-sheet :show="show.customIcon" :options="customIconOptions" @close="onClose" @select="onSelect" />
		</wrap>

		<wrap title="展示描述信息">
			<van-cell is-link title="显示分享面板" data-type="withDesc" @click="onShowShareSheet" />
			<van-share-sheet :show="show.withDesc" title="立即分享给好友" :options="optionsWithDesc" description="描述信息-标题" @close="onClose"
			 @select="onSelect" />
		</wrap>

		<van-toast id="van-toast" />
	</div>
</template>

<script>
	import Page from '../../common/page';
	import wrap from '@/components/wrap';
	import Toast from '@/wxcomponents/vant/toast/toast';
	export default {
		components: {
			wrap
		},
		data() {
			return {
				show: {
					basic: false,
					withDesc: false,
					multiLine: false,
					customIcon: false,
				},
				options: [{
						name: '微信',
						icon: 'wechat',
						openType: 'share'
					},
					{
						name: '微博',
						icon: 'weibo'
					},
					{
						name: '复制链接',
						icon: 'link'
					},
					{
						name: '分享海报',
						icon: 'poster'
					},
					{
						name: '二维码',
						icon: 'qrcode'
					},
				],

				multiLineOptions: [
					[{
							name: '微信',
							icon: 'wechat'
						},
						{
							name: '微博',
							icon: 'weibo'
						},
						{
							name: 'QQ',
							icon: 'qq'
						},
					],
					[{
							name: '复制链接',
							icon: 'link'
						},
						{
							name: '分享海报',
							icon: 'poster'
						},
						{
							name: '二维码',
							icon: 'qrcode'
						},
					],
				],

				customIconOptions: [{
						name: '名称',
						icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
					},
					{
						name: '名称',
						icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png',
					},
					{
						name: '名称',
						icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png',
					},
				],

				optionsWithDesc: [{
						name: '微信',
						icon: 'wechat'
					},
					{
						name: '微博',
						icon: 'weibo'
					},
					{
						name: '复制链接',
						icon: 'link',
						description: '描述信息-选项',
					},
					{
						name: '分享海报',
						icon: 'poster'
					},
					{
						name: '二维码',
						icon: 'qrcode'
					},
				],
			};
		},
		methods: {
			onShowShareSheet(event) {
				this.show[`${event.target.dataset.type}`] = true;
				console.log(this.show)
			},

			onClose() {
				this.show = {
					basic: false,
					withDesc: false,
					multiLine: false,
					customIcon: false,
				};
			},

			onSelect(event) {
				Toast(event.detail.name);
				this.onClose();
			},
		}
	};
</script>

<style>
</style>
