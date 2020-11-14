<template>
	<view class="app">
		<wrap title="基础用法"><van-area :value="value" :loading="loading" :area-list="areaList" @change="onChange" @confirm="onConfirm" @cancel="onCancel" /></wrap>

		<wrap title="选中省市县"><van-area :value="value" :loading="loading" :area-list="areaList" @change="onChange" @confirm="onConfirm" /></wrap>

		<wrap title="配置显示列"><van-area title="标题" :columns-num="2" :loading="loading" :area-list="areaList" @change="onChange" @confirm="onConfirm" /></wrap>

		<wrap title="配置列占位提示文字"><van-area :loading="loading" :area-list="areaList" :columns-placeholder="['请选择', '请选择', '请选择']" title="标题" /></wrap>

		<van-toast id="van-toast" />
	</view>
</template>

<script>
import Page from '../../common/page';
import areaData from './area.js';
import wrap from '@/components/wrap';
export default {
	components: {
		wrap
	},
	data() {
		return {
			areaList: {},
			loading: true,
			value: 330302
		};
	},
	onLoad() {},
	methods: {
		onShow() {
			this.loading = false;
			this.areaList = areaData;
			// uni.request({
			// 	url: 'https://cashier.youzan.com/wsctrade/uic/address/getAllRegion.json',
			// 	success: response => {
			// 		this.loading = false
			// 		this.areaList = response.data.data
			// 	}
			// });
		},

		onChange(event) {
			const { values } = event.detail;

			this.$toast(values.map(item => item.name).join('-'));
		},

		onConfirm(event) {
			console.log(event);
			this.$toast('Confirm');
		},

		onCancel(event) {
			console.log(event);
			this.$toast('Cancel');
		}
	}
};
</script>

<style></style>
