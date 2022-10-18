export default getTheEvenElements;

function getTheEvenElements(arr)
{
    let resArr = [];

    arr.forEach(element => {
        if (element % 2 === 0) {
            resArr.push(element);
        }
    });

    return resArr;
}