<template>
	<view class="app">
		<van-row>
			<van-col span="12">
				<wrap title="基础用法">
					<van-sidebar custom-class="custom-sidebar" :active-key="activeKey">
						<van-sidebar-item title="标签名称" />
						<van-sidebar-item title="标签名称" />
						<van-sidebar-item title="标签名称" />
					</van-sidebar>
				</wrap>
			</van-col>
			<van-col span="12">
				<wrap title="徽标提示">
					<van-sidebar custom-class="custom-sidebar" :active-key="activeKey">
						<van-sidebar-item title="标签名称" dot />
						<van-sidebar-item title="标签名称" info="5" />
						<van-sidebar-item title="标签名称" info="99+" />
					</van-sidebar>
				</wrap>
			</van-col>
		</van-row>
		<van-row>
			<van-col span="12">
				<wrap title="禁用选项">
					<van-sidebar custom-class="custom-sidebar" :active-key="activeKey">
						<van-sidebar-item title="标签名称" />
						<van-sidebar-item title="标签名称" disabled />
						<van-sidebar-item title="标签名称" />
					</van-sidebar>
				</wrap>
			</van-col>
			<van-col span="12">
				<wrap title="监听切换事件">
					<van-sidebar custom-class="custom-sidebar" :active-key="activeKey" @change="onChange">
						<van-sidebar-item title="标签名称" />
						<van-sidebar-item title="标签名称" />
						<van-sidebar-item title="标签名称" />
					</van-sidebar>
				</wrap>
			</van-col>
		</van-row>

		<van-notify id="van-notify" />

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
				activeKey: 0
			};
		},
		methods: {
			onChange(event) {
				// console.log(event);
				Notify({
					type: 'primary',
					message: event.detail
				});
			}
		}
	};
</script>

<style>
	/* .van-icon-question {
		margin-left: 5px;
		font-size: 15px !important;
		color: #1989fa;
		vertical-align: -3px;
	} */
</style>
