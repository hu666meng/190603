<template>
	<div class="footer">
		<ul>
			<li :class="{on:'/msite'===$route.path}" @click="GoTo('/msite')">
				<i class="iconfont icon-weibiaoti-"></i>
				<p>外卖</p>
			</li>
			<li :class="{on:'/search'===$route.path}" @click="GoTo('/search')">
				<i class="iconfont icon-serach"></i>
				<p>搜索</p>
			</li>
			<li :class="{on:'/order'===$route.path}" @click="GoTo('/order')">
				<i class="iconfont icon-emaxcitygerenxinxitubiaoji03"></i>
				<p>订单</p>
			</li>
			<li :class="{on:'/profile'===$route.path}" @click="GoTo('/profile')">
				<i class="iconfont icon-Group"></i>
				<p>我的</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  methods:{
  	GoTo:function(path){
  		this.$router.replace(path)
  	}
  }
}

</script>
<style scoped>
@media screen and (-webkit-min-device-pixel-ratio: 1.5) {
    .footer {
        border-top:0.66667px solid #e1e1e1;
    }
    .header{
        border: 0.66667px solid #c9c9c9
    }
}
@media screen and (-webkit-min-device-pixel-ratio: 2) {
    .footer {
        border-top:0.5px solid #e1e1e1;
    }
    .header{
        border: 0.5px solid #c9c9c9
    }
}
@media screen and (-webkit-min-device-pixel-ratio: 3) {
    .footer {
        border-top:0.33333px solid #e1e1e1;
    }
    .header{
        border: 0.33333px solid #c9c9c9
    }
}
.footer {
    position: fixed;
    bottom: 0;
    background-color: #f5f5f5;
    width: 100%;
    border-top: 1px solid #e1e1e1;
}
.footer ul{
    display: inline-block;
    width: 100%;
    text-align: center;
    padding: 0.45rem 0 0.2rem;
}
.footer ul li{
    display: inline-block;
    width: 23%;
    text-align: center;
}
.footer i{
    background-size: 100% 100%;
    height: 0.95rem;
    margin-left: 0.05rem;
}
.footer li{
    font-size: 0.6rem;
    color: #787878;
    padding-top: 0.1rem;
}
.footer .on{
	color: #009B8B;
}

</style>