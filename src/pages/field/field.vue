<template>
	<div class="app">
		<wrap title="基本用法"></wrap>
		<van-cell-group>
			<van-field label="文本" :value="value" placeholder="请输入用户名" :border="true" @input="change" required clickable
				clearable clear-trigger='always' />

		</van-cell-group>

		<wrap title="自定义类型"></wrap>
		<van-cell-group>
			<van-field @clickIcon="onClickIcon" :value="username" label="文本" placeholder="请输入文本" />
			<van-field :value="numberValue" type="number" label="整数" placeholder="请输入整数" clearable />
			<van-field :value="digitValue" type="digit" label="数字" placeholder="请输入数字(支持小数)" />
			<van-field :value="password" type="password" label="密码1" placeholder="请输入密码" />
			<van-field :value="password" password label="密码2" placeholder="请输入密码" />
			<van-field :value="idcardValue" type="idcard" label="身份证" placeholder="请输入身份证" :border="false" />
		</van-cell-group>

		<wrap title="禁用输入框"></wrap>
		<van-cell-group>
			<van-field value="输入框只读" label="用户名" left-icon="contact" readonly />
			<van-field value="输入框已禁用" label="用户名" left-icon="contact" disabled />
		</van-cell-group>



		<wrap title="显示图标"></wrap>
		<van-cell-group>
			<van-field @clickIcon="onClickIcon" :value="username" left-icon="contact" label="图标Icon" placeholder="请输入文本"
				right-icon="question-o" right-icon-class="demo-icon" />
		</van-cell-group>

		<wrap title="其他用法"></wrap>
		<van-cell-group>
			<van-field label="单元格大小" placeholder="请输入用户名" size="large" clickable clearable />
			<van-field label="箭头方向" placeholder="请输入" is-link arrow-direction="down" />
			<van-field label="maxlength" type="textarea" placeholder="maxlength 为20" rows="1" autosize maxlength='20'
				:show-word-limit="true" />
		</van-cell-group>


		<wrap title="错误提示"></wrap>
		<van-cell-group>
			<van-field :value="username2" label="用户名" placeholder="请输入用户名" error />
			<van-field :value="phone" label="手机号" placeholder="请输入手机号" error-message="手机号格式错误"
				error-message-align="center" :border="false" />
		</van-cell-group>

		<wrap title="高度自适应"></wrap>
		<van-cell-group>
			<van-field :value="message" center label="留言" type="textarea" placeholder="请输入留言" rows="1" autosize
				:border="false" />
		</van-cell-group>

		<wrap title="插入按钮"></wrap>
		<van-field :value="sms" center clearable label="短信验证码" placeholder="请输入短信验证码" :border="false">
			<van-button slot="button" size="small" type="info" :disabled="btnSmsSendState" :loading="btnSmsSendState"
				custom-class="button" @click="send" loading-type="spinner" :loading-text="btnSMSTxt">
				{{ btnSMSTxt }}
			</van-button>
		</van-field>

		<wrap title="输入框内容对齐"></wrap>
		<van-field placeholder="输入框内容右对齐" label="文本" :border="false" input-align="right" />


		<wrap title="键盘配置"></wrap>
		<van-cell-group>
			<van-field label="show-confirm-bar" title-width="10em" type="textarea" placeholder="显示键盘上方带有”完成“按钮那一栏"
				rows="1" :show-confirm-bar="true" />
			<van-field label="auto-focus" placeholder="自动聚焦，拉起键盘" :auto-focus="true" />
			<van-field label="confirm-hold" placeholder="点击键盘右下角按钮时保持键盘不收起" :border="true" :confirm-hold="true" />
		</van-cell-group>

		<wrap title="插槽设置"></wrap>
		<van-field placeholder="请输入短信验证码">
			<template slot="label">插槽Label</template>
			<template slot="left-icon">
				<van-icon name="friends-o" />
			</template>
			<template slot="right-icon">
				<van-icon name="setting-o" />
			</template>
			<!-- <template slot="input"></template> -->
			<van-button slot="button" size="small" type="info" :disabled="btnSmsSendState" :loading="btnSmsSendState"
				custom-class="button" @click="send" loading-type="spinner" :loading-text="btnSMSTxt">
				{{ btnSMSTxt }}
			</van-button>
		</van-field>

		<wrap title="自定义样式"></wrap>
		<van-cell-group>
			<van-field placeholder="placeholder样式自定义" title-width="10em" label="placeholder-style"
				placeholder-style="color:#007AFF;" />
			<van-field placeholder="自定义样式" title-width="10em" label="custom-style"
				placeholder-style="color:#07C160;border:2rpx #007AFF solid;" />

		</van-cell-group>

		<wrap title="事件"></wrap>
		<van-cell-group>
			<van-field :value="eventValue" label="组件事件" placeholder="请输入文本" clearable @input="onInput"
				@change="onChange" @confirm="onConfirm" @focus="onFocus" @blur="onBlur" @clear="onClear"
				@clickInput="onClickInput" @keyboardheightchange="onKeybord" />
			<van-field :value="message" label="行变化" type="textarea" placeholder="请输入留言" rows="2" autosize
				@linechange="onLinechange" />
		</van-cell-group>

		<gap height="200"></gap>
		<van-toast id="van-toast" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: 'test',
				numberValue: '',
				digitValue: '',
				idcardValue: '',
				username: 'vant user',
				password: '',
				username2: '',
				phone: '',
				message: '',
				sms: '',
				btnSMSTxt: '发送验证码',
				btnSmsSendState: false,
				eventValue: '',
			};
		},
		methods: {
			change(event) {
				console.log(event)
				const {
					detail
				} = event;
				this.value = detail;
			},
			onClickIcon() {

				this.$toast(`onClickIcon`);
			},
			send() {
				var _vm = this;

				const text = second => `${second} s`;
				let second = 10;
				const timer = setInterval(() => {
					_vm.btnSmsSendState = true;
					second--;
					if (second) {
						_vm.btnSMSTxt = text(second);
					} else {
						_vm.btnSMSTxt = '发送验证码';
						_vm.btnSmsSendState = false;
						clearInterval(timer);
						// _vm.$toast.clear();
					}
				}, 1000);
			},
			onInput(event) {
				console.log('onInput', event);
			},
			onChange(event) {
				console.log('onChange', event);
			},
			onConfirm(event) {
				this.$toast(`onConfirm`);
				console.log('onConfirm', event);
			},
			onFocus(event) {
				console.log('onFocus', event);
			},
			onBlur(event) {
				console.log('onBlur', event);
			},
			onClear(event) {
				console.log('onClear', event);
			},
			onClickInput(event) {
				console.log('onClickInput', event);
			},
			onLinechange(event) {
				this.$toast(`Line change`);
				console.log('onLinechange', event);
			},
			onKeybord(event) {
				this.$toast(`keyboard height change`);
				console.log('onKeybord', event);
			},
		}
	};
</script>

<style>
	.demo-icon {
		color: #DD524D;
	}
</style>
