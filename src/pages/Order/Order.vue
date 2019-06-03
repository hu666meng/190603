<template>
	<div class="order">
		<!--头部-->
		<!--<div class="header">
			<div class="header_box">
				<p>订单</p>
			</div>
		</div>-->
		
		<HeaderTop title="订单" classtitle="2"/>
		
		<!--没有订单-->
		<div class="no_order">
			<p>登陆后查看订单</p>
			<div class="go_login">立即登陆</div>
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

.no_order p{
	height: 4rem;
	margin-top: 10rem;
	line-height: 4rem;
	font-size: 0.75rem;
	text-align: center;
}
.go_login{
	width: 5rem;
	height: 1.5rem;
	line-height: 1.5rem;
	font-size: 0.7rem;
	text-align: center;
	background: #009B8B;
	border-radius: 0.4rem;
	color: #FFFFFF;
	margin: 0 auto;
}
</style>