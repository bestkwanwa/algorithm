/* 
    编号：1
    两数之和：https://leetcode-cn.com/problems/two-sum/
    给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
    ex.
    给定 nums = [2, 7, 11, 15], target = 9
    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]
*/

/* 
    方法一：暴力双循环
    时间复杂度：O(n^2)
*/
/* var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return [i,j]
            }
        }
    }
}; */

/* 
    方法二：
    「为了对运行时间复杂度进行优化，我们需要一种更有效的方法来检查数组中是否存在目标元素。如果存在，我们需要找出它的索引。保持数组中的每个元素与其索引相互对应的最好方法是什么？哈希表。
    通过以空间换取速度的方式，我们可以将查找时间从 O(n) 降低到 O(1)。哈希表正是为此目的而构建的，它支持以 近似 恒定的时间进行快速查找。我用“近似”来描述，是因为一旦出现冲突，查找用时可能会退化到 O(n)O(n)。但只要你仔细地挑选哈希函数，在哈希表中进行查找的用时应当被摊销为 O(1)。」
*/
var twoSum = function(nums, target) {
    let box={};
    for(let i=0;i<nums.length;i++){
        if(box[target-nums[i]]!==undefined){
            return [i,box[target-nums[i]]]
        }
        box[nums[i]]=i
    }
};


// let res=twoSum([3,2,4],6)
// console.log('res',res)

