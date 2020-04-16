<template>
	<view class="app">
		<wrap title="基础用法">
			<van-row>
				<van-image width="100" height="100" :src="src" />
			</van-row>
		</wrap>

		<wrap title="填充模式">
			<van-row gutter="20">
				<van-col v-for="(fit, key) in fits" :key="key" custom-class="col" span="8">
					<van-image :fit="fit" width="100%" height="27vw" :src="src" />
					<view class="text">{{ fit }}</view>
				</van-col>
			</van-row>
		</wrap>

		<wrap title="圆形图片">
			<van-row gutter="20">
				<van-col v-for="(fit, key) in fits" :key="key" custom-class="col" span="8">
					<van-image round :fit="fit" width="100%" height="27vw" :src="src" />
					<view class="text">{{ fit }}</view>
				</van-col>

			</van-row>
		</wrap>

		<wrap title="加载中提示">
			<van-row gutter="20">
				<van-col span="8">
					<van-image width="100%" height="27vw" />
					<view class="text">默认提示</view>
				</van-col>

				<van-col span="8">
					<van-image width="100%" height="27vw" use-loading-slot>
						<van-loading slot="loading" type="spinner" size="20" vertical />
					</van-image>
					<view class="text">自定义提示</view>
				</van-col>
			</van-row>
		</wrap>

		<wrap title="加载失败提示">
			<van-row gutter="20">
				<van-col span="8">
					<van-image width="100%" height="27vw" src="x" />
					<view class="text">默认提示</view>
				</van-col>

				<van-col span="8">
					<van-image width="100%" height="27vw" src="x" use-error-slot>
						<text slot="error">加载失败</text>
					</van-image>
					<view class="text">自定义提示</view>
				</van-col>
			</van-row>
		</wrap>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fits: ['contain', 'cover', 'fill', 'none', 'scale-down'],
				src: 'https://img.yzcdn.cn/vant/cat.jpeg',
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
