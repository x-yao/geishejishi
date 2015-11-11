Vue.component('device', {
	template: '#device-template',
	props: {
		data: Object,
		containdata:Object
	},
	data: function() {
		return {
			env: this.data.env,
			deviceHeight: this.data.height,
			needFooter: this.data.footer,
			bacUrl:this.containdata.bacUrl
		}
	},
	methods: {

	}
});
Vue.component('devices-list', {
	template: '#device-parent-template',
	props: {
		data: Object,
		odata:Object
	},
	data: function() {
		return {
			deviceTitle: this.data.title,
			deviceEnv: this.data.deviceEnv,
			deviceWidth: this.data.width,
			dpclass: this.data.dpclass,
			containData:this.odata
		}
	},
	methods: {

	}
});


Vue.component('my-forms', {
	template: '#form-template',
	props: {
		data: Object
	},
	data: function() {
		var item = this.data;
		return {
			type: item.type,
			id: item.id,
			title: item.title,
			name: item.name || "",
			classes: item.classes,
			options: item.options || [],
			placeholder: item.placeholder || "",
			needBtn:item.needBtn
		}
	},
	methods: {

	}
});

var app = new Vue({
	el: '#app',
	data: {
		allDevices: [
			{
				title: 'iPhone 4',
				dpclass: 'ip4',
				width: '320px',
				deviceEnv: [{
					env: 'wx',
					height: '416px',
					footer: false
				}, {
					env: 'safari',
					height: '372px',
					footer: true
				}]
			}, {
				title: 'iPhone 5',
				dpclass: 'ip5',
				width: '320px',
				deviceEnv: [{
					env: 'wx',
					height: '504px',
					footer: false
				}, {
					env: 'safari',
					height: '460px',
					footer: true
				}]
			}, {
				title: 'iPhone 6',
				dpclass: 'ip6',
				width: '375px',
				deviceEnv: [{
					env: 'wx',
					height: '603px',
					footer: false
				}, {
					env: 'safari',
					height: '559px',
					footer: true
				}]
			}
		],
		formData: [
			{
				type:"select",
				id:"poselect",
				classes:"form-control",
				name:"position",
				title:"背景图片分布",
				options:[{
					value:"top",
					title:"上"
				},
				{
					value:"center",
					title:"中"
				},
				{
					value:"bottom",
					title:"下"
				},
				{
					value:"ya",
					title:"压缩"
				}]
			},
			{
				type:"input",
				id:"minHeight",
				classes:"form-control",
				title:"最小高度",
				placeholder:"请输入最小高度请默认px",
				needBtn:true,
				btnClasses:"btn btn-default"
			}
		],
		containData: {
			bacUrl:"1",
			bacPos:"",
			pageMinHeight:"",
			items:[
			]
		}
	}
})
