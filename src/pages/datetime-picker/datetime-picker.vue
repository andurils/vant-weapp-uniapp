<template>
	<view class="app">
		<wrap title="选择完整时间"></wrap>
		<van-datetime-picker
			type="datetime"
			data-type="datetime"
			:loading="loading"
			:value="currentDate1"
			:min-date="minDate"
			@input="onInput"
			@confirm="onConfirm"
			@cancel="onCancel"
			@change="onChange"
		/>

		<wrap title="选择日期（年月日）"></wrap>
		<van-datetime-picker
			type="date"
			data-type="date"
			:value="currentDate2"
			:min-date="minDate"
			@input="onInput"
			@confirm="onConfirm"
			@cancel="onCancel"
			:formatter="formatter"
		/>

		<wrap title="选择日期（年月）"></wrap>
		<van-datetime-picker type="year-month" data-type="year-month" :value="currentDate3" :min-date="minDate" @input="onInput" @confirm="onConfirm" @cancel="onCancel" />

		<wrap title="选择时间"></wrap>
		<van-datetime-picker type="time" data-type="time" :value="currentDate4" :min-hour="minHour" :max-hour="maxHour" @input="onInput" @confirm="onConfirm" @cancel="onCancel" />

		<wrap title="选择过滤器"></wrap>
		<van-datetime-picker type="time" data-type="time" :value="currentDate4" :filter="filter" @input="onInput" @confirm="onConfirm" @cancel="onCancel" />

		<wrap title="自定义样式"></wrap>
		<van-datetime-picker
			title="选择年月"
			type="year-month"
			data-type="year-month"
			:value="currentDate3"
			:min-date="minDate"
			@input="onInput"
			@confirm="onConfirm"
			@cancel="onCancel"
			active-class="custom-active"
			toolbar-class="custom-toolbar"
			column-class="custom-column"
		/>

		<van-toast id="van-toast" />
		<van-dialog id="van-dialog" />
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
			minHour: 10,
			maxHour: 20,
			minDate: new Date(2018, 0, 1).getTime(),
			maxDate: new Date(2019, 10, 1).getTime(),
			currentDate1: new Date(2018, 2, 31).getTime(),
			currentDate2: null,
			currentDate3: new Date(2018, 0, 1),
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
		onInput(event) {
			const { detail, currentTarget } = event;
			const result = this.getResult(detail, currentTarget.dataset.type);

			// console.log(result);
			Toast(result);
		},
		onChange(event) {
			console.log(event);
		},
		onConfirm() {
			uni.showToast({
				title: 'ok !!',
				icon: 'none'
			});
		},
		onCancel() {
			uni.showToast({
				title: 'cancel !!',
				icon: 'none'
			});
		},

		getResult(time, type) {
			const date = new Date(time);
			switch (type) {
				case 'datetime':
					return date.toLocaleString();
				case 'date':
					return date.toLocaleDateString();
				case 'year-month':
					return `${date.getFullYear()}/${date.getMonth() + 1}`;
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
