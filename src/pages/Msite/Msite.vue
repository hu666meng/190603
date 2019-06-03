<template>
	<div class="msite">
		<!--头部-->
		<HeaderTop title="昌平区北七家修正大院大食堂" classtitle="1">
			<i class="iconfont icon-serach left" slot="left"></i>
			<div class="right_box" slot="right">
				<span>登陆|注册</span>
			</div>
		</HeaderTop>

		<div class="swiper-container">
			<div class="swiper-wrapper">
				<ul class="banner swiper-slide">
					<li class="banner_item">
						<img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
						<p>甜品饮品</p>
					</li>
					<li class="banner_item">
						<img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
						<p>甜品饮品</p>
					</li>
					<li class="banner_item">
						<img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
						<p>甜品饮品</p>
					</li>
					<li class="banner_item">
						<img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
						<p>甜品饮品</p>
					</li>
					<li class="banner_item">
						<img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
						<p>甜品饮品</p>
					</li>
					<li class="banner_item">
						<img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
						<p>甜品饮品</p>
					</li>
					<li class="banner_item">
						<img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
						<p>甜品饮品</p>
					</li>
					<li class="banner_item">
						<img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
						<p>甜品饮品</p>
					</li>
				</ul>
				
				<ul class="banner swiper-slide">
					<li class="banner_item">
						<img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
						<p>甜品饮品</p>
					</li>
					<li class="banner_item">
						<img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
						<p>甜品饮品</p>
					</li>
					<li class="banner_item">
						<img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
						<p>甜品饮品</p>
					</li>
					<li class="banner_item">
						<img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
						<p>甜品饮品</p>
					</li>
					<li class="banner_item">
						<img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
						<p>甜品饮品</p>
					</li>
					<li class="banner_item">
						<img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
						<p>甜品饮品</p>
					</li>
					<li class="banner_item">
						<img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
						<p>甜品饮品</p>
					</li>
					<li class="banner_item">
						<img src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg" />
						<p>甜品饮品</p>
					</li>
				</ul>
			</div>
			<div class="swiper-pagination"> </div>
		</div>

		<!--商品列表-->
		<div class="shopping_area">
			<p class="shopping_area_title">附近商家</p>
			<ShopList/>
		</div>

	</div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue';

import ShopList from '../../components/ShopList/ShopList.vue';
import Swiper from 'swiper';
export default {
	data() {
		return {

		}
	},
	mounted() {
		//轮播
		new Swiper(".swiper-container", {
			pagination: ".swiper-pagination", //分页
			paginationClickable: true, //点击的时候切换
			spaceBetween: 2, //滑块之间的间隙
			autoplay: 100000,
			loop: true,
			observer: true, //修改swiper自己或子元素时，自动初始化swiper
			observeParents: true //修改swiper的父元素时，自动初始化swiper
		});

	},
	methods: {},
	components: {
		HeaderTop,
		ShopList
	}
}
</script>
<style scoped>
@import 'swiper/dist/css/swiper.min.css';
body,
html {
	background: #F5F5F5;
}

.swiper-container {
	width: 100%;
	margin-top: 2rem;
}

.swiper-container img {
	width: 100%;
	height: 100%;
}


/*商圈列表*/

.shopping_area {
	margin-top: 1.5rem;
	background: #FFFFFF;
	padding-bottom: 2rem;
}

.shopping_area_title {
	padding: 0 0.5rem;
	font-size: 0.65rem;
	color: #C9C9C9;
}

.banner {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}

.banner_item {
	width: 25%;
}

.banner_item img {
	display: block;
	width: 80%;
	height: auto;
	margin: 0 auto;
}

.banner_item p {
	font-size: 0.6rem;
	text-align: center;
}
</style>