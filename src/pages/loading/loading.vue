<template>
	<div class="app">
		<wrap title="加载类型" padding>
			<van-loading custom-class="demo-loading" />
			<van-loading custom-class="demo-loading" type="spinner" />
		</wrap>

		<wrap title="自定义颜色" padding>
			<van-loading custom-class="demo-loading" color="#1989fa" />
			<van-loading custom-class="demo-loading" type="spinner" color="#1989fa" />
		</wrap>
		<wrap title="自定义大小" padding>
			<van-loading custom-class="demo-loading" size="16px"></van-loading>
			<van-loading custom-class="demo-loading" size="16px" type="spinner"></van-loading>
		</wrap>
		<wrap title="加载文案" padding><van-loading custom-class="demo-loading" size="24px">努力哦加载中...</van-loading></wrap>

		<wrap title="垂直排列" padding><van-loading custom-class="demo-loading" size="24px" vertical>加载中...</van-loading></wrap>
	</div>
</template>
<script>
import wrap from '@/components/wrap';
export default {
	components: {
		wrap
	}
};
</script>

<style>
.demo-loading {
	margin: 4px 16px 4px 0;
}
</style>
