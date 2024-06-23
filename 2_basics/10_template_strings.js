const  msg = "Hello Wolrd my name is Vanessa";
console.log(msg);

const  msg2 = 'Hello Wolrd\'s my name is Vanessa';
console.log(msg2);

const  multiline_before = "Hello\nWolrd\nmy\nname\nis\nVanessa";
console.log(multiline_before);

const  multiline_now = `Hello
Wolrd
my
name
is
Vanessa`;
console.log(multiline_now);


const name = "Vanessa";
const place = "World";
const msg_variables = `Hello
${place}
my
name
is
${name}
`;
console.log(msg_variables);

const is_bold = true;
const msg_bold = `Hello Wolrd my name is ${is_bold ? "<b>Vanessa</b>" : "Vanessa"}`;


function h1(strings, ...values) {
	let body = ""
	
	for (let i = 0; i < strings.length; i++) {
		body+= strings[i]+(values[i] || "")		
	}
	return `<h1>${body}</h1>`
}

console.log(h1`Vanessa`); // <h1>Vanessa</h1>
console.log(h1`Hello ${place}, 
my name is ${name}`); // <h1>Hello World, \n my name is Vanessa</h1 >

