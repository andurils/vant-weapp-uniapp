<template>
	<view>
		<wrap title="基础用法">
		</wrap>
		<van-tabs :active="1" @change="onChange">
			<van-tab v-for="(item,index) in tabs" :key="index" :title="'标签' + item">
				<view class="content">
					{{ '内容' + item }}
				</view>
			</van-tab>
		</van-tabs>

		<wrap title="通过名称匹配">
		</wrap>
		<van-tabs active="a">
			<van-tab v-for="(item,index) in tabsNames" :key="index" :title="'标签' + (index+1)" :name="item">
				<view class="content">
					{{ '内容' + (index+1) }}
				</view>
			</van-tab>
		</van-tabs>

		<wrap title="横向滚动">
		</wrap>
		<van-tabs :active="1">
			<van-tab v-for="(item,index) in tabsMore" :key="index" :title="'标签' + item">
				<view class="content">
					{{ '内容' + item }}
				</view>
			</van-tab>
		</van-tabs>

		<wrap title="禁用标签">
		</wrap>
		<van-tabs @disabled="onClickDisabled">
			<van-tab v-for="(item,index) in tabs" :key="index" :disabled="index === 1" :title="'标签' + item">
				<view class="content">
					{{ '内容' + item }}
				</view>
			</van-tab>
		</van-tabs>

		<wrap title="粘性布局">
		</wrap>
		<van-tabs sticky>
			<van-tab v-for="(item,index) in tabs" :key="index" :title="'标签' + item">
				<view class="content">
					{{ '内容' + item }}
				</view>
			</van-tab>
		</van-tabs>

		<wrap title="样式风格">
		</wrap>
		<van-tabs type="card">
			<van-tab v-for="(item,index) in tabs" :key="index" :title="'标签' + item">
				<view class="content-2">
					{{ '内容' + item }}
				</view>
			</van-tab>
		</van-tabs>


		<wrap title="点击事件">
		</wrap>
		<van-tabs @click="onClick">
			<van-tab v-for="(item,index) in tabs" :key="index" :title="'标签' + item">
				<view class="content">
					{{ '内容' + item }}
				</view>
			</van-tab>
		</van-tabs>





		<wrap title="切换动画">
		</wrap>
		<van-tabs animated>
			<van-tab v-for="(item,index) in tabs" :key="index" :title="'标签' + item">
				<view class="content" style="height: 100px;">
					{{ '内容' + item }}
				</view>
			</van-tab>
		</van-tabs>


		<wrap title="滑动切换">
		</wrap>
		<van-tabs swipeable>
			<van-tab v-for="(item,index) in tabs" :key="index" :title="'标签' + item">
				<view class="content">
					{{ '内容' + item }}
				</view>
			</van-tab>
		</van-tabs>

		<wrap title="自定义标题">
		</wrap>
		<van-tabs :active="1" @change="onChange" tab-class="tab-class" tab-active-class="tab-active-class">
			<van-icon slot="nav-right" name="search" custom-class="right-nav" @click="onClickNavRight" />
			<van-tab v-for="(item,index) in tabs" :key="index" :title="'标签' + item" :dot="index === 1" :info="index === 2 ? 99 : null">
				<view class="content">
					{{ '内容' + item }}
				</view>
			</van-tab>
		</van-tabs>

	</view>
</template>

<script>
	import Page from '../../common/page';

	export default {
		data() {
			return {
				tabs: [1, 2, 3, 4],
				tabsNames: ['a', 'b', 'c'],
				tabsMore: [1, 2, 3, 4, 5, 6, 7, 8]
			}
		},
		onLoad() {},
		methods: {
			onClickDisabled(event) {
				wx.showToast({
					title: `标签 ${event.detail.index + 1} 已被禁用`,
					icon: 'none'
				});
			},

			onChange(event) {
				wx.showToast({
					title: `切换到标签 ${event.detail.index + 1}`,
					icon: 'none'
				});
			},

			onClickNavRight() {
				wx.showToast({
					title: '点击right nav',
					icon: 'none'
				});
			},

			onClick(event) {
				wx.showToast({
					title: `点击标签 ${event.detail.index + 1}`,
					icon: 'none'
				});
			}
		}
	}
</script>

<style>
	.content {
		padding: 20px;
		background-color: #fff;
	}

	.content-2 {
		padding: 20px;
	}

	.right-nav {
		padding: 0 10px;
		line-height: 44px !important;
	}

	.tab-class {
		transition: all 0.25s ease-in-out;
	}

	.tab-active-class {
		font-size: 1.05em !important;
		color: #1989fa !important;
	}
</style>
