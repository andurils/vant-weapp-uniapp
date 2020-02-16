<template>
	<div class="app"> 

		<view class="">
			基础用法
		</view>
		<van-search :value="value" placeholder="请输入搜索关键词" @change="onChange" />

		<view class="">
			监听对应事件
		</view>
		<van-search :value="value" show-action placeholder="请输入搜索关键词" @change="onChange" @search="onSearch" @cancel="onCancel"
		 @clear="onClear" />


		<view class="">
			搜索框内容对齐
		</view>
		<van-search :value="value" placeholder="请输入搜索关键词" input-align="center" />

		<view class="">
			禁用搜索框
		</view>
		<van-search :value="value" placeholder="请输入搜索关键词" disabled />


		<view class="">
			自定义背景色
		</view>
		<van-search :value="value" placeholder="请输入搜索关键词" shape="round" background="#c8c9cc" />

		<view class="">
			自定义行动按钮
		</view>
		<van-search :value="value" placeholder="请输入搜索关键词" label="地址" :use-action-slot="true" @change="onChange" @search="onSearch">
			<view slot="action" @tap="onSearch">搜索</view>
		</van-search>
	</div>
</template>

<script>
	import Page from '../../common/page';
	export default {
		data() {
			return {
				value: '',
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
						icon: 'none',
					});
				}
			},

			onCancel() {
				uni.showToast({
					title: '取消',
					icon: 'none',
				});
			},

			onClear() {
				uni.showToast({
					title: '清空',
					icon: 'none',
				});
			},
		},
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
