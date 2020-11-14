<template>
	<view class="app">
		<wrap title="基础用法"><van-count-down :time="time" /></wrap>

		<wrap title="自定义格式"><van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" /></wrap>

		<wrap title="毫秒级渲染"><van-count-down millisecond :time="time" format="HH:mm:ss:SSS" /></wrap>

		<wrap title="自定义样式">
			<van-count-down use-slot :time="time" @change="onChange">
				<text class="item">{{ timeData.hours }}</text>
				<text class="item">{{ timeData.minutes }}</text>
				<text class="item">{{ timeData.seconds }}</text>
			</van-count-down>
		</wrap>

		<wrap title="手动控制">
			<van-count-down class="control-count-down" millisecond :time="3000" :auto-start="false" format="ss:SSS" @finish="finished" />

			<van-grid clickable column-num="3">
				<van-grid-item text="开始" icon="play-circle-o" @click="start" />
				<van-grid-item text="暂停" icon="pause-circle-o" @click="pause" />
				<van-grid-item text="重置" icon="replay" @click="reset" />
			</van-grid>
		</wrap>

		<van-toast id="van-toast" />
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
			time: 30 * 60 * 60 * 1000,
			timeData: {}
		};
	},
	computed: {},
	methods: {
		onChange(e) {
			this.timeData = e.detail;
		},

		start() {
			const countDown = this.selectComponent('.control-count-down');
			countDown.start();
		},

		pause() {
			const countDown = this.selectComponent('.control-count-down');
			countDown.pause();
		},

		reset() {
			const countDown = this.selectComponent('.control-count-down');
			countDown.reset();
		},

		finished() {
			this.$toast('倒计时结束');
		}
	}
};
</script>

<style>
.van-count-down {
	margin: 0 16px 10px;
}

.item {
	display: inline-block;
	width: 22px;
	margin-right: 5px;
	color: #fff;
	font-size: 12px;
	text-align: center;
	background-color: #1989fa;
	border-radius: 2px;
}
</style>
