export default searchAndCount;

function searchAndCount(arr,nr2count)
{
    return arr.filter(e => e === nr2count).length;
}