'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const db = uniCloud.database();
	const uniPush = uniCloud.getPushManager({
		appId: '__UNI__98EC6A7' // 应用的 AppID，使用自己的
	});
	const orderId = Date.now();
	await db.collection('user_order').add({
		orderId: orderId,
		savestation: event.savestation,
		user: event.user,
		orderStatus: '0',
		createTime: new Date().getTime(),
		updateTime: new Date().getTime(),
	});
	const push_clientid = await db.collection('user_location').where({
		deviceId: event.savestation
	}).get();
	const clientid = push_clientid.data[0].push_clientid;
	const pushres = await uniPush.sendMessage({
		"push_clientid": clientid,
		"title": '无人机急救平台',
		"content": '有用户下单了，请及时处理',
		"force_notification":true,
		"payload": {
			"orderId": orderId
		}
	});
	console.log('pushres', pushres);
	console.log('push_clientid', push_clientid.data[0].push_clientid);

	//返回数据给客户端
	return {
		orderId: orderId,
	}
};
