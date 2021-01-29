<template>
	<view class="app bg-white">
		<wrap title="基础用法">
			<van-row gutter="20">
				<van-col span="8"><van-image width="100" height="100" :src="src" /></van-col>
				<van-col span="8">
					<van-image radius="10" width="100" height="100" :src="src" @click="onclick" />
					<view class="img-text">点我</view>
				</van-col>
			</van-row>
		</wrap>

		<!-- #ifdef MP-WEIXIN -->
		<wrap title="长按图片显示识别小程序码菜单">
			<van-row gutter="20">
				<van-col span="8">
					<van-image show-menu-by-longpress radius="10" width="100" height="100" :src="src" @load="onload" />
					<view class="img-text">长按我，连接母星中 ㄟ(≧◇≦)ㄏ</view>
				</van-col>
			</van-row>
		</wrap>
		<!-- #endif -->

		<wrap :title="item.name" v-for="(item, index) in types" :key="index">
			<van-row gutter="20">
				<van-col v-for="(fit, key) in fits0" :key="key" custom-class="col" span="8">
					<van-image :round="item.round" :fit="fit" width="100%" height="27vw" :src="src" />
					<view class="img-text">{{ fit }}</view>
				</van-col>
			</van-row>
			<van-row gutter="20">
				<van-col v-for="(fit, key) in fits1" :key="key" custom-class="col" span="8">
					<van-image :round="item.round" :fit="fit" width="100" height="100" :src="src" />
					<view class="img-text">{{ fit }}</view>
				</van-col>
			</van-row>
			<van-row gutter="20">
				<van-col v-for="(fit, key) in fits2" :key="key" custom-class="col" span="8">
					<van-image :round="item.round" :fit="fit" width="100" height="100" :src="src" />
					<view class="img-text">{{ fit }}</view>
				</van-col>
			</van-row>
		</wrap>

		<wrap title="加载中提示">
			<van-row gutter="20">
				<van-col span="8">
					<van-image width="100%" height="27vw" />
					<view class="img-text">默认提示</view>
				</van-col>

				<van-col span="8">
					<van-image width="100%" height="27vw" use-loading-slot><van-loading slot="loading" type="spinner" size="20" vertical /></van-image>
					<view class="img-text">自定义提示</view>
				</van-col>
			</van-row>
		</wrap>

		<wrap title="加载失败提示">
			<van-row gutter="20">
				<van-col span="8">
					<van-image width="100%" height="27vw" src="undefinedpath" />
					<view class="img-text">默认提示</view>
				</van-col>

				<van-col span="8">
					<van-image width="100%" height="27vw" src="undefinedpath" use-error-slot @error="onerror"><text slot="error">加载失败</text></van-image>
					<view class="img-text">自定义提示</view>
				</van-col>
			</van-row>
		</wrap>
		<wrap title="自定义样式">
			<van-row gutter="20">
				<van-col span="8"><van-image width="100" height="100" custom-class="cus-root" image-class="cus-image" :src="sampleImgPath" /></van-col>
			</van-row>
		</wrap>
		<view class="clear-blank"></view>
	</view>
</template>

<script>
import wrap from '@/components/wrap';
export default {
	components: {
		wrap
	},
	data() {
		return {
			types: [{ name: '填充模式', round: false }, { name: '圆形图片', round: true }],
			fits: ['contain', 'cover', 'fill', 'none', 'scale-down', 'widthFix', 'heightFix'],
			fits0: ['contain', 'cover', 'fill'],
			fits1: ['none', 'scale-down', 'widthFix'],
			fits2: ['heightFix'],
			src: 'https://img.yzcdn.cn/vant/cat.jpeg',
			sampleImgPath: require('../../static/sample1.png')
		};
	},
	methods: {
		onclick(event) {
			console.log('点击图片时触发', event);
		},
		onload(event) {
			console.log('图片加载完毕时触发', event);
		},
		onerror(event) {
			console.log('图片加载失败时触发', event);
		}
	}
};
</script>

<style lang="scss">
.bg-white {
	background-color: #ffffff !important;
}
.img-text {
	text-align: center;
	height: 36px;
	color: #646566;

	font-size: 12px;
	line-height: 18px;
}

.cus-root {
	border: #007aff 4rpx solid;
}
.cus-image {
	opacity: 0.5;
}
</style>
