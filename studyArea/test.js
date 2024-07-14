async function getEmployee(id) {
  const response = await fetch(`https://learn.codeit.kr/api/employees/${id}`);
  const data = await response.json();
  return data;
}

// const promises = [];

// for (let i = 1; i < 11; i++) {
//   promises.push(getEmployee(i));
// }

console.log(await getEmployee(1));
// console.log(promises);

// let employees;

// employees = await Promise.all(promises);

// console.log(employees);
