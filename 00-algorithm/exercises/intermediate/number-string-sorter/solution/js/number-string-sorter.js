export default numberAndStringSorter;

function numberAndStringSorter(arr)
{
    let strArr = arr.filter(e => typeof e === 'string');
    let intArr = arr.filter(e => typeof e === 'number');
    let resArr = [];

    for (let index = 0; index < strArr.length; index++) {
        resArr.push(intArr[index]);
        resArr.push(strArr[index]);
    }

    return resArr;
}