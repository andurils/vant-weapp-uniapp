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
				default: '',
			},
		},
	};
</script>
<style scoped>
	.title {
		margin: 0;
		font-weight: 400;
		font-size: 14px;
		color: rgba(69, 90, 100, 0.6);
		padding: 20px 15px 15px;
	}

	.wrap {
		padding: 10px;
	}
</style>
