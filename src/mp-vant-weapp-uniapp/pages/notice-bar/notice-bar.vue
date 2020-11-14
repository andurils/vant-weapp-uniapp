<template>
	<view class="app">
		<wrap title="基础用法">
			<van-notice-bar :text="text" left-icon="volume-o" />
			<!--CDN图片 //img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png -->
		</wrap>

		<wrap title="禁用滚动"><van-notice-bar :scrollable="false" :text="text" /></wrap>

		<wrap title="多行展示"><van-notice-bar wrapable :scrollable="false" :text="text" /></wrap>

		<wrap title="使用左右插槽">
			<van-notice-bar :text="text" custom-class="demo-margin-bottom">
				<text slot="left-icon">[公告]</text>
				<text slot="right-icon">[结束]</text>
			</van-notice-bar>

			<van-notice-bar :text="text" backgroundColor="#ECF9FF" color="#258FFA" custom-class="demo-margin-bottom">
				<view slot="left-icon">
					<van-icon name="info-o" custom-class="demo-image" />
					自定义
				</view>
				<!-- <text slot="right-icon">[结束]</text> -->
			</van-notice-bar>
			<van-notice-bar :text="text" backgroundColor="#ECF9FF" color="#258FFA" left-icon="info-o" />
		</wrap>

		<wrap title="通告栏模式">
			<!-- closeable 模式，在右侧显示关闭按钮 -->
			<van-notice-bar mode="closeable" :text="text" custom-class="demo-margin-bottom" />
			<van-notice-bar mode="link" :text="text" @click="onClick" :url="homeUrl" />
		</wrap>

		<wrap title="自定义滚动速率">
			<van-notice-bar :text="text" :speed="speedValue" left-icon="volume-o" />
			<wrap :title="'滚动速率' + speedValue + 'px/s'">
				<van-slider :value="speedValue" use-button-slot @drag="onDrag" active-color="#ee0a24">
					<view class="custom-button" slot="button">{{ speedValue }}</view>
				</van-slider>
			</wrap>
		</wrap>
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
			text: '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力',
			speedValue: 58,
			homeUrl: '/pages/dashboard/dashboard'
		};
	},
	methods: {
		onClick(e) {
			console.log(e);
		},
		onDrag(event) {
			this.speedValue = event.detail.value;
		}
	}
};
</script>

<style>
.demo-margin-bottom {
	margin-bottom: 8px;
}

.demo-image {
	color: #07c160;
}

.custom-button {
	width: 26px;
	color: #fff;
	font-size: 10px;
	line-height: 18px;
	text-align: center;
	border-radius: 100px;
	background-color: #ee0a24;
}
</style>
