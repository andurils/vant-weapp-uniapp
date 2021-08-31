<template>
	<view class="app">
		<wrap title="基础用法"></wrap>
		<van-swipe-cell right-width=" 65 " left-width=" 65 ">
			<view slot="left" class="van-swipe-cell__left">选择</view>
			<van-cell-group>
				<van-cell title="单元格" value="内容" />
			</van-cell-group>
			<view slot="right" class="van-swipe-cell__right">删除</view>
		</van-swipe-cell>

		<wrap title="自定义内容"></wrap>
		<van-swipe-cell right-width=" 65 ">
			<van-cell-group>
				<van-card num="2" price="2.00" desc="描述信息" title="商品标题" :thumb="imageURL" />
			</van-cell-group>
			<view slot="right" class="vheight">删除</view>
		</van-swipe-cell>

		<wrap title="异步关闭"></wrap>

		<van-swipe-cell id="swipe-cell" right-width=" 65 " left-width=" 65 " :async-close="true" @close="onClose">
			<view slot="left" class="van-swipe-cell__left">选择</view>
			<van-cell-group>
				<van-cell title="单元格" value="内容" />
			</van-cell-group>
			<view slot="right" class="van-swipe-cell__right">删除</view>
		</van-swipe-cell>

		<!-- <wrap title="主动打开"></wrap>
		<van-swipe-cell id="swipe-cell2" right-width=" 65 " left-width=" 65 " name="示例" @open="onOpen">
			<view slot="left" class="van-swipe-cell__left">选择</view>
			<van-cell-group>
				<van-cell title="单元格" value="内容" />
			</van-cell-group>
			<view slot="right" class="van-swipe-cell__right">删除</view>
		</van-swipe-cell>
 -->
		<van-dialog id="van-dialog" />
		<van-notify id="van-notify" />
	</view>
</template>
<script>
	import Page from '../../common/page';
	import wrap from '@/components/wrap';
	import Dialog from '@/wxcomponents/vant/dialog/dialog';
	import Notify from '@/wxcomponents/vant/notify/notify';
	export default {
		components: {
			wrap
		},
		data() {
			return {
				imageURL: 'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'
			};
		},
		methods: {
			onClose(event) {
				const {
					position,
					instance
				} = event.detail;
				switch (position) {
					case 'left':
					case 'cell':
						instance.close();
						break;
					case 'right':
						Dialog.confirm({
								message: '确定删除吗？'
							})
							.then(() => {
								console.log('close');
								instance.close();
							})
							.catch(() => {
								console.log('cancel');
							});
						break;
				}
			},
			onOpen(event) {
				const {
					position,
					name
				} = event.detail;
				switch (position) {
					case 'left':
						Notify({
							type: 'success',
							message: `${name}${position}部分展示open事件被触发`
						});
						break;
					case 'right':
						Notify({
							type: 'success',
							message: `${name}${position}部分展示open事件被触发`
						});
						break;
				}
			}
		}
	};
</script>

<style>
	.demo-swipe-cell {
		user-select: none;
	}

	.van-swipe-cell__left,
	.van-swipe-cell__right {
		display: inline-block;
		width: 65px;
		height: 44px;
		font-size: 15px;
		line-height: 44px;
		color: #fff;
		text-align: center;
		background-color: #f44;
	}

	.vheight {
		display: flex;
		display: -webkit-flex;
		font-size: 15px;
		line-height: 106px;
		align-items: center;
		justify-content: center;
		background-color: #f44;
		color: #fff;
	}
</style>
