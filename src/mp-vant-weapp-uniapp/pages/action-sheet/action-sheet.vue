<template>
	<view>
		<wrap title="基础用法" padding>
			<van-cell title="基础用法" is-link @click="toggleActionSheet1" />
			<van-cell title="展示取消按钮" is-link @click="toggleActionSheet2" />
			<van-cell title="展示描述信息" is-link @click="toggleActionSheet3" />


			<van-action-sheet :show="show1" :actions="actions" @close="toggleActionSheet1" @select="toggleActionSheet1" />
			<van-action-sheet :show="show2" :actions="action2" cancel-text="取消" @close="toggleActionSheet2" @cancel="toggleActionSheet2"
			 @select="toggleActionSheet2" />
			<van-action-sheet :show="show3" :actions="actions" description="这是一段描述信息" @close="toggleActionSheet3">
			</van-action-sheet>
		</wrap>





		<wrap title="自定义面板" padding>
			<van-cell title="自定义面板" is-link @click="toggleActionSheet5" />

			<van-action-sheet :show="show5" title="标题" @close="toggleActionSheet5">
				<view class="content">内容</view>
			</van-action-sheet>
		</wrap>

		<wrap title="微信开发能力" padding>
			<van-cell title="获取用户信息" is-link @click="toggleActionSheet6" />

			<van-action-sheet :show="show6" :actions="action6" title="标题" @close="toggleActionSheet6" @getuserinfo="onGetUserInfo">
			</van-action-sheet>
		</wrap>


	</view>
</template>

<script>
	import Page from '../../common/page';

	export default {
		data() {
			return {
				show1: false,
				show2: false,
				show3: false,
				show4: false,
				show5: false,
				show6: false,
				actions: [{
						name: '选项'
					},
					{
						name: '分享',
						subname: '描述信息',
						openType: 'share'
					},
					{
						loading: true
					},
					{
						name: '禁用选项',
						disabled: true
					}
				],
				action2: [{
						name: '选项',
						color: '#07c160'
					},
					{
						loading: true
					},
					{
						name: '禁用选项',
						disabled: true
					}
				],
				action6: [{
					name: '获取用户信息',
					color: '#07c160',
					openType: 'getUserInfo'
				}, ]
			}
		},
		onLoad() {},
		methods: {
			toggleActionSheet1() {
				this.show1 = !this.show1
			},
			toggleActionSheet2() {
				this.show2 = !this.show2
			},
			toggleActionSheet3() {
				this.show3 = !this.show3
			},
			toggleActionSheet5() {
				this.show5 = !this.show5
			},
			toggleActionSheet6() {
				this.show6 = !this.show6
			},
			onGetUserInfo(e) {
				console.log(e);
			}
		}
	}
</script>

<style>
</style>
