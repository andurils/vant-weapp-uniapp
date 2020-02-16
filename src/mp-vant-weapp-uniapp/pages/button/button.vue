<template>
	<view>
		<!-- <cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">button</block>
		</cu-custom> -->

		<wrap title="按钮类型" padding>
			<view class="row">
				<van-button class="demo-margin-right" @click="onClick">默认按钮</van-button>
				<van-button type="primary" class="demo-margin-right">主要按钮</van-button>
				<van-button type="info" class="demo-margin-right">信息按钮</van-button>
			</view>
			<van-button type="danger" class="demo-margin-right">危险按钮</van-button>
			<van-button type="warning">警告按钮</van-button>
		</wrap>

		<wrap title="朴素按钮" padding>
			<van-button type="primary" plain class="demo-margin-right">朴素按钮</van-button>
			<van-button type="info" plain>朴素按钮</van-button>
		</wrap>

		<wrap title="细边框" padding>
			<van-button type="primary" plain hairline class="demo-margin-right">细边框按钮</van-button>
			<van-button type="info" plain hairline>细边框按钮</van-button>
		</wrap>

		<wrap title="禁用状态" padding>
			<van-button type="primary" disabled class="demo-margin-right" @click="onClick">禁用状态</van-button>
			<van-button type="info" disabled>禁用状态</van-button>
		</wrap>

		<wrap title="加载状态" padding>
			<van-button loading type="primary" class="demo-margin-right" />
			<van-button loading type="primary" loading-type="spinner" />
			<van-button loading type="info" loading-text="加载中..." />
		</wrap>

		<wrap title="图标按钮" padding>
			<van-button icon="star-o" type="primary" />
			<van-button icon="star-o" type="primary">按钮</van-button>
			<van-button icon="https://img.yzcdn.cn/vant/logo.png" type="info">按钮</van-button>
		</wrap>

		<wrap title="按钮形状" padding>
			<van-button type="primary" square class="demo-margin-right">方形按钮</van-button>
			<van-button type="danger" round>圆形按钮</van-button>
		</wrap>



		<wrap title="按钮尺寸" padding>
			<van-button type="primary" size="large">大号按钮</van-button>
			<van-button type="primary" size="normal">普通按钮</van-button>
			<van-button type="primary" size="small">小型按钮</van-button>
			<van-button type="primary" size="mini">迷你按钮</van-button>
		</wrap>

		<wrap title="块级元素">
			<van-button type="primary" block>块级元素</van-button>
		</wrap>

		<wrap title="自定义颜色">
			<van-button color="#7232dd">单色按钮</van-button>
			<van-button color="#7232dd" plain>单色按钮</van-button>
			<van-button color="linear-gradient(to right, #4bb0ff, #6149f6)">渐变色按钮</van-button>
		</wrap>

		<wrap title="页面导航">
			//TODO
		</wrap>

	</view>
</template>

<script>
	import Page from '../../common/page';

	export default {
		data() {
			return {

			}
		},
		onLoad() {},
		methods: {
			onClick() {
				console.log("11"); //TODO 进不来
				uni.showToast({
					title: '点击返回',
					icon: 'none'
				});
			},
		}
	}
</script>

<style>
	.row {
		height: 44px;
		margin-bottom: 15px;
	}
</style>
