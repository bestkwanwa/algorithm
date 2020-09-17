/* 
    编号：24
    两两交换链表中的结点：https://leetcode-cn.com/problems/swap-nodes-in-pairs/
    给定一个链表，两两交换其中相邻的结点，并返回交换后的链表。
    你不能只是单纯的改变结点内部的值，而是需要实际的进行节点交换。
    ex.
    给定 1->2->3->4, 你应该返回 2->1->4->3.
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

/* 
    方法一：
    时间复杂度 O(n)
*/
var swapPairs = function (head) {
    let tHead = new ListNode(0);    // 添加一个哨兵节点
    tHead.next = head;              
    let temp = tHead;               // 以三个节点为一组进行指针的变换
    while (temp.next !== null && temp.next.next !== null) { // 满足三个节点为一组
        let start = temp.next;
        let end = start.next;
        temp.next = end;
        start.next = end.next
        end.next = start;
        temp = start;
    }
    return tHead.next;
};

/* 
    方法二：递归法
    时间复杂度 O(n)
*/

var swapPairs = function(head) {
    if(head===null||head.next===null){
        return head;
    };
    let next=head.next; //head 和 next 为一组需要互换位置的节点
    head.next=swapPairs(next.next); // 下一组
    next.next=head;
    return next;    // 妙啊！
};