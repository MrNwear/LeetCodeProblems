/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 * problem : https://leetcode.com/problems/search-in-a-binary-search-tree
 */
var searchBST = function (root, val) {
    let node = root
    while (node) {
        if (node.val == val) {
            return node;

        }
        node = (val >= node.val) ? node.right : node.left;
    }
    return node;

};