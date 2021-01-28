<template>
	<view class="app">
		<wrap title="基础用法"></wrap>
		<van-steps :steps="steps" :active="active" custom-class="demo-margin-bottom" @click-step="clickSet" />

		<van-button custom-class="demo-margin-left" @click="nextStep">下一步</van-button>

		<wrap title="自定义图标"></wrap>
		<van-steps :steps="self_steps" :active="active" @click-step="clickSet" />

		<wrap title="自定义样式"></wrap>
		<van-steps :steps="steps" :active="active" active-icon="success" active-color="#38f" inactive-icon="arrow"
		 @click-step="clickSet" />


		<wrap title="竖向步骤条"></wrap>
		<van-steps :steps="steps" :active="active" direction="vertical" active-color="#f44" @click-step="clickSet" />


		<view class="clear-blank"></view>
		<van-toast id="van-toast" />

	</view>
</template>

<script>
	import Page from '../../common/page';
	import wrap from '@/components/wrap';
	import Toast from '@/wxcomponents/vant/toast/toast';
	export default {
		components: {
			wrap
		},
		data() {
			return {
				active: 0,
				steps: [{
						text: '步骤一',
						desc: '描述信息'
					},
					{
						text: '步骤二',
						desc: '描述信息'
					},
					{
						text: '步骤三',
						desc: '描述信息'
					},
					{
						text: '步骤四',
						desc: '描述信息'
					}
				],
				self_steps: [{
						text: '步骤一',
						desc: '描述信息',
						inactiveIcon: 'location-o',
						activeIcon: 'success',
					},
					{
						text: '步骤二',
						desc: '描述信息',
						inactiveIcon: 'like-o',
						activeIcon: 'plus',
					},
					{
						text: '步骤三',
						desc: '描述信息',
						inactiveIcon: 'star-o',
						activeIcon: 'cross',
					},
					{
						text: '步骤四',
						desc: '描述信息',
						inactiveIcon: 'phone-o',
						activeIcon: 'fail',
					},
				],
			};
		},
		methods: {
			nextStep() {
				this.active = ++this.active % 4;
			},
			clickSet(event) {
				Toast(`click steps index-${event.detail}`)
				this.active = event.detail;
			}
		}
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
