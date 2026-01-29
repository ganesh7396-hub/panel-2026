
//1) Expetecd Out like This Group of name
/*const arr= [
    { "name": "A", "class": 5 },
    { "name": "B", "class": 6 },
    { "name": "C", "class": 6 },
    { "name": "D", "class": 5 }
]

output : [
        {"class": 5 , names: ["A","D"]},
        {"class": 6 , names: ["B","C"]},
]


function groupNames(items){
const seen= new Set();
const result=[]

for(let item of items){


    if(seen.has(item.class)){
        let findObj = result.find(ii=> ii.class === item.class)
        findObj.name.push(item.name)

    }else{
        result.push({class:item.class,name:[item.name]})
    }
    seen.add(item.class)

}
return result;



}

console.log(groupNames(arr))
*/



// bobble sort 
//console.log(bubbleSort([7,4,3,5,1]));
/*function bubbleSort(arr){
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length -i-1;j++){
        if(arr[j]<arr[j+1]){
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
        }

    }
}

return arr

}
console.log(bubbleSort([7,4,3,5,1]))
*/
/*
function reverseNumber(num){
let reversenum =0;

while(num>0){
let  lastdigit = num%10;
 reversenum =reversenum*10+lastdigit;
num =Math.floor(num/10);
}
return reversenum;

}

console.log(reverseNumber(123456))*/


/*let arr = [6, 4, 0, 8, 10, 2,3,11]
let targetSum = 10;




function findPairs(arr,targetSum){
let seen = new Set()
let result =[];
for(let ar of arr){
let comppletemet =targetSum-ar;
    if(seen.has(comppletemet)){
        result.push([ar,comppletemet])
    }
    seen.add(ar)
}

return result
}


// Find pairs
let result = findPairs(arr, targetSum);
console.log("Pairs that sum up to", targetSum, "without repetition:", result);*/
/*
let request = {
  "user": {
    "name": "ganesh",
    "address": {"landmark": "HYD", "houseNo": "20-100"}
  }
};


function search(obj, searchString) {
    for(let key in obj){
        let value =obj[key]
        if(typeof value == "object" && value !=null){
            if(search(value,searchString)){
                return true
            }
            
        }else if(value === searchString){
            return true;
        }
    }
    return false;


}


console.log(search(request, 'ganesh')); // ✅ true
console.log(search(request, 'HYD'));    // ✅ true
console.log(search(request, 'xyz'));    // false*/


/*let data = [1, 2, {'a': 3, 'b': 4}, [5]];

function flattenarray(datas){
    let flatarr =[]
    datas.forEach(element => {

        if(Array.isArray(element)){
            
            flatarr.push(...flattenarray(element))

        }else if(typeof element == "object" && element !=null){
              flatarr.push(...flattenarray(Object.values(element)))

        }
        else{
            flatarr.push(element);
        }

        
    });
    return flatarr
}

console.log(flattenarray(data))*/