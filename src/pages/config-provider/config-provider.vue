<template>
	<view class="app">

		<wrap title="基础用法">
			ConfigProvider 用于配置组件的主题样式，可以实现定制主题、动态切换主题等效果。
			<gap></gap>
			<van-config-provider :theme-vars="themeVars">
				<van-cell-group>
					<van-field label="评分">
						<view slot="input" style="width: 100%">
							<van-rate :value="rate" data-key="rate" @change="onChange" />
						</view>
					</van-field>
					<van-field label="滑块" :border="false">
						<view slot="input" style="width: 100%">
							<van-slider :value="slider" data-key="slider" @change="onChange" />
						</view>
					</van-field>
				</van-cell-group>

				<view style="margin: 16px">
					<van-button round block type="primary">提交</van-button>
				</view>
			</van-config-provider>
		</wrap>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rate: 4,
				slider: 50,
				themeVars: {
					rateIconFullColor: '#07c160',
					sliderBarHeight: '4px',
					sliderButtonWidth: '20px',
					sliderButtonHeight: '20px',
					sliderActiveBackgroundColor: '#18b566',
					buttonPrimaryBorderColor: '#18b566',
					buttonPrimaryBackgroundColor: '#18b566',
				}
			}
		},
		methods: {
			onChange(event) {
				const {
					key
				} = event.currentTarget.dataset;

				console.log(event)
			}
		}
	}
</script>

<style>

</style>
