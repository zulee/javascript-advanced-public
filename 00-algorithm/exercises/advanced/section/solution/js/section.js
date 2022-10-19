export default getSectionOfTwoArrays;

function getSectionOfTwoArrays(a1,a2)
{
    return a1.filter(e => a2.some(j => j === e));
}