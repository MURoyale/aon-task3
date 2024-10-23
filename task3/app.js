// 1
let students = require("./data.json");
// 2
let getAllStudents = () => {
  return students;
};
// 3
let getFirstStudent = () => {
  let x = 0;
  return students[x];
};
// console.log(getFirstStudent())

// 3
let getLastStudent = () => {
  return students[students.length - 1];
};

// 4
let getStudentById = (id) => {
  return students.filter((students) => students.id === id);
};
//  console.log(getStudentById(8));

// 5
let getStudentsByStage = (stage) => {
  return students.filter((students) => students.stage === stage);
};
// console.log(getStudentsByStage("Grade 10"));

// 6
let addStudent = (newStudent) => {
  students.push(newStudent);
  console.log(students);
};
// addStudent({
//   id: 21,
//   name: "nike walker",
//   stage: "Grade 9",
//   age: 16,
// });

// 7
let removeStudentById = (id) => {
  students = students.filter((students) => students.id !== id);
  console.log(students);
};
// removeStudentById(19);

// 8
let updateStudentById = (id, updatedData) => {
  index = students.findIndex((students) => students.id === id);

  students[index] = { ...students, ...updatedData };
  console.log(students);
};
// updateStudentById(18, {
//   id: 18,
//   name: "jhon Walker",
//   stage: "Grade 10",
//   age: 15,
// });

// 9
let getAverageAge = () => {
  let totalStudents = students.reduce((sum, index) => sum + index.age, 0);

  return totalStudents / students.length;
};
// console.log(getAverageAge());

// 10
let getStudentsAboveAge = (age) => {
  return students.filter((students) => students.age > age);
};
// console.log(getStudentsAboveAge(15));

// 11
let getStudentsBelowAge = (age) => {
  return students.filter((students) => students.age < age);
};
// console.log(getStudentsBelowAge(15));

// 12
let getStudentByName = (name) => {
  return students.filter((students) => students.name === name);
};
// console.log(getStudentByName("James Martin"))

// 13
let sortStudentsByName = () => {
  return students.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
};
// console.log(sortStudentsByName());

// 14
let sortStudentsByAge = () => {
  return students.sort((a, b) => a.age - b.age);
};
// console.log(sortStudentsByAge());

// 15
let filterStudentsByAge = (age) => {
  return students.filter((students) => students.age === age);
};
// console.log(filterStudentsByAge(16));

// 16
let filterStudentsByStage = (stage) => {
  return students.filter((students) => students.stage === stage);
};
// console.log(filterStudentsByStage("Grade 12"))

// 17
let countStudents = () => {
  return students.length;
};
// console.log(countStudents());

// 18
let countStudentsByStage = (stage) => {
  return students.filter((students) => students.stage === stage).length;
};
// console.log(countStudentsByStage("Grade 10"));

// 19
let incrementStudentAgeById = (id) => {
  let index = students.find((index) => index.id === id);
  index.age += 1;
  return index;
};
// console.log(incrementStudentAgeById(20))

// 20
let decrementStudentAgeById = (id) => {
  let index = students.find((index) => index.id === id);
  index.age -= 1;
  return index;
};
// console.log(decrementStudentAgeById(18))

// 21
let getStudentsWithIdGreaterThan = (id) => {
  return students.filter((students) => students.id > id);
};
// console.log(getStudentsWithIdGreaterThan(15))

// 22
let getStudentsWithIdLessThan = (id) => {
  return students.filter((students) => students.id < id);
};
// console.log(getStudentsWithIdLessThan(15));

// 23
let getStudentsInRangeOfIds = (startId, endId) => {
  return students.filter((index) => index.id >= startId && index.id <= endId);
};
// console.log(getStudentsInRangeOfIds(10,18));

// 24
let getTotalAgeOfStudents = () => {
  let totalStudentsAge = students.reduce((sum, index) => sum + index.age, 0);
  return totalStudentsAge;
};
// console.log(getTotalAgeOfStudents());

// 25
let getAverageAgeByStage = (stage) => {
  let totalStudentsStage = students.filter((index) => index.stage === stage);
  let totalAge = totalStudentsStage.reduce((sum, index) => sum + index.age, 0);
  return totalAge / totalStudentsStage.length;
};
// console.log(getAverageAgeByStage("Grade 9"));

// 26
let getYoungestStudent = () => {
  return students.reduce((youngest, index) => {
    return index.age < youngest.age ? index : youngest;
  });
};
// console.log(getYoungestStudent());

