<template>
	<view class="app">
		<wrap title="单选模式">
			<van-tree-select :items="items" :main-active-index="mainActiveIndex" :active-id="activeId" @clickItem="onClickItem"
			 @clickNav="onClickNav"></van-tree-select>
		</wrap>


		<wrap title="多选模式">
			<van-tree-select max="4" :items="items" :main-active-index="mainActiveIndexMulti" :active-id="activeIdMulti"
			 @click-item="onClickItemMulti" @click-nav="onClickNavMulti"></van-tree-select>
		</wrap>

		<wrap title="自定义内容">
			<van-tree-select :items="[{ text: '分组 1',info:20 }, { text: '分组 2' }]" height="55vw" :main-active-index="mainActiveIndex"
			 :active-id="activeId" @click-item="onClickItem" @click-nav="onClickNav">
				<van-image v-if="mainActiveIndex === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" width="100%" height="100%" slot="content" />
				<van-image v-if="mainActiveIndex === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" width="100%" height="100%" slot="content" />
			</van-tree-select>
		</wrap>
	</view>
</template>

<script>
	import Page from '../../common/page';
	import config from './config';
	export default {
		data() {
			return {
				items: [{
					text: '所有城市',
					children: [...config.pro1, ...config.pro2]
				}, {
					text: config.pro1Name,
					children: config.pro1
				}, {
					text: config.pro2Name,
					children: config.pro2
				}, {
					text: config.pro3Name,
					disabled: true,
					children: config.pro3
				}],
				mainActiveIndex: 0,
				activeId: 0,
				mainActiveIndexMulti: 0,
				activeIdMulti: []
			};
		},
		methods: {

			onClickNav(event) {
				const {
					detail
				} = event;
				this.mainActiveIndex = detail.index || 0;
			},

			onClickItem(event) {
				const {
					detail
				} = event;
				this.activeId = this.activeId === detail.id ? null : detail.id;
			},

			onClickNavMulti(event) {
				console.log(event);
				const {
					detail
				} = event;
				this.mainActiveIndexMulti = detail.index || 0;
			},

			onClickItemMulti(event) {
				console.log(event);

				const {
					detail
				} = event;

				const idx = this.activeIdMulti.indexOf(detail.id);
				if (idx > -1) {
					this.activeIdMulti.splice(idx, 1);
				} else {
					this.activeIdMulti.push(detail.id);
				}
			}
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
