/* 
    编号：206
    两数之和：https://leetcode-cn.com/problems/reverse-linked-list/
    反转一个单链表。
    ex.
    输入: 1->2->3->4->5->NULL
    输出: 5->4->3->2->1->NULL

    进阶:
    你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
*/

/* 
    方法一：
    设置prev指针指向null，curr指针指向head。让curr.next指向prev，prev指向curr，curr指向curr.next，完成一次迭代。
    时间复杂度 O(n)
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/* var reverseList = function (head) {
    let curr=head
    let prev=null
    while(curr!==null){
        // let next=curr.next
        curr.next=prev;
        prev=curr;
        // curr=next
        curr=curr.next
    }
    return prev
}; */

// var reverseList = function (head) {
//     // 使用解构赋值语法糖
//     let [prev,curr]=[null,head]
//     while(curr){
//         [curr.next,prev,curr]=[prev,curr,curr.next]
//     }
//     return prev
// };

/* 
    方法二：尾递归法
*/

/* let reverseList = function (head) {
    let reverse=(prev,curr)=>{
        if(!curr) return prev;
        let next=curr.next;
        curr.next=prev;
        return reverse(curr,next)
    }
    return reverse(null,head);
}; */

/* 
    未完
*/