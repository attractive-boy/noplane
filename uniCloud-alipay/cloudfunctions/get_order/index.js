'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	const db = uniCloud.database();
	const res = await db.collection('user_order').where({
		orderId: parseInt(event.orderId)
	}).get();
	 console.log(res)
	const user_location = await db.collection('user_location').where({
		deviceId: res.data[0].user
	}).get();
	const save_location = await db.collection('user_location').where({
		deviceId: res.data[0].savestation
	}).get();
	
	//返回数据给客户端
	return {
		order: res.data[0],
		fromlocation : save_location.data, 
		toLocation : user_location.data,
	};
};

