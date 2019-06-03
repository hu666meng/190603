<template>
	<div class="search">
		<!--头部-->
		<HeaderTop title="搜索" classtitle="2"/>
		<!--搜索区域-->
		<div class="search_box">
	        <i class="iconfont icon-serach"></i>
	        <input type="text" placeholder="请输入商家或美食名称">
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
.search_box{
    width: 80%;
    margin: 3.35rem auto 0;
    height: 1.5rem;
    border: 1px solid #c9c9c9;
    border-radius: 1rem;
    position: relative;
}
.search_box i{
    position: absolute;
    top: 0.35rem;
    right: 0.5rem;
}
.search_box input{
    position: absolute;
    top: 0.2rem;
    left: 1rem;
    height: 1rem;
    width: 80%;
    background: transparent;
    border: none;
    outline: none;
}
.search_box input::-webkit-input-placeholder{
    font-weight: 300;
    font-size: 0.5rem;
}
.search_box input::-moz-placeholder{
    font-weight: 300;
    font-size: 0.5rem;
}
.search_box  input:-moz-placeholder{
    font-weight: 300;
    font-size: 0.5rem;
}
.search_box input:-ms-input-placeholder{
    font-weight: 300;
    font-size: 0.5rem;
}	
</style>