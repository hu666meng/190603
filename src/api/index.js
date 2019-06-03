import ajax from './ajax'

// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax('/v2/pois/${geohash}')

// 2、获取食品分类列表
export const reqFoodsTypes = (geohash) => ajax('/v2/index_entry')

// 3、根据经纬度获取商铺列表
export const reqShop = (latitude,longitude) => ajax('/shopping/restaurants',{latitude,longitude})
