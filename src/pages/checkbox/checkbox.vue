<template>
	<view class="app">
		<wrap title="基本用法">
			<van-checkbox :value="checkbox1" data-key="checkbox1" custom-class="demo-checkbox" @change="onChange">复选框
			</van-checkbox>
			<van-checkbox :value="checkbox1" label-disabled data-key="checkbox1" custom-class="demo-checkbox"
				@change="onChange">复选框(禁用文本点击)</van-checkbox>
			<van-checkbox :value="checkbox1" data-key="checkbox1" shape="square" custom-class="demo-checkbox"
				@change="onChange">复选框(自定义形状)</van-checkbox>
			<van-checkbox :value="checkbox1" data-key="checkbox1" label-position="left" custom-class="demo-checkbox"
				@change="onChange">复选框(文本位置 left)
			</van-checkbox>
		</wrap>

		<wrap title="禁用状态">
			<van-checkbox disabled :value="false" custom-class="demo-checkbox">复选框</van-checkbox>
			<van-checkbox disabled :value="true" custom-class="demo-checkbox">复选框</van-checkbox>
		</wrap>

		<wrap title="自定义颜色/大小">
			<van-checkbox :value="checkbox2" icon-size="30px" data-key="checkbox2" checked-color="#07c160"
				custom-class="demo-checkbox" @change="onChange">复选框</van-checkbox>
		</wrap>

		<wrap title="自定义图标">
			<van-checkbox use-icon-slot :value="checkbox3" data-key="checkbox3" custom-class="demo-checkbox"
				@change="onChange">
				自定义图标
				<image mode="widthFix" slot="icon" :src="checkbox3 ? icon.active : icon.normal" class="icon-size" />
			</van-checkbox>
		</wrap>
		<wrap title="复选框组">
			<van-checkbox-group :value="result" data-key="result" @change="onChange">
				<van-checkbox v-for="(item, index) in list" :key="index" :name="item" custom-class="demo-checkbox">复选框
					{{ item }}
				</van-checkbox>
			</van-checkbox-group>
		</wrap>
		<wrap title="复选框组排列方向 vertical/horizontal">
			<van-checkbox-group :value="result" data-key="result" @change="onChange" direction='horizontal'>
				<van-checkbox v-for="(item, index) in list" :key="index" :name="item" custom-class="demo-checkbox">复选框
					{{ item }}
				</van-checkbox>
			</van-checkbox-group>
		</wrap>
		<wrap title="复选框组禁用">
			<van-checkbox-group :value="result" data-key="result" @change="onChange" disabled>
				<van-checkbox v-for="(item, index) in list" :key="index" :name="item" custom-class="demo-checkbox">复选框
					{{ item }}
				</van-checkbox>
			</van-checkbox-group>
		</wrap>
		<wrap title="设置最大可选数">
			<van-checkbox-group :value="result2" data-key="result2" max="2" @change="onChange">
				<van-checkbox v-for="(item, index) in list" :key="index" :name="item" custom-class="demo-checkbox">复选框
					{{ item }}
				</van-checkbox>
			</van-checkbox-group>
		</wrap>

		<wrap title="搭配单元格组件使用">
			<gap height="24"></gap>
			<van-checkbox-group :value="result3" data-key="result3" @change="onChange">
				<van-cell-group>
					<van-cell v-for="(item, index) in list" :key="index" :title="'复选框' + item" value-class="value-class"
						clickable :data-name="item" @click="toggle">
						<van-checkbox @tap.native.stop="noop" :class="'checkboxes-' + item" :name="item" />
						<!-- TODO 这个catch:tap="noop"会打告警 -->
					</van-cell>
				</van-cell-group>
			</van-checkbox-group>
		</wrap>
		<wrap title="自定义样式">
			<gap height="24"></gap>
			<van-checkbox :value="checkbox1" data-key="checkbox1" custom-class="cus-root" icon-class="cus-icon"
				label-class="cus-label" @change="onChange">复选框
			</van-checkbox>
		</wrap>

		<gap height="200"></gap>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				checkbox1: true,
				checkbox2: true,
				checkbox3: true,
				list: ['a', 'b', 'c'],
				result: ['a', 'b'],
				result2: [],
				result3: [],
				icon: {
					normal: 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
					active: 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
				}
			};
		},
		onLoad() {},
		methods: {
			onChange(event) {
				console.log(event.currentTarget.dataset);

				const {
					key
				} = event.currentTarget.dataset;
				this[key] = event.detail;
			},
			onClick(event) {
				console.log(event.currentTarget.dataset);

				const {
					value
				} = event.currentTarget.dataset;
				this.radio3 = value;
			},

			toggle(event) {
				console.log(event.currentTarget.dataset);

				const {
					name
				} = event.currentTarget.dataset;
				const checkbox = this.selectComponent(`.checkboxes-${name}`);
				checkbox.toggle();
			},
			noop() {}
		}
	};
</script>

<style lang="scss">
	.demo-checkbox-group {
		margin: 24rpx 0 0 0;
	}

	.demo-checkbox {
		margin: 24rpx 0 0 0;
	}

	.value-class {
		flex: none !important;
	}

	.icon-size {
		width: 20px;
	}

	.cus-label {
		font-size: 28rpx;
		line-height: 1.5;
		background-color: #ff9900;
		color: #F8F8F8 !important;
	}

	.cus-icon {
		color: #000000;
	}

	.cus-root {
		border: $uni-color-primary 4rpx solid;
	}
</style>
