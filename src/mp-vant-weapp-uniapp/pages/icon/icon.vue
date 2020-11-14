<template>
	<div class="app">
		<van-tabs sticky :active="active" @change="onSwitch">
			<van-tab title="用法示例">
				<wrap title="基础用法">
					<van-icon name="close" size="32px" class="demo-margin-right" />
					<van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" size="32px" />
				</wrap>
				<wrap title="提示信息">
					<van-icon name="chat-o" dot size="32px" class="demo-margin-right" />
					<van-icon name="chat-o" info="9" size="32px" class="demo-margin-right" />
					<van-icon name="chat-o" info="99+" size="32px" />
				</wrap>
				<wrap title="图标颜色">
					<van-icon name="chat-o" color="red" size="32px" class="demo-margin-right" />
					<van-icon name="chat-o" color="green" size="32px" />
				</wrap>
				<wrap title="图标大小">
					<van-icon name="chat-o" size="32px" class="demo-margin-right" />
					<van-icon name="chat-o" size="50px" />
				</wrap>
			</van-tab>
			<van-tab title="基础图标">
				<van-col v-for="(v, key) in basic" :key="key" custom-class="col" span="6" :data-key="v" @tap="clickCopy">
					<van-icon :name="v" size="32px" custom-class="icon" />
					<view class="icon-text">{{ v }}</view>
				</van-col>
			</van-tab>
			<van-tab title="线框风格">
				<van-col v-for="(v, key) in outline" :key="key" custom-class="col" span="6" :data-key="v" @tap="clickCopy">
					<van-icon :name="v" size="32px" custom-class="icon" />
					<view class="icon-text">{{ v }}</view>
				</van-col>
			</van-tab>
			<van-tab title="实底风格">
				<van-col v-for="(v, key) in filled" :key="key" custom-class="col" span="6" :data-key="v" @tap="clickCopy">
					<van-icon :name="v" size="32px" custom-class="icon" />
					<view class="icon-text">{{ v }}</view>
				</van-col>
			</van-tab>
		</van-tabs>
		<van-notify id="van-notify" />
	</div>
</template>

<script>
import wrap from '@/components/wrap';
// npm i @vant/icons -S
import icons from '@vant/icons/src/config';
// import icons from '@/components/@vant/icons/src/config';
import Notify from '@/wxcomponents/vant/notify/notify';

const basic = icons.basic;
const outline = icons.outline;
const filled = icons.filled;
export default {
	components: {
		wrap
	},
	data() {
		return {
			basic,
			outline,
			filled,
			active: 0
		};
	},
	methods: {
		onSwitch(event) {
			this.active = event.detail.index;
		},
		clickCopy(event) {
			const { key } = event.currentTarget.dataset;
			let componentEx = `<van-icon name="${key}" />`;

			Notify({ type: 'success', message: '复制成功: ' + componentEx });
			uni.setClipboardData({
				data: componentEx,
				success: function() {
					console.log('copy success');
				}
			});
		}
	}
};
</script>

<style lang="scss">
.col {
	text-align: center;
	height: 100px;
	float: none;
	display: inline-block;
	vertical-align: middle;
}

.icon {
	display: block;
	margin: 15px 0;
	color: rgba(69, 90, 100, 0.8);
}

.icon-text {
	height: 36px;
	color: #646566;
	font-size: 12px;
	line-height: 18px;
}
</style>
