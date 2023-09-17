function sumObject(objectOne, objectTwo) {
    const objectNew = { ...objectOne };
    for (const fields in objectTwo) {
        if (objectNew[fields]) {
            objectNew[fields] = objectNew[fields] + objectTwo[fields];  
        } else {
            objectNew[fields] = objectTwo[fields];
        }
   }
   return objectNew;
}
console.log(sumObject({ cool: 'yes', value: 5 } , { cool: 'no', result: 15 }));
console.log(sumObject({ cool: 'yes', value: 5 } , { text: 'no', value: 15 }));

// function addKey(result, obj) {
// 	for (const key in obj) {
// 		if (Object.hasOwnProperty.call(result, key)) {
// 			result[key] += obj[key];
// 		} else {
// 			result[key] = obj[key];
// 		}
// 	}
// }

// function secondTask(obj1, obj2) {
// 	let result = {};
// 	addKey(result, obj1);
// 	addKey(result, obj2);
// 	return result;
// }
// console.log(secondTask({ cool: 'yes', value: 5 }, { cool: 'no', result: 15 }));
// console.log(secondTask({ cool: 'yes', value: 5 }, { text: 'no', value: 15 }));