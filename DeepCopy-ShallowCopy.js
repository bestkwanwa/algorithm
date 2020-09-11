let obj3 = {
    val: 3,
    next: null
};
let obj2 = {
    val: 2,
    next: obj3
};
let obj1 = {
    val: 1,
    next: obj2
};

// [objA,objB]=[obj1,obj2];
// console.log(objA);
// objA.val=10;
// // 改了！
// console.log(obj1)



let curr = obj1;
// let next = curr.next
// console.log(next)
let prev = null;

// 有先后顺序
// 数组解构是按顺序进行解构（有序），对象是通过方法名或者属性名进行结构（无序）。
// 结构赋值是浅拷贝
// [curr.next,prev,curr]=[prev,curr,curr.next];
// [curr,curr.next,prev]=[curr.next,prev,curr];
// [curr,curr.next,prev]=[curr.next,prev,curr];

let a=[prev,curr,curr.next];

[curr.next,prev,curr]=a

console.log(curr)

// console.log(prev)


// curr.next=prev;
// prev=curr;
// curr=next

// console.log(curr)
// let arr=[obj1,obj2,obj3]
// arr[0].val=2
// console.log(arr)

// console.log(obj1)



// let a =[obj2,obj1];

// [obj1,obj2]=a;

// console.log(a);
// console.log(obj1);
// console.log(obj2)


// obj1.val=3
// console.log('=+++++++++++++++')
// console.log(a);
// console.log(obj1);
// console.log(obj2)


// a[0].val=3

// console.log(a);

// 变了！字面量创建是浅拷贝
// console.log(obj2)



// console.log(obj1)
// console.log(obj2)
// obj1.val=3
// console.log(obj1)
// console.log(obj2)


// let a=1;
// let b=2;
// [b,a]=[a,b]
// console.log(a)