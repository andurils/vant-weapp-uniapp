<template>
	<div class="app">
		<wrap title="基础用法">
			<van-radio-group :value="radio1" @change="onChange" custom-class="demo-radio-group" data-key="radio1">
				<van-radio name="1" custom-class="demo-radio">单选框 1</van-radio>
				<van-radio name="2" custom-class="demo-radio">单选框 2</van-radio>
			</van-radio-group>
			{{ radio1 }}
		</wrap>
		<wrap title="禁用状态">
			<van-radio-group :disabled="true" :value="radio2" data-key="radio2" custom-class="demo-radio-group" @change="onChange">
				<van-radio name="1" custom-class="demo-radio">单选框 1</van-radio>
				<van-radio name="2" custom-class="demo-radio">单选框 2</van-radio>
			</van-radio-group>
		</wrap>
		<wrap title="禁用文本点击">
			<van-radio-group :value="radio5" data-key="radio5" custom-class="demo-radio-group" @change="onChange">
				<van-radio name="1" custom-class="demo-radio" label-disabled>单选框 1</van-radio>
				<van-radio name="2" custom-class="demo-radio" label-disabled>单选框 2</van-radio>
			</van-radio-group>
		</wrap>
		<wrap title="自定义颜色">
			<van-radio-group :value="radio2" data-key="radio2" custom-class="demo-radio-group" @change="onChange">
				<van-radio name="1" custom-class="demo-radio" checked-color="#07c160">单选框 1</van-radio>
				<van-radio name="2" custom-class="demo-radio" checked-color="#07c160">单选框 2</van-radio>
			</van-radio-group>
		</wrap>
		<wrap title="自定义形状">
			<van-radio-group :value="radio2" data-key="radio2" custom-class="demo-radio-group" @change="onChange">
				<van-radio name="1" custom-class="demo-radio" shape="square">单选框 1</van-radio>
				<van-radio name="2" custom-class="demo-radio" shape="round">单选框 2</van-radio>
			</van-radio-group>
		</wrap>
		<wrap title="自定义大小">
			<van-radio-group :value="radio2" data-key="radio2" custom-class="demo-radio-group" @change="onChange">
				<van-radio name="1" custom-class="demo-radio">单选框 1</van-radio>
				<van-radio name="2" custom-class="demo-radio" icon-size="25px">单选框 2</van-radio>
			</van-radio-group>
		</wrap>
		<wrap title="自定义图标">
			<van-radio-group :value="radio4" data-key="radio4" custom-class="demo-radio-group" @change="onChange">
				<van-radio use-icon-slot :value="radio4" name="1">
					自定义图标
					<image slot="icon" :src="radio4 === '1' ? icon.active : icon.normal" class="icon" />
				</van-radio>
				<van-radio use-icon-slot :value="radio4" name="2">
					自定义图标
					<image slot="icon" :src="radio4 === '2' ? icon.active : icon.normal" class="icon" />
				</van-radio>
			</van-radio-group>
		</wrap>
		<wrap title="与 Cell 组件一起使用"></wrap>
			<van-radio-group :value="radio3">
				<van-cell-group>
					<van-cell title="单选框 1" clickable data-value="1" @click="onClick"><van-radio name="1" /></van-cell>
					<van-cell title="单选框 2" clickable data-value="2" @click="onClick"><van-radio name="2" /></van-cell>
				</van-cell-group>
			</van-radio-group>
			<!-- {{ radio3 }} -->
		
		<view class="clear-blank"></view>
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
			radio1: '1',
			radio2: '2',
			radio3: '1',
			radio4: '1',
			radio5: '1',
			icon: {
				normal: 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
				active: 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
			}
		};
	},
	methods: {
		onChange(event) {
			console.log(event.currentTarget.dataset);
			const { key } = event.currentTarget.dataset;
			this[key] = event.detail;
		},
		onClick(event) {
			const { value } = event.currentTarget.dataset;
			this.radio3 = value;
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

.icon {
	width: 20px;
	height: 20px;
}
</style>
