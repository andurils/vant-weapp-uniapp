<template>
	<div class="app">
		<wrap title="基础用法">
			<van-progress custom-class="progress" percentage="50" />
		</wrap>

		<wrap title="置灰">
			<van-progress custom-class="progress" inactive percentage="50" />
		</wrap>

		<wrap title="线条粗细">
			<van-progress custom-class="progress" percentage="50" stroke-width="8" />
		</wrap>

		<wrap title="样式定制">
			<van-progress custom-class="progress" pivot-text="橙色" color="#f2826a" percentage="25" />
			<van-progress custom-class="progress" pivot-text="红色" color="#f44" percentage="50" />
			<van-progress custom-class="progress" percentage="75" pivot-text="紫色" pivot-color="#7232dd" color="linear-gradient(to right, #be99ff, #7232dd)" />
		</wrap>
	</div>
</template>

<script>
	import Page from '../../common/page';
	export default {};
</script>

<style>
	.progress {
		margin: 5px 15px 20px;
	}
</style>
