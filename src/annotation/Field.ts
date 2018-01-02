export interface FieldSettings {
	ui: string;
}

export function Field(settings?: FieldSettings) {
	return function (target: any, key: string) {

	}
}
// function realName(target, key: string): any {
// 	// property value
// 	var _val = target[key];
//
// 	// property getter
// 	var getter = function () {
// 		return "Ragularuban(" + _val + ")";
// 	};
//
// 	// property setter
// 	var setter = function (newVal) {
// 		_val = newVal;
// 	};
//
// 	// Create new property with getter and setter
// 	Object.defineProperty(target, key, {
// 		get: getter,
// 		set: setter
// 	});
// }
