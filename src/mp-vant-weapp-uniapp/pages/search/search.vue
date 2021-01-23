<template>
	<view class="app">
		<wrap title="基础用法"></wrap>
		<van-search :value="value" placeholder="请输入搜索关键词" @change="onChange" />

		<wrap title="监听对应事件"></wrap>
		<van-search :value="value" show-action placeholder="请输入搜索关键词" @change="onChange" @search="onSearch" @cancel="onCancel" @clear="onClear" />

		<wrap title="搜索框内容对齐"></wrap>
		<van-search :value="value" placeholder="请输入搜索关键词" input-align="center" />

		<wrap title="禁用搜索框"></wrap>
		<van-search :value="value" placeholder="请输入搜索关键词" left-icon="hot-o" right-icon="share-o" disabled />

		<wrap title="自定义背景色"></wrap>
		<van-search :value="value" placeholder="请输入搜索关键词" shape="round" background="#4fc08d" />

		<wrap title="自定义行动按钮"></wrap>
		<van-search label="地址" :value="value" placeholder="请输入搜索关键词" :use-action-slot="true" @change="onChange" @search="onSearch">
			<view slot="action" @tap="onSearch">搜索</view>
		</van-search>

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
			value: ''
		};
	},
	methods: {
		onChange(event) {
			this.value = event.detail;
		},
		onSearch(event) {
			if (this.value) {
				uni.showToast({
					title: '搜索：' + this.value,
					icon: 'none'
				});
			}
		},

		onCancel() {
			uni.showToast({
				title: '取消',
				icon: 'none'
			});
		},

		onClear() {
			uni.showToast({
				title: '清空',
				icon: 'none'
			});
		}
	}
};
</script>

<style>
.demo-radio-group {
	padding: 0 17px;
}

.demo-radio {
	margin-bottom: 10px;
}
</style>
