<template>
	<view class="app">
		<wrap title="基础用法">
			<van-panel title="标题" desc="描述信息" status="状态"><view class="contentcls">内容</view></van-panel>
		</wrap>

		<wrap title="高级用法">
			<van-panel title="标题" desc="描述信息" status="状态" :use-footer-slot="true">
				<view class="contentcls">内容</view>
				<view slot="footer" class="footercls">
					<van-button size="small" class="demo-margin-right">按钮</van-button>
					<van-button size="small" type="danger">按钮</van-button>
				</view>
			</van-panel>
		</wrap>
	</view>
</template>

<script>
import Page from '../../common/page';
import wrap from '@/components/wrap';
export default {
	components: {
		wrap
	}
};
</script>

<style>
.contentcls {
	padding: 20px;
	font-size: 16px;
}

.footercls {
	text-align: right;
}
</style>
