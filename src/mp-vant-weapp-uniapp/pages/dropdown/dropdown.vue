<template>
	<view class="app">
		<wrap title="基础用法"></wrap>
		<van-dropdown-menu>
			<van-dropdown-item :value="value1" :options="option1" />
			<van-dropdown-item :value="value2" :options="option2" />
		</van-dropdown-menu>

		<wrap title="自定义菜单内容"></wrap>
		<van-dropdown-menu z-index="20">
			<van-dropdown-item :value="value1" :options="option1" />
			<van-dropdown-item id="item" :title="itemTitle">
				<van-cell :title="switchTitle1"><van-switch slot="right-icon" size="24px" style="height: 26px" :checked="switch1" @change="onSwitch1Change" /></van-cell>
				<van-cell :title="switchTitle2"><van-switch slot="right-icon" size="24px" style="height: 26px" :checked="switch2" @change="onSwitch2Change" /></van-cell>
				<van-button type="info" block @click="onConfirm">确定</van-button>
			</van-dropdown-item>
		</van-dropdown-menu>

		<wrap title="自定义选中状态颜色"></wrap>
		<van-dropdown-menu active-color="#ee0a24" z-index="20">
			<van-dropdown-item :value="value1" :options="option1" />
			<van-dropdown-item :value="value2" :options="option2" />
		</van-dropdown-menu>

		<wrap title="向上展开"></wrap>
		<van-dropdown-menu direction="up" z-index="20">
			<van-dropdown-item :value="value1" :options="option1" />
			<van-dropdown-item :value="value2" :options="option2" />
		</van-dropdown-menu>

		<wrap title="禁用菜单"></wrap>
		<van-dropdown-menu>
			<van-dropdown-item :value="value1" disabled :options="option1" />
			<van-dropdown-item :value="value2" disabled :options="option2" />
		</van-dropdown-menu>
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
			switchTitle1: '包邮',
			switchTitle2: '团购',
			itemTitle: '筛选',
			option1: [
				{
					text: '全部商品',
					value: 0
				},
				{
					text: '新款商品',
					value: 1
				},
				{
					text: '活动商品',
					value: 2
				}
			],
			option2: [
				{
					text: '默认排序',
					value: 'a'
				},
				{
					text: '好评排序',
					value: 'b'
				},
				{
					text: '销量排序',
					value: 'c'
				}
			],
			switch1: true,
			switch2: false,
			value1: 0,
			value2: 'a'
		};
	},
	onLoad() {},
	methods: {
		onConfirm() {
			this.selectComponent('#item').toggle(false);
		},

		onSwitch1Change(event) {
			const { detail } = event;
			this.switch1 = detail;
		},

		onSwitch2Change(event) {
			const { detail } = event;
			this.switch2 = detail;
		}
	}
};
</script>

<style></style>
