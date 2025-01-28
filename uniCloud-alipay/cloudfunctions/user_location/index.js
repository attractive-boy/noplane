'use strict';
exports.main = async (event, context) => {
	const db = uniCloud.database();
	let result = null;
	//event为客户端上传的参数
	console.log('event : ', event)
	switch(event.type){
		case 'init':
			//如果数据库不存在 则创建
			const res = await db.collection('user_location').get( {
				deviceId: event.deviceId
			});
			if(res.data.length === 0){
				await db.collection('user_location').add({
					_id : event.deviceId,
					deviceId: event.deviceId,
					deviceModel: event.deviceModel,
					latitude: event.latitude,
					longitude: event.longitude,
					createTime: new Date().getTime(),
					updateTime: new Date().getTime(),
					push_clientid: event.push_clientid,
				});
			}else{
				await db.collection('user_location').where({
					deviceId: event.deviceId,
				}).update({
					deviceId: event.deviceId,
					latitude: event.latitude,
					longitude: event.longitude,
					updateTime: new Date().getTime(),
					push_clientid: event.push_clientid,
				});
			}
			// 返回数据库中所有的位置信息
			result = await db.collection('user_location').get();
			break;
		default:
			break;
	}
	return result;
};
