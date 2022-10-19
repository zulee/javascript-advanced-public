export default getOddEvenElements;

function getOddEvenElements(arr)
{
    return arr.filter(e =>e % 2 !== 0);
}