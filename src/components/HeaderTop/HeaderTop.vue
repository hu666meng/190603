<template>
	<!--头部-->
	<div class="header">
		<div class="header_box">
			<slot name="left"></slot>
			<p :class="(classtitle==1)? 'title1':'title2'">{{title}}</p>
			<slot name="right"></slot>
		</div>
	</div>
	
</template>

<script>
export default {
 	props:{
 		title:String,
 		classtitle:String
 	}
}
</script>

<style scoped>
.header{
	width: 100%;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 100;
}
.header_box {
	height: 2rem;
	line-height: 2rem;
	background-color: #009B8B;
}

.left {
	float: left;
	width: 20%;
	text-align: center;
	color: #FFFFFF;
}
.title1 {
	float: left;
	text-align: center;
	font-size: 0.9rem;
	color: #ffffff;
	width: 60%;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	margin: 0 auto;
}

.title2 {
	float: left;
	text-align: center;
	font-size: 0.9rem;
	color: #ffffff;
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	margin: 0 auto;
}

.right_box{
	float: left;
	width: 20%;
	font-size: 0.6rem;
	color: #FFFFFF;
	text-align: center;
}



</style>