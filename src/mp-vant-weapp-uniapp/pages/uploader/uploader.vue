<template>
	<view class=""> 
		
		<wrap title="基础用法" padding>
			<van-uploader name="1" :file-list="fileList1" @after-read="afterRead" @delete="onDelete" @click-preview="clickPreview" />
		</wrap>

		<wrap title="上传视频" padding>
			<van-uploader name="7" accept="video" :file-list="fileList7" @after-read="afterRead" @delete="onDelete" />
		</wrap>

		<wrap title="文件预览" padding>
			<van-uploader name="2" :file-list="fileList2" multiple @after-read="afterRead" @delete="onDelete" @click-preview="clickPreview" />
		</wrap>

		<wrap title="限制上传数量" padding>
			<van-uploader name="3" :file-list="fileList3" multiple max-count="2" @after-read="afterRead" @delete="onDelete"
			 @click-preview="clickPreview" />
		</wrap>

		<wrap title="自定义上传样式" padding>
			<van-uploader name="4" :file-list="fileList4" max-count="2" @after-read="afterRead" @delete="onDelete"
			 @click-preview="clickPreview" :use-slot="true">
				<van-button icon="photo" type="primary">上传图片</van-button>
			</van-uploader>
		</wrap>

		<wrap title="上传前校验" padding>
			<van-uploader name="5" :file-list="fileList5" @before-read="beforeRead" @after-read="afterRead" @delete="onDelete"
			 @click-preview="clickPreview" :use-before-read="true" />
		</wrap>

		<wrap title="云存储上传" padding>
			<view class="">
				没有云存储，暂未实现
			</view>
			<van-uploader name="6" :file-list="fileList6" @before-read="beforeRead" @after-read="afterRead" @delete="onDelete"
			 @click-preview="clickPreview" :use-before-read="true" />
			<view class="demo-margin-bottom">
				<van-button type="primary" @click="uploadToCloud">上传至云存储</van-button>
			</view>
		</wrap>

	</view>
</template>

<script>
	import Page from '../../common/page';
	export default {

		data() {
			return {
				fileList1: [],
				fileList2: [{
						url: 'https://img.yzcdn.cn/vant/leaf.jpg'
					},
					{
						url: 'https://img.yzcdn.cn/vant/tree.jpg'
					},
					// Uploader 根据文件后缀来判断是否为图片文件
					// 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
					{
						url: 'http://iph.href.lu/60x60?text=default',
						name: '图片2',
						isImage: true
					}
				],
				fileList3: [{
					url: 'https://img.yzcdn.cn/vant/sand.jpg'
				}],
				fileList4: [],
				fileList5: [],
				fileList6: [],
				cloudPath: [],
				fileList7: [],
			}
		},
		methods: {
			beforeRead(event) {
				console.log(event);

				const {
					file,
					callback = () => {}
				} = event.detail;
				if (file.path.indexOf('jpg') < 0) {
					uni.showToast({
						title: '请选择jpg图片上传',
						icon: 'none'
					});
					callback(false);
					return;
				}
				callback(true);
			},

			afterRead(event) {
				console.log('afterRead', event);
				var _vm=this;

				const {
					name,
					file,
				} = event.detail;
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				uni.uploadFile({
					url: 'http://127.0.0.1:8090/images/uploads', // 仅为示例，非真实的接口地址
					filePath: file.path,
					name: 'image',
					//formData: { user: 'test' },
					success(res) {
						// 上传完成需要更新 fileList
						console.log(res);
						console.log(_vm);
						const{path}=JSON.parse(res.data);
						const fileList = _vm[`fileList${name}`];
						fileList.push({ ...file, url: `http://127.0.0.1:8090${path}` });
						_vm[`fileList${name}`] = fileList;
					}
				});

				// const fileList = this[`fileList${name}`];
				// this[`fileList${name}`] = fileList.concat(file);
			},

			oversize() {
				uni.showToast({
					title: '文件超出大小限制',
					icon: 'none'
				});
			},

			onDelete(event) {
				console.log('onDelete', event);

				const {
					name,
					index
				} = event.detail;
				const fileList = this[`fileList${name}`];
				fileList.splice(index, 1);
				this[`fileList${name}`] = fileList;
			},

			clickPreview(event) {
				console.log(event);
			},

			uploadToCloud() {
				// wx.cloud.init();
				// const {
				// 	fileList6: fileList = []
				// } = this.data;
				// if (!fileList.length) {
				// 	wx.showToast({
				// 		title: '请选择图片',
				// 		icon: 'none'
				// 	});
				// } else {
				// 	const uploadTasks = fileList.map((file, index) =>
				// 		this.uploadFilePromise(`my-photo${index}.png`, file)
				// 	);
				// 	Promise.all(uploadTasks)
				// 		.then(data => {
				// 			wx.showToast({
				// 				title: '上传成功',
				// 				icon: 'none'
				// 			});
				// 			const fileList = data.map(item => ({
				// 				url: item.fileID
				// 			}));
				// 			this.setData({
				// 				cloudPath: data,
				// 				fileList6: fileList
				// 			});
				// 		})
				// 		.catch(e => {
				// 			wx.showToast({
				// 				title: '上传失败',
				// 				icon: 'none'
				// 			});
				// 			console.log(e);
				// 		});
				// }
			},

			uploadFilePromise(fileName, chooseResult) {
				// return wx.cloud.uploadFile({
				// 	cloudPath: fileName,
				// 	filePath: chooseResult.path
				// });
			}
		}
	};
</script>

<style></style>
