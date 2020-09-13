/* 
    编号：141
    环形链表：https://leetcode-cn.com/problems/linked-list-cycle/
    给定一个链表，判断链表中是否有环。
    为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

    ex.
    输入：head = [3,2,0,-4], pos = 1
    输出：true
    解释：链表中有一个环，其尾部连接到第二个节点。

    进阶：
    你能用 O(1)（即，常量）内存解决此问题吗？
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    
};

/* 
    总结：
    方法一：硬做，给个时间限制（1s或0.5s），看能否遍历到null
    方法二：用set数据结构把遍历过的节点存起来，然后判重,时间复杂度O(n)
    方法三：快慢指针，看是否会相遇，时间复杂度O(n)
*/