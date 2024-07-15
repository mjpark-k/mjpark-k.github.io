const res = await fetch('https://learn.codeit.kr/api/color-surveys');
const data = await res.json();
console.log(data);
