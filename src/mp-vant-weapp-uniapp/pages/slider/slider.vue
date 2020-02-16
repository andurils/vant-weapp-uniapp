<template>
	<view class="app"> 
		<wrap title="基础用法">
			<van-slider custom-class="slider" value="50" @change="onChange" />
		</wrap>

		<wrap title="指定选择范围">
			<van-slider custom-class="slider" value="0" min="-50" max="50" @change="onChange" />
		</wrap>

		<wrap title="禁用">
			<van-slider custom-class="slider" value="50" :disabled="true" />
		</wrap>

		<wrap title="指定步长">
			<van-slider custom-class="slider" value="50" step="10" bar-height="4px" @change="onChange" />
		</wrap>
		<wrap title="自定义样式">
			<van-slider value="50" bar-height="4px" active-color="#ee0a24" />
		</wrap>
		<wrap title="自定义按钮">
			<van-slider :value="currentValue" use-button-slot @drag="onDrag" active-color="#ee0a24">
				<view class="custom-button" slot="button">
					{{ currentValue }}
				</view>
			</van-slider>
		</wrap>
	</view>
</template>

<script>
	import Page from '../../common/page';
	export default {
		data() {
			return {
				value: '',
				currentValue: 50
			};
		},
		methods: {
			onChange(event) {
				uni.showToast({
					icon: 'none',
					title: `当前值：${event.detail}`,
				});
			},
			onDrag(event) {
				this.currentValue = event.detail.value;
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
