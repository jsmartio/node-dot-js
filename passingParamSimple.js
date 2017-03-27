var result = 0

for (var i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i])
}

console.log(result)


// executed using the following where the above file is called params.js
//  node params.js 1 2 3 4
// 1 2 3 4 are all arguments being passed to the program in an array format ["1","2","3","4"]