// 27
let getOldestStudent = () => {
  return students.reduce((oldest, index) => {
    return index.age > oldest.age ? index : oldest;
  });
};
// console.log(getOldestStudent());

// 28
let hasStudentWithName = (name) => {
 return students.some(index => index.name.toLowerCase() === name.toLowerCase());
};
// console.log(hasStudentWithName("ava King"));

// 29
let getNamesOfAllStudents = () => {
  return students.map(students => students.name);
};
// console.log(getNamesOfAllStudents());

// 30
let getAllStudentIds = () => {
  return students.map(students => students.id);
};
// console.log(getAllStudentIds());

// 31
let getAllStudentStages = () => {
  return students.map(students => students.stage);
};
// console.log(getAllStudentStages());

// 32
let getStudentsWithNamesStartingWith = (letter) => {
  return students.filter(students => students.name.toLowerCase().startsWith(letter));
};
// console.log(getStudentsWithNamesStartingWith("a"));

// 33
let getStudentsWithNamesEndingWith = (letter) => {
  return students.filter(students => students.name.toLowerCase().endsWith(letter));
};
// console.log(getStudentsWithNamesEndingWith("r"));

// 34
let getStudentsWithNameLengthGreaterThan = (length) => {
  return students.filter(students => students.name.length > length);
};
// console.log(getStudentsWithNameLengthGreaterThan(10));

// 35
let getStudentsWithNameLengthLessThan = (length) => {
  return students.filter(students => students.name.length < length);
};
// console.log(getStudentsWithNameLengthLessThan(10));

// 36
let getAllStudentsSortedById = () => {
  return students.sort((a, b) => a.id - b.id);
};
// console.log(getAllStudentsSortedById());

// 37
let reverseStudentList = () => {
  return students.reverse()
};
// console.log(reverseStudentList());

// 38
let getRandomStudent = () => {
  let randomStudent = Math.floor(Math.random() * students.length);
  return students[randomStudent]
};
// console.log(getRandomStudent());

// 39
let removeStudentsAboveAge = (age) => {
students = students.filter(index => index.age <= age)
};
// removeStudentsAboveAge(16)
// console.log(students);


// 40
let removeStudentsBelowAge = (age) => {
  students = students.filter(index => index.age >= age)
};
// removeStudentsBelowAge(15)
// console.log(students);

// 41
let getStudentsBetweenAges = (minAge, maxAge) => {
  return students.filter(students => students.age >= minAge && students.age <= maxAge);
};
// console.log(getStudentsBetweenAges(14,17));

// 42
let countStudentsAboveAge = (age) => {
  return students.filter(students => students.age >= age).length;
};
// console.log(countStudentsAboveAge(17));

// 43
let countStudentsBelowAge = (age) => {
  return students.filter(students => students.age <= age).length;
};
// console.log(countStudentsBelowAge(14));

// 44
let addMultipleStudents = (newStudents) => {
   students.push(...newStudents);
};
// let newStudent = [  {
//   "id": 21,
//   "name": "lava iron",
//   "stage": "Grade 10",
//   "age": 15
// },
// {
//   "id": 22,
//   "name": "iron King",
//   "stage": "Grade 11",
//   "age": 16
// }]
// addMultipleStudents(newStudent);
// console.log(students);

// 45
let removeMultipleStudentsById = (ids) => {
  students = students.filter(index => !ids.includes(index.id));
};
// let removedId = [17, 18]
// removeMultipleStudentsById(removedId)
// console.log(students);

// 46
let updateMultipleStudentsById = (ids, updatedData) => {
  students.forEach(index => {
    if (ids.includes(index.id)) {
      Object.assign(index, updatedData)
    }
  })
};
// let studentIdsUpdate = [17 ,18]
// let newData = {"age": 16 }
// updateMultipleStudentsById(studentIdsUpdate, newData)
// console.log(students);

// 47
let isAllStudentsAboveAge = (age) => {
  return students.every(students => students.age > age);
};
// console.log(isAllStudentsAboveAge(13));

// 48
let isAllStudentsBelowAge = (age) => {
  return students.every(students => students.age < age);
};
// console.log(isAllStudentsBelowAge(30));

// 49
let hasStudentsInStage = (stage) => {
  return students.some(students => students.stage === stage);
};
// console.log(hasStudentsInStage("Grade 11"));

// 50
let getStudentNamesWithIds = (ids) => {
  return students
  .filter(index => ids.includes(index.id))
  .map(index => index.name);
};
// let idsStudent = [16];
// let studentName = getStudentNamesWithIds(idsStudent);
// console.log(studentName);