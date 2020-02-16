<template>
	<div class="app"> 
		<wrap title="基本用法">
			<van-cell-group>
				<van-field :value="value" placeholder="请输入用户名" :border="false" left-icon="contact" :clearable="true" @input="change" />
			</van-cell-group>
		</wrap>
		<wrap title="自定义类型">
			<van-cell-group>
				<van-field @clickIcon="onClickIcon" :value="username" label="用户名" placeholder="请输入用户名" icon="question" icon-class="icon" />


				<van-field :value="numberValue" type="number" label="整数" placeholder="请输入整数" />
				<van-field :value="digitValue" type="digit" label="数字" placeholder="请输入数字(支持小数)" />

				<van-field :value="password" type="password" label="密码" placeholder="请输入密码" required :border="false" />
			</van-cell-group>
		</wrap>
		<wrap title="禁用输入框">
			<van-cell-group>
				<van-field value="输入框只读" label="用户名" left-icon="contact" readonly :border="false" />
				<van-field value="输入框已禁用" label="用户名" left-icon="contact" disabled :border="false" />
			</van-cell-group>
		</wrap>
		<wrap title="错误提示">
			<van-cell-group>
				<van-field :value="username2" label="用户名" placeholder="请输入用户名" error />
				<van-field :value="phone" label="手机号" placeholder="请输入手机号" error-message="手机号格式错误" :border="false" />
			</van-cell-group>
		</wrap>
		<wrap title="高度自适应">
			<van-cell-group>
				<van-field :value="message" label="留言" type="textarea" placeholder="请输入留言" rows="1" autosize :border="false" />
			</van-cell-group>
		</wrap>

		<wrap title="插入按钮">
			<van-field :value="sms" center clearable label="短信验证码" placeholder="请输入短信验证码" :use-button-slot="true" :border="false">
				<van-button slot="button" size="small" type="primary" custom-class="button" @click="send">发送验证码</van-button>
			</van-field>
		</wrap>

		<wrap title="输入框内容对齐">
			<van-field placeholder="输入框内容右对齐" label="文本" :border="false" input-align="right" />
		</wrap>

	</div>
</template>

<script>
	import Page from '../../common/page';
	export default {
		data() {
			return {
				value: '哈哈',
				numberValue: '',
				digitValue: '',
				username: '',
				password: '',
				username2: '',
				phone: '',
				message: '',
				sms: '',
			};
		},
		methods: {
			change({
				detail
			}) {
				this.value = detail;
			},
			onClickIcon() {
				uni.showToast({
					title: 'haha',
					icon: 'none'
				});
			},
			send() {
				uni.showToast({
					title: '失败提示',
					icon: 'none'
				});
			},
		},
	};
</script>

<style></style>
