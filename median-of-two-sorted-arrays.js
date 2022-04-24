/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let maxlength = nums1.length + nums2.length;
    let array = [];
    let m1index = 0;
    let m2index = 0;
    for (let i = 0; i < maxlength; i++) {
        if (m1index < nums1.length) {
            if (m2index < nums2.length) {
                if (nums1[m1index] < nums2[m2index]) {
                    array.push(nums1[m1index]);
                    m1index += 1;
                }
                else {
                    array.push(nums2[m2index]);
                    m2index += 1;
                }
            }
            else {
                array.push(nums1[m1index]);
                m1index += 1;
            }
        }
        else {
            array.push(nums2[m2index]);
            m2index += 1;

        }
    }
    if (array.length % 2 == 0) {
        return (array[array.length / 2] + array[array.length / 2 - 1]) / 2;
    }
    return array[0];
};