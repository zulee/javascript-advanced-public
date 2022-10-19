export default getTheDifferenceBetweenTwoArrays;

function getTheDifferenceBetweenTwoArrays(a1,a2)
{
    const unique1 = a1.filter(e => !a2.some(j => j === e));    
    const unique2 = a2.filter(e => !a1.some(j => j === e));    
    return [...unique1, ...unique2];
}