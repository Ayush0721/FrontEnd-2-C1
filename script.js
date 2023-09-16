const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
      }
  }
  
  // 2. Add Data
  function addData() {
    const name = prompt("Enter name:");
  const age = parseInt(prompt("Enter age:"));
  const profession = prompt("Enter profession:");

  const newDeveloper = {
    name: name,
    age: age,
    profession: profession,
  };

  developers.push(newDeveloper);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    data = data.filter(dev => dev.profession !== 'admin');
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const dummyArray = [hello];
  const result = developers.concat(dummyArray);
  console.log(result);
  }
  
  // 5. Average Age
  function averageAge() {
    const sum = data.reduce((acc, dev) => acc + dev.age, 0);
  const average = sum / data.length;
  console.log(`Average Age: ${average}`);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    const isAbove25 = data.some(dev => dev.age > 25);
  console.log(`At least one developer is above 25: ${isAbove25}`);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const unique = [];
  data.forEach(dev => {
    if (!unique.includes(dev.profession)) {
      unique.push(dev.profession);
    }
  });
  console.log(unique);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => a.age - b.age);
  console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    const john = data.find(dev => dev.name === 'John');
  if (john) {
    john.profession = 'manager';
  }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const developerCount = data.filter(dev => dev.profession === 'developer').length;
  const adminCount = data.filter(dev => dev.profession === 'admin').length;
  console.log(`Total Developers: ${developerCount}, Total Admins: ${adminCount}`);
  }