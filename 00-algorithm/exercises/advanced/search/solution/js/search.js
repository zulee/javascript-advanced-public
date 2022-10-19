export default linearSearch;

function linearSearch(arr, nr2find)
{
    return arr.find(e => e === nr2find) !== undefined;
}