<template>
	<view class="wrap">
		<view v-if="title" class="title">{{ title }}</view>
		<slot />
	</view>
</template>
<script>
export default {
	props: {
		title: {
			default: ''
		}
	}
};
</script>
<style scoped>
.title {
	margin: 0;
	font-weight: 400;
	font-size: 14px;
	color: rgba(69, 90, 100, 0.6);
	padding: 24px 0 12px 0;
}

.wrap {
	padding: 0 24px 12px 24px;
}
</style>
