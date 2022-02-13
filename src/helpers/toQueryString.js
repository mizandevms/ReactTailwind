function clean(obj) {
	for (var propName in obj) {
		if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
			delete obj[propName];
		}
	}
	return obj
}


export const toQueryString = object => {
	if (!object) return ''
	else {
		let result = clean(object);
		return '?' + Object.keys(result)
			.map(key => `${key}=${result[key].toString()}`)
			.join('&');
	}
}