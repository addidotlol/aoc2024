let list1: number[] = [];
let list2: number[] = [];
let dist: number[] = [];

let file = await Deno.readFile("input.txt");
const decoder = new TextDecoder("utf-8");
const text = decoder.decode(file);
text.split("\n").forEach((line) => {
  let parts = line.split("   ");
  if (isNaN(parseInt(parts[0]))) {
    return;
  }
  list1.push(parseInt(parts[0]));
  list2.push(parseInt(parts[1]));
});

list1.sort((n1, n2) => n1 - n2);
list2.sort((n1, n2) => n1 - n2);

for (let i = 0; i < list1.length; i++) {
  let num1 = list1[i];
  let num2 = list2[i];
  dist.push(Math.abs(num1 - num2));
}

let num = 0;
dist.forEach((n) => {
  console.log(n);
  num = num + n;
});

console.log(list1);
console.log(list2);
console.log(dist);
console.log(num);
