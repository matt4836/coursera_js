function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
      return count;
    },
    reset() {
      count = 0;
      return count;
    },
    setValue(value) {
      count = value;
    },
    display() {
      document.getElementById("countDisplay").innerHTML = count; // Display the count in the HTML
    },
  };
}

function checkCountValue(count) {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}

function createUser(name) {
  let user = { name: name, age: 0 };

  return {
    setName(newName) {
      user.name = newName;
    },
    getName() {
      return user.name;
    },
    setAge(newAge) {
      user.age = newAge;
    },
    getAge() {
      return user.age;
    },
  };
}
let user = createUser("Place Holder");
let counter = createCounter();

function increaseCount() {
  counter.increment();
  counter.display();
}

function resetCount() {
  counter.reset();
  counter.display()
}

function setCounterValue() {
  let value = document.getElementById("counterValue").value;
  counter.setValue(value)
  counter.display()
}

function setName() {
  let newName = document.getElementById("newName").value;
  user.setName(newName);
  document.getElementById("user_name").innerText = user.getName();
}
