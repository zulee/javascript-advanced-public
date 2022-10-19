export default getCartesianProductOfTwoArrays;

function getCartesianProductOfTwoArrays(a1,a2)
{ 
    let res = [];
    a1.forEach(e1 => a2.map(e2 => res.push([e1,e2])));
    return res;
}