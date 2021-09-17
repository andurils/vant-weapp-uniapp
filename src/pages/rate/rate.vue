<template>
	<view class="app">
		<wrap title="基础用法">
			<van-rate data-key="value1" :value="value1" @change="onChange" />
			{{ value1 }}
		</wrap>

		<wrap title="自定义图标">
			<van-rate icon="star" void-icon="like" data-key="value2" :value="value2" @change="onChange" />
			{{ value2 }}
		</wrap>

		<wrap title="自定义样式/数量">
			<van-rate data-key="value3" :value="value3" size=" 25 " count=" 6 " color="#2ba" void-color="#ceefe8"
				@change="onChange" />
			{{ value3 }}
		</wrap>

		<wrap title="禁用状态">
			<van-rate data-key="value4" :value="value4" :disabled="true" disabled-color="#ee5e15" @change="onChange" />
			{{ value4 }}
		</wrap>

		<wrap title="半星">
			<van-rate data-key="value5" :value="value5" size="25" gutter="8" allow-half color="#ee0a24"
				void-color="#eee" touchable="false" @change="onChange" />
			{{ value5 }}
		</wrap>
		<wrap title="只读状态">
			<van-rate data-key="value6" :value="value6" readonly />
			{{ value6 }}
		</wrap>

		<wrap title="自定义样式">
			<van-rate custom-class="cus-root" icon-class="cus-icon" data-key="value7" :value="value7" />
			{{ value7 }}
		</wrap>
		<gap height="200"></gap>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value1: 3,
				value2: 3,
				value3: 4,
				value4: 2,
				value5: 2.5,
				value6: 2,
				value7: 3
			};
		},
		methods: {
			onChange(event) {
				console.log(event);
				const {
					key
				} = event.currentTarget.dataset;
				this[key] = event.detail;
			}
		}
	};
</script>

<style>
	.cus-icon {
		color: #55aa00;
	}

	.cus-root {
		background-color: #000000 !important;
	}
</style>
