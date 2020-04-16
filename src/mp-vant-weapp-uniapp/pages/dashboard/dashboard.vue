<template>
	<view class="container">
		<view class="title">
			<image class="logo" src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png" />
			<view class="title-text">Vant Weapp</view>
		</view>
		<view class="desc">轻量、可靠的小程序 UI 组件库</view>

		<view v-for="(group,index) in list" :key="index">
			<view class="mobile-nav">
				<view class="mobile-nav__title">{{ group.groupName }}({{group.list.length}})</view>
				<van-cell-group>
					<van-cell v-for="(item,key) in group.list" :key="key" is-link :url="'/pages' + item.path + item.path" :title="item.title" ></van-cell>
				</van-cell-group>
			</view>
		</view>
	</view>

</template>

<script>
	import list from '../../config';
	import Page from '../../common/page';
	export default {
		data() {
			return {
				list
			}
		},
		onLoad() {
			// console.log(list);
		},
		methods: {

		}
	}
</script>

<style>
	.container {
		padding: 80px 15px 0;
		background-color: #F8F8F8;
	}

	.title {
		margin: 0 0 15px;
		text-align: center;
		user-select: none;
	}

	.logo,
	.title-text {
		display: inline-block;
		vertical-align: middle;
	}

	.title-text {
		font-size: 32px;
		margin-left: 15px;
		font-weight: 400;
		font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
	}

	.logo {
		width: 36px;
		height: 36px;
	}

	.desc {
		font-size: 14px;
		color: #455a64;
		margin: 0 0 60px;
		text-align: center;
	}

	.mobile-nav {
		margin-bottom: 20px;
	}

	.mobile-nav__title {
		font-size: 16px;
		background-color: #fff;
		padding: 17px 15px;
	}
</style>
