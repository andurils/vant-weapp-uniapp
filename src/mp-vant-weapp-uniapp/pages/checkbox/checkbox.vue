<template>
	<view> 
		<wrap title="基本用法">
			<van-checkbox :value="checkbox1" data-key="checkbox1" custom-class="demo-checkbox" @change="onChange">
				复选框
			</van-checkbox>

		</wrap>

		<wrap title="禁用状态">
			<van-checkbox disabled :value="false" custom-class="demo-checkbox">
				复选框
			</van-checkbox>
			<van-checkbox disabled :value="true" custom-class="demo-checkbox">
				复选框
			</van-checkbox>
		</wrap>

		<wrap title="禁用文本点击">
			<van-checkbox :value="true" icon-disabled>复选框</van-checkbox>
		</wrap>

		<wrap title="自定义形状">
			<van-checkbox :value="checkbox1" data-key="checkbox1" shape="square" custom-class="demo-checkbox" @change="onChange">
				复选框
			</van-checkbox>
		</wrap>

		<wrap title="自定义颜色">
			<van-checkbox :value="checkbox2" icon-size="25px" data-key="checkbox2" checked-color="#07c160" custom-class="demo-checkbox"
			 @change="onChange">
				复选框
			</van-checkbox>
		</wrap>

		<wrap title="自定义图标">
			<van-checkbox use-icon-slot :value="checkbox3" data-key="checkbox3" custom-class="demo-checkbox" @change="onChange">
				自定义图标
				<image mode="widthFix" slot="icon" :src="checkbox3?icon.active : icon.normal" class="icon" />
			</van-checkbox>
		</wrap>

		<wrap title="复选框组">
			<van-checkbox-group :value="result" data-key="result" @change="onChange">
				<van-checkbox v-for="(item,index) in list" :key="index" :name="item" custom-class="demo-checkbox">
					复选框 {{ item }}
				</van-checkbox>
			</van-checkbox-group>
		</wrap>

		<wrap title="设置最大可选数">
			<van-checkbox-group :value="result2" data-key="result2" max="2" @change="onChange">
				<van-checkbox v-for="(item,index) in list" :key="index" :name="item" custom-class="demo-checkbox">
					复选框 {{ item }}
				</van-checkbox>
			</van-checkbox-group>
		</wrap>

		<wrap title="搭配单元格组件使用">
			<van-checkbox-group :value="result3" data-key="result3" @change="onChange">
				<van-cell-group>
					<van-cell v-for="(item,index) in list" :key="index" :title="'复选框'+item" value-class="value-class" clickable
					 :data-name="item" @click="toggle">
						<van-checkbox @tap.native.stop="noop" :class="'checkboxes-'+item" :name="item" /><!-- TODO 这个catch:tap="noop"会打告警 -->
					</van-cell>
				</van-cell-group>
			</van-checkbox-group>
		</wrap>

	</view>
</template>

<script>
	import Page from '../../common/page';

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
			}
		},
		onLoad() {},
		methods: {
			onChange(event) {
				console.log(event.currentTarget.dataset);

				const {
					key
				} = event.currentTarget.dataset;
				this[key] = event.detail
			},
			onClick(event) {
				console.log(event.currentTarget.dataset);

				const {
					value
				} = event.currentTarget.dataset;
				this.radio3 = value
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
	}
</script>

<style>
	.demo-checkbox-group {
		margin: 10px 0 0 20px;
	}

	.demo-checkbox {
		margin: 10px 0 0 20px;
	}

	.value-class {
		flex: none !important;
	}

	.icon {
		width: 20px;
	}
</style>


<!-- <template>
  <div class="app">
    <wrap title="复选框">
      <van-checkbox
        :value="checkbox1"
        data-key="checkbox1"
        custom-class="demo-checkbox"
        @change="onChange"
      >
        复选框 {{ checkbox1 }}
      </van-checkbox>
    </wrap>
    <wrap title="复选框组">
      <van-checkbox-group :value="result" data-key="result" @change="onChange">
        <van-checkbox
          v-for="(v, key) in list"
          :key="key"
          :name="v"
          custom-class="demo-checkbox"
        >
          复选框 {{ v }}
        </van-checkbox>
      </van-checkbox-group>
      {{ result }}
    </wrap>
    <wrap title="搭配单元格">
      <van-checkbox-group
        :value="result2"
        data-key="result2"
        @change="onChange"
      >
        <van-cell-group>
          <van-cell
            v-for="(v, key) in list"
            :key="key"
            :title="'复选框' + v"
            value-class="value-class"
            clickable
            :data-name="v"
            @click="toggle"
          >
            <van-checkbox :class="'checkboxes-' + v" :name="v" />
          </van-cell>
        </van-cell-group>
        {{ result2 }}
      </van-checkbox-group>
    </wrap>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import wrap from '@/components/wrap';
import Toast from '../../wxcomponents/vant/toast/toast';
export default {
  data() {
    return {
      checkbox1: true,
      list: ['a', 'b', 'c'],
      result: ['a', 'b'],
      result2: [],
    };
  },
  methods: {
    onChange(event) {
      const {key} = event.currentTarget.dataset;
      this[key] = event.detail;
    },

    toggle(event) {
      const {name} = event.currentTarget.dataset;
      const checkbox = this.$mp.page.selectComponent(`.checkboxes-${name}`);
      checkbox.toggle();
    },
  },
  components: {
    wrap,
  },
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
</style> -->
