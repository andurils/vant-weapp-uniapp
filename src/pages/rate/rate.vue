<template>
	<div class="app">
		<wrap title="基础用法">
			<van-rate custom-class="van-rate" data-key="value1" :value="value1" @change="onChange" />
			{{ value1 }}
		</wrap>

		<wrap title="自定义图标">
			<van-rate custom-class="van-rate" icon="like" void-icon="like-o" data-key="value2" :value="value2" @change="onChange" />
			{{ value2 }}
		</wrap>

		<wrap title="自定义样式/数量">
			<van-rate custom-class="van-rate" data-key="value3" :value="value3" size=" 25 " count=" 6 " color="#2ba" void-color="#ceefe8" @change="onChange" />
			{{ value3 }}
		</wrap>

		<wrap title="禁用状态">
			<van-rate custom-class="van-rate" data-key="value4" :value="value4" :disabled="true" @change="onChange" />
			{{ value4 }}
		</wrap>

		<wrap title="半星">
			<van-rate
				custom-class="van-rate"
				data-key="value5"
				:value="value5"
				size="25"
				allow-half
				color="#ee0a24"
				void-color="#eee"
				void-icon="star"
				touchable="false"
				@change="onChange"
			/>
			{{ value5 }}
		</wrap>
		<wrap title="只读状态">
			<van-rate custom-class="van-rate" data-key="value6" :value="value6" readonly />
			{{ value6 }}
		</wrap>
	</div>
</template>

<script>
import Page from '../../common/page';
import wrap from '@/components/wrap';
export default {
	components: {
		wrap
	},
	data() {
		return {
			value1: 3,
			value2: 3,
			value3: 4,
			value4: 2,
			value5: 2.5,
			value6: 2
		};
	},
	methods: {
		onChange(event) {
			console.log(event);
			const { key } = event.currentTarget.dataset;
			this[key] = event.detail;
		}
	}
};
</script>

<style>
.demo-radio-group {
	padding: 0 17px;
}

.demo-radio {
	margin-bottom: 10px;
}
</style>
