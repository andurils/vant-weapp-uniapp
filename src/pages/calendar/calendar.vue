<template>
	<view class="app">
		<van-calendar :show="showCalendar" :show-subtitle="isShowSubtitle" :type="type" :color="color" :round="round"
			:position="position" :first-day-of-week="firstDayWeek" :allow-same-day="isAllowSameDay" :min-date="minDate"
			:max-date="maxDate" :max-range="maxRange" :formatter="formatter" :show-confirm="showConfirm"
			:confirm-text="confirmText" :confirm-disabled-text="confirmDisabledText" @confirm="onConfirm"
			@select="onSelect" @unselect="onUnselect" @open="onOpen" @opened="onOpened" @close="onClose"
			@closed="onClosed" @over-range="onOverRange" @click-subtitle="onClickSubtitle">
		</van-calendar>

		<wrap title="组件参数">
			<gap height="24"></gap>
			<van-cell-group>
				<van-cell :title="isAllowSameDay?'起止相同':'起止不同'" center>
					<van-switch :checked="isAllowSameDay" @change="onAllowSameDayChange" size="24px" />
				</van-cell>
				<van-cell :title="isShowSubtitle?'展示日历副标题（年月）':'不展示日历副标题（年月）'" center>
					<van-switch :checked="isShowSubtitle" @change="onShowSubtitleChange" size="24px" />
				</van-cell>
			</van-cell-group>




			<wrap :title="'周起始日:星期'+ weekDayCN[firstDayWeek]">
				<gap height="24"></gap>
				<van-slider :value="firstDayWeek" min="0" max="6" @drag="onFirstDayWeekChange" bar-height="4px"
					active-color="#ee0a24" />
			</wrap>

		</wrap>



		<wrap title="基础用法">
			<gap height="24"></gap>
			<van-cell is-link title="选择单个日期" data-type="single" data-id="selectSingle"
				:value="formatFullDate(date.selectSingle)" @click="show" />
			<van-cell is-link title="选择多个日期" data-type="multiple" data-id="selectMultiple"
				:value="formatMultiple(date.selectMultiple)" @click="show" />
			<van-cell is-link title="选择日期区间" data-type="range" data-id="selectRange"
				:value="formatRange(date.selectRange)" @click="show" />
		</wrap>

		<wrap title="快捷选择">
			<gap height="24"></gap>
			<van-cell is-link title="选择单个日期" data-type="single" data-id="quickSelect1"
				:value="formatFullDate(date.quickSelect1)" @click="show" />

			<van-cell is-link title="选择日期区间" data-type="range" data-id="quickSelect2"
				:value="formatRange(date.quickSelect2)" @click="show" />
		</wrap>

		<wrap title="自定义日历">
			<gap height="24"></gap>
			<van-cell is-link title="自定义颜色" data-type="range" data-id="customColor"
				:value="formatRange(date.customColor)" @click="show" />

			<van-cell is-link title="自定义日期范围" data-type="single" data-id="customRange"
				:value="formatFullDate(date.customRange)" @click="show" />

			<van-cell is-link title="自定义按钮文字" data-type="range" data-id="customConfirm"
				:value="formatRange(date.customConfirm)" @click="show" />

			<van-cell is-link title="自定义日期文案" data-type="range" data-id="customDayText"
				:value="formatRange(date.customDayText)" @click="onShow1" />

			<van-cell is-link title="自定义弹出位置" data-type="single" data-id="customPosition"
				:value="formatFullDate(date.customPosition)" @click="show" />

			<van-cell is-link title="日期区间最大范围" data-type="range" data-id="maxRange" :value="formatRange(date.maxRange)"
				@click="show" />
		</wrap>

		<wrap title="平铺展示">
			<gap height="24"></gap>
			<van-calendar title="日历" :poppable="false" :show-confirm="false" :min-date="tiledMinDate"
				:max-date="tiledMaxDate" class="tiled-calendar" @select="onSelect1" />
		</wrap>
		<gap height="200"></gap>




		<!-- 自定义日期文案 -->
		<van-calendar :show="showCalendarF" type="range" :min-date="minDate" :max-date="maxDate"
			:allow-same-day="isAllowSameDay" :formatter="dayFormatter" @confirm="onConfirm1" @close="onClose1" />

		<van-toast id="van-toast" />
		<van-dialog id="van-dialog" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				date: {
					maxRange: [],
					selectSingle: null,
					selectRange: [],
					selectMultiple: [],
					quickSelect1: null,
					quickSelect2: [],
					customColor: [],
					customConfirm: [],
					customRange: null,
					customDayText: [],
					customPosition: null
				},
				isAllowSameDay: false, //是否允许日期范围的起止时间为同一天
				isShowSubtitle: true,
				firstDayWeek: 0,
				type: 'single',
				round: true,
				color: undefined,
				minDate: this.$dayjs().valueOf(),
				maxDate: this.$dayjs().add(6, 'month').valueOf(),
				maxRange: undefined,
				position: undefined,
				formatter: undefined,
				showConfirm: false,
				showCalendar: false,
				tiledMinDate: this.$dayjs('2012-01-10').valueOf(), // Unix 时间戳 (毫秒)
				tiledMaxDate: this.$dayjs('2012-03-28').valueOf(),
				confirmText: undefined,
				confirmDisabledText: undefined,
				showCalendarF: false,
				weekDayCN: ['日', '一', '二', '三', '四', '五', '六', ]
			};
		},
		methods: {
			// config 
			onAllowSameDayChange(event) {
				this.isAllowSameDay = !this.isAllowSameDay;
			},
			onShowSubtitleChange(event) {
				this.isShowSubtitle = !this.isShowSubtitle;
			},

			onFirstDayWeekChange(event) {
				console.log(event.detail.value)
				this.firstDayWeek = event.detail.value;
			},
			// 自定义日期文案 开始
			onShow1(event) {
				this.minDate = this.$dayjs('2012-05-01').valueOf();
				this.maxDate = this.$dayjs('2012-05-31').valueOf();
				this.showCalendarF = true;
			},
			onConfirm1(event) {
				this.date['customDayText'] = event.detail;
				// console.log(event.detail)
				this.showCalendarF = false;
			},
			onClose1(event) {
				this.showCalendarF = false;
			},
			//自定义日期文案  结束



			onSelect1(event) {
				this.$toast.success(this.$dayjs(event.detail).format("YYYY-MM-DD"));
			},




			// event start
			// 点击任意日期时触发
			onSelect(event) {
				console.log('select', event);
			},
			// 当 Canlendar 的 type 为 multiple 时,点击已选中的日期时触发
			onUnselect(event) {
				console.log('unselect', event);
			},
			// 日期选择完成后触发，若show-confirm为true，则点击确认按钮后触发
			onConfirm(event) {
				console.log('confirm', event);
				this.showCalendar = false;
				this.date[this.id] = event.detail;
			},
			// 关闭弹出层时触发
			onClose(event) {
				console.log('close', event);
				this.showCalendar = false;
			},
			// 打开弹出层时触发
			onOpen(event) {
				console.log('open', event);
			},
			// 打开弹出层且动画结束后触发
			onOpened(event) {
				console.log('opened', event);
			},
			// 关闭弹出层时触发
			onClosed(event) {
				console.log('closed', event);
			},
			// 范围选择超过最多可选天数时触发
			onOverRange(event) {
				console.log('over-range', event);
			},
			// 点击日历副标题时触发
			onClickSubtitle(event) {
				console.log('click-subtitle', event);
			},
			// event end

			resetSettings() {
				const pageData = {
					round: true,
					color: null,
					minDate: this.$dayjs().valueOf(),
					maxDate: this.$dayjs().add(6, 'month').valueOf(),
					maxRange: null,
					position: 'bottom',
					formatter: null,
					showConfirm: true,
					confirmText: '确定',
					confirmDisabledText: null
				};
				Object.assign(this, pageData);
			},

			show(event) {
				this.resetSettings();
				const {
					type,
					id
				} = event.currentTarget.dataset;
				const data = {
					id,
					type,
					showCalendar: true
				};

				switch (id) {
					case 'quickSelect1':
					case 'quickSelect2':
						data.showConfirm = false;
						break;
					case 'customColor':
						data.color = '#07c160';
						break;
					case 'customConfirm':
						data.confirmText = '完成';
						data.confirmDisabledText = '请选择结束时间';
						break;
					case 'customRange':
						data.minDate = this.$dayjs('2010-01-01').valueOf();
						data.maxDate = this.$dayjs('2010-01-31').valueOf();
						break;
					case 'customDayText':
						data.minDate = this.$dayjs('2010-05-01').valueOf();
						data.maxDate = this.$dayjs('2010-05-31').valueOf();
						data.formatter = this.dayFormatter;
						break;
					case 'customPosition':
						data.round = false;
						data.position = 'right';
						break;
					case 'maxRange':
						data.maxRange = 3;
						break;
				}
				Object.assign(this, data);
			},

			dayFormatter(day) {
				const month = day.date.getMonth() + 1;
				const date = day.date.getDate();

				if (month === 5) {
					if (date === 1) {
						day.topInfo = '劳动节';
					} else if (date === 4) {
						day.topInfo = '五四青年节';
					} else if (date === 11) {
						day.text = '今天';
					}
				}

				if (day.type === 'start') {
					day.bottomInfo = '入店';
				} else if (day.type === 'end') {
					day.bottomInfo = '离店';
				}
				// console.log(day)
				return day;
			},
			formatDate(date) {
				// console.log('formatDate', date)
				if (date) {
					return this.$dayjs(date).format('MM/DD');
				}
			},
			formatFullDate(date) {
				// console.log('formatFullDate', date)
				if (date) {
					// "YYYY-MM-DD HH:mm:ss"
					return this.$dayjs(date).format('YYYY/MM/DD');
				}
			},
			formatRange(dateRange) {
				// console.log('formatRange', dateRange)
				if (dateRange.length) {
					return this.formatDate(dateRange[0]) + ' - ' + this.formatDate(dateRange[1]);
				}
			},
			formatMultiple(dates) {
				if (dates.length) {
					return '选择了 ' + dates.length + '个日期';
				}
			},

		}
	};
</script>

<style lang="scss">
	.tiled-calendar {
		--calendar-height: 500px;
	}
</style>
