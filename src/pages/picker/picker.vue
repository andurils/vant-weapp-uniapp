<template>
	<view class="app">
		<wrap title="基础用法">
			<view class="wrap-content ">
				<van-picker :columns="column1" @change="onChange1" />
			</view>
		</wrap>
		<wrap title="value-key 对象">
			<gap height="24"></gap>
			<van-picker :columns="dataList" value-key="cantonCode" @change="onVKChange" />

		</wrap>
		<wrap title="默认选中项">

			<view class="wrap-content ">
				<van-picker :columns="column1" default-index="2" @change="onChange1" />
			</view>
		</wrap>
		<wrap title="禁用选项">
			<view class="wrap-content ">
				<van-picker :columns="column2" />
			</view>
		</wrap>
		<wrap title="展示顶部栏">
			<view class="wrap-content ">
				<van-picker show-toolbar title="标题" :columns="column1" @change="onChange1" @confirm="onConfirm"
					@cancel="onCancel" />
			</view>
		</wrap>


		<wrap title="多列联动">
			<view class="wrap-content ">
				<van-picker :columns="column4" @change="onChange2" />
			</view>
		</wrap>
		<wrap title="加载状态">
			<view class="wrap-content ">
				<van-picker loading :columns="column4" />
			</view>
		</wrap>

		<wrap title="自定义样式">
			<gap height="24"></gap>

			<van-picker show-toolbar toolbar-position="bottom" title="在底部" :columns="column1" @change="onChange1"
				@confirm="onConfirm" @cancel="onCancel" confirm-button-text="confirm" cancel-button-text="cancel"
				visible-item-count="3" item-height="66" active-class="custom-active" toolbar-class="custom-toolbar"
				column-class="custom-column" custom-class="custom-root" />
		</wrap>

		<wrap title=" picker 实例方法">
			<gap height="24"></gap>
			<van-picker :columns="column4" @change="onMoreChange" />
		</wrap>

		<gap height="200"></gap>
		<van-toast id="van-toast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				column1: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
				column2: [{
						text: '杭州',
						disabled: true
					},
					{
						text: '宁波'
					},
					{
						text: '温州'
					}
				],
				column3: {
					浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
					福建: ['福州', '厦门', '莆田', '三明', '泉州']
				},
				column4: [{
						values: ['浙江', '福建'],
						className: 'column1'
					},
					{
						values: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
						className: 'column2',
						defaultIndex: 2
					}
				],
				dataList: [{
					cantonName: '江苏省',
					cantonCode: '320000'
				}, {
					cantonName: '浙江省',
					cantonCode: '370000'
				}, {
					cantonName: '山东省',
					cantonCode: '330000'
				}],
			};
		},
		onLoad() {},
		methods: {
			onChange1(event) {
				const {
					value,
					index
				} = event.detail;
				this.$toast(`Value: ${value}, Index：${index}`);
			},

			onConfirm(event) {
				const {
					value,
					index
				} = event.detail;

				this.$toast(`Value: ${value}, Index：${index}`);
			},

			onCancel(event) {
				const {
					value,
					index
				} = event.detail;

				this.$toast(`取消- ${value}/${index}`);
			},
			onVKChange(event) {
				const {
					value,
					index
				} = event.detail;
				// console.log('onVKChange', event.detail);
				this.$toast(`value/index-- ${JSON.stringify(value)}/${index}`);
			},

			onChange2(event) {
				console.log(event.detail);

				const {
					picker,
					value
				} = event.detail;
				picker.setColumnValues(1, this.column3[value[0]]);
				getApp().picker = picker;
			},
			onMoreChange(event) {
				console.log('-- onMoreChange ------ start --');
				const {
					picker,
					value
				} = event.detail;

				// 设置对应列中选中的值
				console.log('getValues 对应列中选中的值', picker.getValues());
				console.log('getIndexes 对应列中选中值的索引', picker.getIndexes());
				console.log('getColumnValue && getColumnIndex',
					`Col0:Index-${picker.getColumnIndex(0)}/Value-${picker.getColumnValue(0)};Col1:Index-${picker.getColumnIndex(1)}/Value-${picker.getColumnValue(1)}`
				);


				console.log('col1 所有选项', picker.getColumnValues(1));
				if (picker.getColumnValue(0) === '福建') {
					picker.setColumnIndex(1, 3);
				}
				if (picker.getColumnValue(0) === '浙江') {
					picker.setColumnValue(1, '温州');
				}


				console.log('-- onMoreChange ------ end --');

			},
		}
	};
</script>

<style lang="scss">
	.custom-active {
		color: #0081ff !important;
	}

	.custom-toolbar {
		background-color: $uni-color-primary;
		color: #ffffff;
	}

	.custom-column {
		background-color: $uni-color-warning !important;
	}

	.custom-root {
		border: 8rpx #ff1956 solid !important;
	}
</style>
