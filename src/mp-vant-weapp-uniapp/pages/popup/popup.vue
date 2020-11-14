<template>
	<view class="app">
		<wrap title="基础用法">
			<van-cell title="展示弹出层" is-link @click="showBasic" />
			<van-popup :show="show.basic" custom-style="padding: 30px 50px" overlay-style="background-color:rgba(0,0,0,.2)" @close="hideBasic">内容</van-popup>
		</wrap>

		<wrap title="弹出位置">
			<van-cell title="顶部弹出" is-link @click="showTop" />
			<van-cell title="底部弹出" is-link @click="showBottom" />
			<van-cell title="左侧弹出" is-link @click="showLeft" />
			<van-cell title="右侧弹出" is-link @click="showRight" />

			<van-popup :show="show.top" position="top" custom-style="height: 20%" @close="hideTop" />
			<van-popup :show="show.bottom" position="bottom" custom-style="height: 20%" @close="hideBottom" />
			<van-popup :show="show.left" position="left" custom-style="width: 40%; height: 100%" @close="hideLeft" />
			<van-popup :show="show.right" position="right" custom-style="width: 20%; height: 100%" @close="hideRight" />
		</wrap>

		<wrap title="关闭图标">
			<van-cell title="关闭图标" is-link @click="showCloseIcon" />
			<van-cell title="自定义图标" is-link @click="showCustomCloseIcon" />
			<van-cell title="图标位置" is-link @click="showCustomIconPosition" />

			<van-popup :show="show.closeIcon" closeable position="bottom" custom-style="height: 20%" @close="hideCloseIcon" />

			<van-popup :show="show.customCloseIcon" closeable close-icon="close" position="bottom" custom-style="height: 20%" @close="hideCustomCloseIcon" />

			<van-popup :show="show.customIconPosition" closeable close-icon-position="top-left" position="bottom" custom-style="height: 20%" @close="hideCustomIconPosition" />
		</wrap>

		<wrap title="圆角弹窗">
			<van-cell title="圆角弹窗" is-link @click="showRound" />

			<van-popup :show="show.round" round position="bottom" custom-style="height: 20%" @close="hideRound" />
		</wrap>
		<view class="clear-blank"></view>
	</view>
</template>

<script>
import Page from '../../common/page';
import wrap from '@/components/wrap';

export default {
	components: {
		wrap
	},
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
				customIconPosition: false
			}
		};
	},
	methods: {
		toggle(type, show) {
			console.log(type);
			// this.show[type] = !this.show[type];
			this.show[type] = show;
		},
		showBasic() {
			this.toggle('basic', true);
		},

		hideBasic() {
			this.toggle('basic', false);
		},

		showTop() {
			this.toggle('top', true);
		},

		hideTop() {
			this.toggle('top', false);
		},

		showLeft() {
			this.toggle('left', true);
		},

		hideLeft() {
			this.toggle('left', false);
		},

		showRight() {
			this.toggle('right', true);
		},

		hideRight() {
			this.toggle('right', false);
		},

		showBottom() {
			this.toggle('bottom', true);
		},

		hideBottom() {
			this.toggle('bottom', false);
		},

		showRound() {
			this.toggle('round', true);
		},

		hideRound() {
			this.toggle('round', false);
		},

		showCloseIcon() {
			this.toggle('closeIcon', true);
		},

		hideCloseIcon() {
			this.toggle('closeIcon', false);
		},

		showCustomCloseIcon() {
			this.toggle('customCloseIcon', true);
		},

		hideCustomCloseIcon() {
			this.toggle('customCloseIcon', false);
		},

		showCustomIconPosition() {
			this.toggle('customIconPosition', true);
		},

		hideCustomIconPosition() {
			this.toggle('customIconPosition', false);
		}
	},
	components: {}
};
</script>

<style>
:host {
	font-size: 16px;
}

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

.van-button {
	margin: 5px;
}
</style>
