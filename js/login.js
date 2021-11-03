const result = arr.filter(item => item.statu).reduce((amt,item) => amt += item.price *item.count,0)
console.log(result);