<template>
	<view class="app">
		<wrap title="基础用法">
			<van-collapse :value="active1" data-key="active1" @change="onChange">
				<van-collapse-item :title="title1" content-class="van-collapse-item__content">{{ content1 }}</van-collapse-item>
				<van-collapse-item :title="title2" content-class="van-collapse-item__content">{{ content2 }}</van-collapse-item>
				<van-collapse-item :title="title3" content-class="van-collapse-item__content" :disabled="true">{{ content3 }}</van-collapse-item>
			</van-collapse>
		</wrap>

		<wrap title="手风琴">
			<van-collapse :value="active2" data-key="active2" :accordion="true" @change="onChange">
				<van-collapse-item :title="title1" content-class="van-collapse-item__content">{{ content1 }}</van-collapse-item>
				<!-- 这里感觉vant ui自己有bug，点击展不开 -->
				<van-collapse-item :title="title2" content-class="van-collapse-item__content">{{ content2 }}</van-collapse-item>
				<van-collapse-item :title="title3" content-class="van-collapse-item__content">{{ content3 }}</van-collapse-item>
			</van-collapse>
		</wrap>
		<wrap title="自定义标题内容 ">
			<van-collapse :value="active3" data-key="active3" @change="onChange">
				<van-collapse-item content-class="van-collapse-item__content">
					<view slot="title">
						{{ title1 }}
						<van-icon name="question-o" custom-class="van-icon-question" />
					</view>
					{{ content1 }}
				</van-collapse-item>
				<van-collapse-item :title="title2" content-class="van-collapse-item__content" value="内容" icon="shop">{{ content2 }}</van-collapse-item>
			</van-collapse>
		</wrap>
		<van-toast id="van-toast" />
	</view>
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
			active1: [0],
			active2: 0,
			active3: [],
			title1: '标题1',
			title2: '标题2',
			title3: '标题3',
			content1: '代码是写出来给人看的，附带能在机器上运行',
			content2: '代码是写出来给人看的，附带能在机器上运行',
			content3: '代码是写出来给人看的，附带能在机器上运行'
		};
	},
	methods: {
		onChange(event) {
			const { currentTarget, detail } = event;
			const { key } = currentTarget.dataset;
			this[key] = detail;
		}
	}
};
</script>

<style>
.van-collapse-item__content {
	font-size: 13px;
	line-height: 1.5;
	color: #666;
}

.van-icon-question {
	margin-left: 5px;
	font-size: 15px !important;
	color: #1989fa;
	vertical-align: -3px;
}
</style>
