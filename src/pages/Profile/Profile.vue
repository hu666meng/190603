<template>
	<div class="">
		<!--头部-->
		<HeaderTop title="我的" classtitle="2"/>
		<!--个人信息-->
		<router-link to="/login" tag="div" class="info">
			<img class="info_le" src="./img/my.png" alt="" />
			<div class="info_mi">
				<p><span>登陆</span>/<span>注册</span></p>
				<p>绑定手机号码</p>
			</div>
			<i class="info_ri iconfont icon-xiala-copy"></i>
		</router-link>
		
		<div class="mine">
			<div class="mine_money">
				<p><span>0.00</span>元</p>
				<p>我的余额</p>
			</div>
			<div class="mine_youhui">
				<p><span>0</span>个</p>
				<p>我的优惠</p>
			</div>
			<div class="mine_jifen">
				<p><span>0</span>分</p>
				<p>我的积分</p>
			</div>
		</div>
		
	</div>
</template>

<script>
import 	HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
	components:{
		HeaderTop
	}
}	
</script>

<style scoped>

.info{
	margin-top: 2rem;
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
	padding: 0.75rem 0.5rem;
	background: #009B8B;
	border-top: 1px solid #FFFFFF;
}	

.info_le{
	width: 2rem;
	height: 2rem;
	border-radius: 1rem;
	margin-right: 0.5rem;
}
.info_mi{
	flex: 1;
}
.info_mi p{
	height: 1rem;
	font-size: 0.6rem;
	line-height: 1rem;
	color: #fff;
}
.info_mi p span:nth-child(1){
	padding-right: 0.25rem;
}
.info_mi p span:nth-child(2){
	padding-left: 0.25rem;
}
.info_ri{
	width: 2rem;
	color: #FFFFFF;
	margin-top: 0.15rem;
}
.info .iconfont{
	font-size: 26px;
}

/*我的*/

.mine{
	padding: 0.5rem 1rem;
	display: flex;
	justify-content: space-around;
	flex-wrap: nowrap;
}
.mine_money{
	flex: 1;
}

.mine_money p span:nth-child(1){
	font-size: 0.9rem;
}

.mine_money p(2){
	font-size: 0.6rem;
}
</style>