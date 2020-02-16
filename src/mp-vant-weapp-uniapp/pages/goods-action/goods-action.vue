<template>
	<div class="goods-action-wrapper">
		<wrap title="基础用法">
		</wrap>
		<van-goods-action class="action-wrapper">
			<van-goods-action-icon icon="chat" text="客服" @click="onClickIcon" />
			<van-goods-action-icon icon="cart" text="购物车" @click="onClickIcon" />
			<van-goods-action-button text="加入购物车" type="warning" @click="onClickButton" />
			<van-goods-action-button text="立即购买" @click="onClickButton" />
		</van-goods-action>

		<wrap title="图标提示">
		</wrap>
		<van-goods-action class="action-wrapper">
			<van-goods-action-icon icon="chat" text="客服" />
			<van-goods-action-icon icon="cart" text="购物车" info="5" />
			<van-goods-action-icon icon="shop" text="店铺" />
			<van-goods-action-button text="加入购物车" type="warning" />
			<van-goods-action-button text="立即购买" />
		</van-goods-action>

		<wrap title="自定义按钮颜色">
		</wrap>
		<van-goods-action class="action-wrapper">
			<van-goods-action-icon icon="chat-o" text="客服" />
			<van-goods-action-icon icon="cart-o" text="购物车" info="5" />
			<van-goods-action-icon icon="shop-o" text="店铺" />
			<van-goods-action-button color="#7232dd" text="加入购物" type="warning" />
			<van-goods-action-button plain color="#7232dd" text="立即购买" />
		</van-goods-action>

		<van-toast id="van-toast" />
	</div>
</template>
<script>
	import Page from '../../common/page';
	export default {
		methods: {
			onClickIcon() {
				this.$toast('点击图标');
			},
			onClickButton() {
				this.$toast('点击按钮');
			},
		},
	};
</script>
<style>
	.action-wrapper .van-goods-action {
		position: static;
	}
</style>
