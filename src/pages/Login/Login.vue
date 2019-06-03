<template>
	<div class="login">
		<HeaderTop>
			<i class="iconfont icon-xiala-copy-copy left" slot="left" @click="$router.back()"></i>		
		</HeaderTop>
		
		
		<div class="nc_img">
			瑞优外卖
		</div>
		<div class="tab-top">
			<div :class="(tabActive? 'active':'')" @click="changeTab(tabActive)">短信登陆</div>
			<div :class="(!tabActive? 'active':'')" @click="changeTab(!tabActive)">密码登陆</div>
		</div>
		<div class="tab-bottom">
			<div :class="(tabActive? '':'hidden')">
				<input class="num_input" type="text" placeholder="请输入手机号码" />
				<div class="num_input code_input">
					<input class="" type="text" placeholder="请输入验证码" />
					<span class="get_code">获取短信验证码</span>
				</div>
			</div>
			
			<div :class="(tabActive? 'hidden':'')">
				<input class="num_input" type="text" placeholder="请输入手机号码" />
				<input class="num_input" type="text" placeholder="请输入密码" />
				<!-- 忘记密码 -->
				<div class="forget_pw">
					<span>忘记密码 </span>
				</div>
			</div>
			
		</div>
		<!-- 报错提示 -->
		<div class="tips_top">
			<span class="tips_text">手机号错误</span>
		</div>
		<div class="sigh_btn">立即登陆</div>

	</div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue';
export default{
	data() {
		return {
			tabActive:true
		}
	},
	components: {
		HeaderTop,
	},
	methods:{
		changeTab:function(tabActive){
			if(tabActive){
				return
			}else{
				this.tabActive=!this.tabActive
			}
		}
	}
}
	
</script>

<style scoped>
.hidden {
	display: none;
}

.login{
	font-size: 0.75rem;
}

.nc_img {
	height: 4rem;
	width: 100%;
	font-size: 2rem;
	text-align: center;
	line-height: 4rem;
	color: #009B8B;
	margin-top: 2rem;
}

/* 登陆 */

.tab-top {
	color: #aaaaaa;
	display: flex;
	justify-content: space-around;
	margin: 2.5rem 0 1.2rem;
}

.tab-top .active {
	color: #1cb046;
	border-bottom: 0.1rem solid #1cb046;
}

.tab-bottom>div>input {
	margin: 0 auto;
}

.num_input {
	border-bottom: 1px #cccccc solid;
	padding-top: 1rem;
	width: 14rem;
	display: block;
	line-height: 1.4rem;
}

input::-webkit-input-placeholder {
	color: #c5c3c3;
	letter-spacing: 0.05rem;
	font-weight: 300
}

input::-moz-placeholder {
	/* Mozilla Firefox 19+ */
	color: #c5c3c3;
	letter-spacing: 0.05rem;
	font-weight: 300
}

input:-moz-placeholder {
	/* Mozilla Firefox 4 to 18 */
	color: #c5c3c3;
	letter-spacing: 0.05rem;
	font-weight: 300
}

input:-ms-input-placeholder {
	/* Internet Explorer 10-11 */
	color: #c5c3c3;
	letter-spacing: 0.05rem;
	font-weight: 300
}


/* 忘记密码 */

.forget_pw {
	color: #1cb046;
	text-align: right;
	padding-right: 2.15rem;
	padding-top: 0.5rem;
}

.sigh_btn {
	text-align: center;
	width: 12.5rem;
	height: 1.85rem;
	background: #1cb046;
	line-height: 1.85rem;
	border-radius: 2rem;
	color: #ffffff;
	letter-spacing: 0.05rem;
	margin: 0 auto;
}


/* 验证码登陆 */



.code_input {
	margin: 0 auto 2rem;
	display: flex;
	justify-content: space-between
}
.code_input input{
	width: 60%;
}
.get_code {
	color: #1cb046;
	font-size: 0.65rem;
	width: 40%;
	text-align: right;
	padding-right: 0.7rem;
}
/* 错误提示 */

.tips_top {
	visibility: hidden;
	margin-bottom: 1rem;
}

.tips_info {
	visibility: visible;
	text-align: center;
	animation: tip 2s ease-in forwards;
	-webkit-animation: tip 2s ease-in forwards;
	-moz-animation: tip 2s ease-in forwards;
}

@keyframes tip {
	100% {
		opacity: 0;
	}
}

@-webkit-keyframes tip {
	100% {
		-webkit-opacity: 0;
		;
	}
}

.tips_text {
	padding: 0.1rem 0.65rem;
	background: rgba(0, 0, 0, 0.6);
	border-radius: 0.5rem;
	color: #ffffff;
	font-size: 0.7rem;
	text-align: center;
}

input {
	-webkit-user-select: text;
	/*webkit浏览器*/
	-khtml-user-select: text;
	/*早期浏览器*/
	-moz-user-select: text;
	/*火狐*/
	-ms-user-select: text;
	/*IE10*/
	user-select: text;
	outline: none;
	border: none;
}
</style>