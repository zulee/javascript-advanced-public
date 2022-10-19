export default binarySearch;

function binarySearch(arr, nr2find, d = 0)
{
    console.log(arr);
    if ((arr.length === 0) || (d > 10)) return false;
    if (arr.length === 1) return arr[0] === nr2find;

    const arrSplitPoint = Math.round((arr.length-1) / 2);
    const examinedItem = arr[arrSplitPoint];
    console.log(examinedItem);

    if (examinedItem === nr2find){
        return true;
    }
    else if (examinedItem > nr2find){
        return binarySearch(arr.slice(0,arrSplitPoint),nr2find,d+1);
    }
    else{
        return binarySearch(arr.slice(arrSplitPoint),nr2find,d+1);
    }

    return binarySearch(arr, nr2find, d+1);
}