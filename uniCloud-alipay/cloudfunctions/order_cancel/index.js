'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const db = uniCloud.database();
	const uniPush = uniCloud.getPushManager({
		appId: '__UNI__98EC6A7' // 应用的 AppID，使用自己的
	});
	const collection = db.collection('user_order').where({
		orderId: parseInt(event.orderId)
	});
	await collection.update({
		orderStatus: 2
	});
	const order = await collection.get();
	const push_clientid = await db.collection('user_location').where({
		deviceId: order.data[0].savestation
	}).get();
	const clientid = push_clientid.data[0].push_clientid;
	const pushres = await uniPush.sendMessage({
		"push_clientid": clientid,
		"title": '无人机急救平台',
		"content": '用户已取消订单',
		"force_notification":true,
		"payload": {
			"orderId": order.data[0].orderId
		}
	});
	console.log('pushres', pushres);
	//返回数据给客户端
	return event
};
