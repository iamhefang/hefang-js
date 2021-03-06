/**
 * 批量执行任务
 * @description 直接使用js原生的Promise.all传入的是数组,
 * 对于需要根据实际情况确定请求个数的请求处理结果的时候不太友好,
 * 使用这个函数可以直接根据键使用处理结果, 更友好
 * @author 何方
 * @param {object} promiseMap 要执行的任务集合
 * @example
 * doPromiseAll({
 *     userList:fetchUser(),
 *     systemList:fetchSystem()
 * }).then(values=>{
 *     // values的格式为{userList:fetchUser的结果,systemList:fetchSystem的结果}
 * }).catch(reason=>notification.error({
 *     message: '网络请求出错'
 *     description: reason
 * }))
 *
 * @returns {Promise<{ [key: string]: T }>}
 */
export function doPromiseAll(promiseMap: { [key: string]: Promise<any> }): Promise<{ [key: string]: any }> {
	const names = Object.keys(promiseMap);
	return Promise.all(Object.values(promiseMap)).then(values => {
		const resultMap = {};
		values.forEach((value, index) => resultMap[names[index]] = value);
		return resultMap;
	});
}