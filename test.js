var nums = ["alice", "bob", "charlie", "danielle"]
console.log(nums)
const a = nums.map(function(e){
    // e[0] = "A"
    return `<p>${e}</p>`
})
console.log(a)