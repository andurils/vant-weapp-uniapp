<template>
	<view class="app">

		<wrap title="基础用法" padding>
			<van-cell title="基础用法" is-link @click="showNotify" />
		</wrap>
		</wrap>
		<wrap title="通知类型" padding>
			<van-cell title="主要通知" is-link data-type="primary" @click="showNotifyByType" />
			<van-cell title="成功通知" is-link data-type="success" @click="showNotifyByType" />
			<van-cell title="危险通知" is-link data-type="danger" @click="showNotifyByType" />
			<van-cell title="警告通知" is-link data-type="warning" @click="showNotifyByType" />
		</wrap>

		<wrap title="自定义配置" padding>
			<van-cell title="自定义颜色" is-link @click="showCustomColor" />
			<van-cell title="自定义时长" is-link @click="showCustomDuration" />
		</wrap>

		<!-- <wrap title="组件调用" padding> 
			<van-cell title="组件调用" is-link @click="showSafe" />
		</wrap> -->


		<view class="clear-blank"></view>


		<van-notify id="van-notify" />
		<van-notify id="custom-selector" />

		<!-- <wrap padding title="备注">使用自定义导航 notify 样式中 top:0 无法动态设置！！</wrap> -->
	</view>
</template>
<script>
	import Page from '../../common/page';
	import wrap from '@/components/wrap';
	import Notify from '@/wxcomponents/vant/notify/notify';
	export default {
		components: {
			wrap
		},
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar
			};
		},
		methods: {
			showNotify() {
				Notify('通知内容');
			},

			showCustomColor() {
				Notify({
					message: '自定义颜色',
					color: '#ad0000',
					background: '#ffe1e1'
				});
			},

			showCustomDuration() {
				Notify({
					duration: 10000,
					message: '自定义时长',
					selector: '#custom-selector',
					backgroundColor: '#1989fa',
					safeAreaInsetTop: true
				});
			},

			showNotifyByType(event) {
				const {
					type
				} = event.currentTarget.dataset;
				Notify({
					type,
					message: '通知内容'
				});
			},

			showSafe() {
				Notify({
					message: '通知内容',
					safeAreaInsetTop: true
				});
			}
		}
	};
</script>

<style></style>
