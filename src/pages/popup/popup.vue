<template>
	<view class="app">
		<wrap title="基础用法">
			<gap height="24"></gap>
			<van-cell title="展示弹出层" is-link @click="toggle('basic')" />
			<van-popup :show="show.basic" custom-style="padding: 30px 50px"
				overlay-style="background-color:rgba(0,0,0,.2)" @close="toggle('basic')">内容</van-popup>
		</wrap>

		<wrap title="弹出位置">
			<gap height="24"></gap>
			<van-cell title="顶部弹出" is-link @click="toggle('top')" />
			<van-cell title="底部弹出" is-link @click="toggle('bottom')" />
			<van-cell title="左侧弹出" is-link @click="toggle('left')" />
			<van-cell title="右侧弹出" is-link @click="toggle('right')" />

			<van-popup :show="show.top" position="top" custom-style="height: 20%" @close="toggle('top')" />
			<van-popup :show="show.bottom" position="bottom" custom-style="height: 20%" @close="toggle('bottom')" />
			<van-popup :show="show.left" position="left" custom-style="width: 40%; height: 100%"
				@close="toggle('left')" />
			<van-popup :show="show.right" position="right" custom-style="width: 20%; height: 100%"
				@close="toggle('right')" />
		</wrap>

		<wrap title="关闭图标">
			<gap height="24"></gap>
			<van-cell title="关闭图标" is-link @click="toggle('closeIcon')" />
			<van-cell title="自定义图标" is-link @click="toggle('customCloseIcon')" />
			<van-cell title="图标位置" is-link @click="toggle('customIconPosition')" />

			<van-popup :show="show.closeIcon" closeable position="bottom" custom-style="height: 20%"
				@close="toggle('closeIcon')" />

			<van-popup :show="show.customCloseIcon" closeable close-icon="close" position="bottom"
				custom-style="height: 20%" @close="toggle('customCloseIcon')" />

			<van-popup :show="show.customIconPosition" closeable close-icon-position="top-left" position="bottom"
				custom-style="height: 20%" @close="toggle('customIconPosition')" />
		</wrap>

		<wrap title="圆角弹窗">
			<gap height="24"></gap>
			<van-cell title="圆角弹窗" is-link @click="toggle('round')" />

			<van-popup :show="show.round" round position="bottom" custom-style="height: 20%" @close="toggle('round')" />
		</wrap>

		<wrap title="事件/自定义样式">
			<gap height="24"></gap>
			<van-cell title="事件/自定义样式" is-link @click="toggle('cusEvent')" />

			<van-popup :show="show.cusEvent" closeable close-icon="close" position="bottom" custom-style="height: 20%"
			 custom-class='cus-root' @close="onClose" @click-overlay="onClickOverlay"
				@before-enter="onBeforeEnter" @enter="onEnter" @after-enter="onAfterEnter" @before-leave="onBeforeLeave"
				@leave="onLeave" @after-leave="onAfterLeave">
				<van-icon name="friends" />
				<text>内容</text>
			</van-popup>
		</wrap>
		<view class="clear-blank"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: {
					basic: false,
					top: false,
					bottom: false,
					left: false,
					right: false,
					round: false,
					closeIcon: false,
					customCloseIcon: false,
					customIconPosition: false,
					cusEvent: false
				}
			};
		},
		methods: {
			toggle(type, showState) {
				console.log(type);
				this.show[type] = !this.show[type];
				// this.show[type] = showState;
			},
			onClose(event) {
				this.show['cusEvent'] = !this.show['cusEvent'];
				console.log('close', event);
			},
			onClickOverlay(event) {
				console.log('click-overlay', event);
			},
			onBeforeEnter(event) {
				console.log('before-enter', event);
			},
			onEnter(event) {
				console.log('close', event);
			},
			onAfterEnter(event) {
				console.log('after-enter', event);
			},
			onBeforeLeave(event) {
				console.log('before-leave', event);
			},
			onLeave(event) {
				console.log('leave', event);
			},
			onAfterLeave(event) {
				console.log('after-leave', event);
			} 
		},
		components: {}
	};
</script>

<style>
	.center {
		width: 60%;
		padding: 20px;
		text-align: center;
		box-sizing: border-box;
	}

	.top {
		color: #fff;
		width: 100%;
		padding: 20px;
		border-radius: 0;
		line-height: 20px;
		background-color: rgba(0, 0, 0, 0.8) !important;
	}

	.bottom {
		width: 100%;
		padding: 20px;
		line-height: 100px;
		background-color: #fff;
	}

	.right {
		width: 100%;
		height: 100%;
		padding: 20px;
	}

	.cus-root {
		padding: 48rpx;
		background-color: #c8c9cc !important;
		border: #f29100 8rpx solid !important;
		color: #f29100;
		font-size: 48rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
