/* 
    编号：20
    有效的括号：https://leetcode-cn.com/problems/valid-parentheses/
    给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
    有效字符串需满足：
        - 左括号必须用相同类型的右括号闭合。
        - 左括号必须以正确的顺序闭合。
        - 注意空字符串可被认为是有效字符串。
    ex1.
    输入: "()"
    输出: true
    ex2.
    输入: "([)]"
    输出: false
*/

/* 
    使用堆栈。
    - 如果先入栈的是右括号，则不合法。
    - 左括号入栈
        - 遇到字符串中第一个右括号，看栈顶是否为匹配的左括号
    时间复杂度 O(n)
    空间复杂度 O(n)
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[]
    let map={")":"(","]":"[","}":"{"}
    // console.log(map['('])
    for(let i=0;i<s.length;i++){
        let c=s[i];
        if(map[c]===undefined){
            // 遇到左括号则入栈
            stack.push(c)
        }else if(stack.pop()!==map[c]){
            // 什么情况进来：不匹配or栈为空（没有匹配的左括号）
            // 遇到右括号则判断栈顶是否为匹配的左括号,如果不是则直接返回false
            return false
        }
    } 
    // 合法stack一定为空
    // 这里有坑，不能直接判断stack，空数组转布尔值为true
    return !stack.length
};

// console.log(isValid('))(('))

/* 
    方法二：替换成对的括号为空字符，若最后长度为0则合法
    时间复杂度 O(n^2)
    因为外层do...while循环时间复杂度为O(n)，内层replace方法需要遍历字符串,时间复杂度为O(n)
*/
/* var isValid = function (s) {
    let length;
    do{
        length=s.length;
        s=s.replace('()','').replace('[]','').replace('{}','');
    }while(length!=s.length);
    return s.length==0;
}; */