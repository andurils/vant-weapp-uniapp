<template>
	<view class="app">

		<wrap title="基础用法">
			<van-cell title="选择单个日期" :value="date" @click="onDisplay" />
			<van-calendar :show="show" @close="onClose" @confirm="onConfirm" />
		</wrap>

	</view>
</template>

<script>
	import Page from '../../common/page';
	export default {
		data() {
			return {
				date: '',
				show: false
			}
		},
		methods: {
			onDisplay() {
				this.show = true;
			},
			onClose() {
				this.show = false;
			},
			formatDate(date) {
				date = new Date(date);
				return `${date.getMonth() + 1}/${date.getDate()}`;
			},
			onConfirm(event) {
				this.show = false;
				show: false,
					this.date = this.formatDate(event.detail)
			}

		}
	}
</script>

<style>

</style>
