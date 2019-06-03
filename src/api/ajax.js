//ajax请求
import axios from 'axios'
export default function ajax(url, data = {}, type = 'GET') {
	return new Promise(function(resolve, reject) {
		let promise;
		if(type === 'GET') {
			//	 git 请求  拼接url 的参数
			let dataStr = ''
			Object.keys(data).forEach(Key => {
				dataStr += Key + '=' + data[Key] + '&'
			})
			if(dataStr !== '') {
				dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
				url = url + '?' + dataStr
			}
			promise = axios.get(url)
		} else {
			promise.axios.post(url, data)
		}
		promise.then(function(response){
			resolve(response.data)
		}).catch(function(){
			reject(error)
		})
	})
}