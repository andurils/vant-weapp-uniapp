<template>
	<view class="app">
		<wrap title="基础用法">
			<gap height="24"></gap>
			<van-cell title="Fade" @click="onClickFade" :is-link="true" />
			<van-cell title="Fade Up" @click="onClickFadeUp" :is-link="true" />
			<van-cell title="Fade Down" @click="onClickFadeDown" :is-link="true" />
			<van-cell title="Fade Left" @click="onClickFadeLeft" :is-link="true" />
			<van-cell title="Fade Right" @click="onClickFadeRight" :is-link="true" />
			<van-cell title="Slide Up" @click="onClickSlideUp" :is-link="true" />
			<van-cell title="Slide Down" @click="onClickSlideDown" :is-link="true" />
			<van-cell title="Slide Left" @click="onClickSlideLeft" :is-link="true" />
			<van-cell title="Slide Right" @click="onClickSlideRight" :is-link="true" />
			<!-- <van-cell title="Custom" @click="onCustom" :is-link="true" /> -->

			<van-transition :show="show" :name="name" custom-class="block" />
			<van-transition :show="showCustom" name="" duration="{ enter: 300, leave: 1000 }" custom-class="block"
				enter-class="slide-fade-enter" enter-active-class="slide-fade-enter-active"
				leave-active-class="slide-fade-leave-active" leave-to-class="slide-fade-leave-to"
				@before-enter="onBeforeEnter" @enter="onEnter" @after-enter="onAfterEnter" @before-leave="onBeforeLeave"
				@leave="onLeave" @after-leave="onAfterLeave" />
		</wrap>
		<gap height="200"></gap>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				showCustom: false,
				name: 'fade'
			};
		},
		methods: {
			onCustom() {
				this.showCustom = true;
				setTimeout(() => {
					this.showCustom = false;
				}, 2000);
			},
			trigger(name) {
				this.name = name;
				this.show = true;
				setTimeout(() => {
					this.show = false;
				}, 500);
			},
			onClickFade() {
				console.log(1);
				this.trigger('fade');
			},

			onClickFadeUp() {
				this.trigger('fade-up');
			},

			onClickFadeDown() {
				this.trigger('fade-down');
			},

			onClickFadeLeft() {
				this.trigger('fade-left');
			},

			onClickFadeRight() {
				this.trigger('fade-right');
			},

			onClickSlideUp() {
				this.trigger('slide-up');
			},

			onClickSlideDown() {
				this.trigger('slide-down');
			},

			onClickSlideLeft() {
				this.trigger('slide-left');
			},

			onClickSlideRight() {
				this.trigger('slide-right');
			},

			onBeforeEnter() {
				console.log('before enter');
			},

			onEnter() {
				console.log('enter');
			},

			onAfterEnter() {
				console.log('after enter');
			},

			onBeforeLeave() {
				console.log('before leave');
			},

			onLeave() {
				console.log('leave');
			},

			onAfterLeave() {
				console.log('after leave');
			}
		},
		components: {}
	};
</script>

<style>
	.block {
		top: 50%;
		left: 50%;
		width: 100px;
		height: 100px;
		position: fixed;
		margin: -50px 0 0 -50px;
		background-color: #1989fa;
	}

	.van-enter-active-class,
	.van-leave-active-class {
		transition-property: background-color, transform;
	}

	.van-enter-class,
	.van-leave-to-class {
		background-color: red;
		transform: rotate(-360deg) translate3d(-100%, -100%, 0);
	}


	.slide-fade-enter-active {
		transition: all .3s ease;
	}

	.slide-fade-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}

	.slide-fade-enter,
	.slide-fade-leave-to

	/* .slide-fade-leave-active for below version 2.1.8 */
		{
		transform: translateX(10px);
		opacity: 0;
	}
</style>
