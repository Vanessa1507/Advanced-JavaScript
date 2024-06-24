// function foo(options) {
function foo({x=0}) {
	// console.log(options.x);
	console.log(x);
}

foo({x:1}) // 1
foo({}) // 0

const arr = ["a", "b"]

const [x, y] =arr

// const x =arr[0]
// const y = arr[1]

console.log(x);
console.log(y);


const obj = { first: "Laura", last: "Suárez", age: 25 };
// const { first: f, last: l, age: a } = obj;
const { first, last, age } = obj;


// const f = obj.first
// const l = obj.last
// console.log(f);
// console.log(l);