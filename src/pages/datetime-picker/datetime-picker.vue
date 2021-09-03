<template>
	<view class="app">
		<wrap title="选择完整时间">
			<gap height="24"></gap>
			<van-datetime-picker type="datetime" data-type="datetime" :loading="loading" :value="currentDate1"
				:min-date="minDate" @input="onInput" @confirm="onConfirm" @cancel="onCancel" @change="onChange" />
		</wrap>

		<wrap title="选择日期（年月日）">
			<gap height="24"></gap>
			<van-datetime-picker type="date" data-type="date" :value="currentDate2" :min-date="minDate" @input="onInput"
				@confirm="onConfirm" @cancel="onCancel" :formatter="formatter" />
		</wrap>

		<wrap title="选择日期（年月）">
			<gap height="24"></gap>
			<van-datetime-picker type="year-month" data-type="year-month" :value="currentDate3" :min-date="minDate"
				@input="onInput" @confirm="onConfirm" @cancel="onCancel" />
		</wrap>

		<wrap title="选择时间">
			<gap height="24"></gap>
			<van-datetime-picker type="time" data-type="time" :value="currentDate4" :min-hour="minHour"
				:max-hour="maxHour" :min-minute="minMinute" :max-minute="maxMinute" @input="onInput"
				@confirm="onConfirm" @cancel="onCancel" />
		</wrap>

		<wrap title="选择过滤器">
			<gap height="24"></gap>
			<van-datetime-picker type="time" data-type="time" :value="currentDate4" :filter="filter" @input="onInput"
				@confirm="onConfirm" @cancel="onCancel" />
		</wrap>

		<wrap title="change 事件">
			<gap height="24"></gap>
			<van-datetime-picker type="datetime" data-type="datetime" :loading="true" :value="currentDate1"
				:min-date="minDate" @change="onMoreChange" />
		</wrap>

		<wrap title="自定义样式">
			<gap height="24"></gap>
			<van-datetime-picker title="选择年月" type="year-month" data-type="year-month" :value="currentDate3"
				confirm-button-text="confirm" cancel-button-text="cancel" visible-item-count="4" :min-date="minDate"
				@input="onInput" @confirm="onConfirm" @cancel="onCancel" active-class="custom-active"
				toolbar-class="custom-toolbar" column-class="custom-column" />
		</wrap>
		<gap height="200"></gap>
		<van-toast id="van-toast" />
		<!-- <van-dialog id="van-dialog" /> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				minHour: 10,
				maxHour: 20,
				minMinute: 10,
				maxMinute: 50,
				minDate: this.$dayjs('2018-01-01').valueOf(),
				maxDate: this.$dayjs('2019-11-01').valueOf(),
				currentDate1: this.$dayjs('2018-3-31').valueOf(),
				currentDate2: null,
				currentDate3: this.$dayjs('2018-2-1').valueOf(), // new Date(2018, 0, 1)
				// currentDate3: this.$dayjs('2018-2-1'),
				currentDate4: '12:00',
				loading: false,
				formatter(type, value) {
					if (type === 'year') {
						return `${value}年`;
					}
					if (type === 'month') {
						return `${value}月`;
					}
					if (type === 'day') {
						return `${value}日`;
					}
					return value;
				},
				filter(type, options) {
					if (type === 'minute') {
						return options.filter(option => option % 5 === 0);
					}

					return options;
				}
			};
		},
		methods: {
			onMoreChange(event) {
				console.log('-- onMoreChange ------ start --');
				const {
					detail,
					currentTarget
				} = event;

				// 设置对应列中选中的值
				console.log('getValues 对应列中选中的值', detail.getValues());


				console.log('getColumnValue', `${detail.getColumnValue(0)}年${detail.getColumnValue(1)}月`);
				// 设置对应列中选中的值  选择2月 日期自动为 28 
				if (detail.getColumnValue(1) == '02') {
					detail.setColumnValue(2, '01');
					console.log('setColumnValue', `选择2月时，日期自动设置为 02-01 !`);


					// 获取/设置 对应列中所有的备选值
					console.log('getColumnValues index/4', detail.getColumnValues(4));
					console.log('setColumnValues index/4', detail.setColumnValues(4, ['00', '10', '20', '30', '40',
						'50'
					]));
					console.log('getColumnValues index/4', detail.getColumnValues(4));
				}


				// 设置对应列中选中的值  选择2月 日期自动为 28
				if (detail.getColumnValue(1) == '03') {
					console.log('setValues 2020-03-20 10:50', detail.setValues(['2020', '03', '20', '10', '50']));
				}

				console.log('-- onMoreChange ------ end --');

			},
			onInput(event) {
				console.log('Input', event);
				const {
					detail,
					currentTarget
				} = event;
				const result = this.getResult(detail, currentTarget.dataset.type);


				this.$toast(result);
			},
			onChange(event) {
				console.log('change', event);
			},
			onConfirm(event) {
				console.log('confirm', event);
				this.$toast('confirm!');
			},
			onCancel(event) {
				console.log('cancel', event);
				this.$toast('cancel!');
			},

			getResult(time, type) {
				const date = new Date(time);
				switch (type) {
					case 'datetime':
						return this.$dayjs(date).format('YYYY-MM-DD HH:mm');
					case 'date':
						return this.$dayjs(date).format('YYYY/MM/DD');
					case 'year-month':
						return this.$dayjs(date).format('YYYY/MM');
					case 'time':
						return time;
					default:
						return '';
				}
			}
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
</style>
