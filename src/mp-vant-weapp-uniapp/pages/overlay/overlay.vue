<template>
	<view class="app">
		<wrap title="基础用法" padding>
			<van-button type="primary" @click="onClickShow">显示遮罩层</van-button>
			<van-overlay :show="show" @click="onClickHide" />
		</wrap>

		<wrap title="嵌入内容" padding>
			<van-button type="primary" @click="onClickShowEmbedded">嵌入内容</van-button>
			<van-overlay :show="showEmbedded" @click="onClickHideEmbedded">
				<view class="wrapper"><div class="block" @tap="noop" /></view>
			</van-overlay>
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
			StatusBar: this.StatusBar,
			CustomBar: this.CustomBar,
			show: false,
			showEmbedded: false
		};
	},
	methods: {
		onClickShow() {
			this.show = true;
		},

		onClickHide() {
			this.show = false;
		},

		onClickShowEmbedded() {
			this.showEmbedded = true;
		},

		onClickHideEmbedded() {
			this.showEmbedded = false;
		},

		noop(event) {
			console.log(event);
		}
	}
};
</script>

<style>
.wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
}

.block {
	width: 120px;
	height: 120px;
	background-color: #fff;
}
</style>
