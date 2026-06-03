function correctFullName(name, lastName) {
  cleanName = name.trim().toLowerCase();
  cleanLastName = lastName.trim().toLowerCase();
  userName = `${cleanName.charAt(0).toUpperCase()}${cleanName.slice(1)}`;
  userLastName = `${cleanLastName.charAt(0).toUpperCase()}${cleanLastName.slice(1)}`;
  return [userName, userLastName];
}

function generateUserEmail(userName, userLastName) {
  return `${userName.toLowerCase()}.${userLastName.toLowerCase()}@qa-test.com`;
}

function printUserProfile(name, lastName, age, isSubscribed, email) {
  console.log(`=== User Profile ===
Name: ${name}
Last Name: ${lastName}
Age: ${age}
Subscribed: ${isSubscribed}
Email: ${email}
====================
`);
}

const user = {
  name: " aNdrEY ",
  lastName: "      sKalubO ",
  age: 24,
  isSubscribed: true,
};

const [formattedName, formattedLastName] = correctFullName(
  user.name,
  user.lastName,
);
user.name = formattedName;
user.lastName = formattedLastName;

const email = generateUserEmail(user.name, user.lastName);

printUserProfile(user.name, user.lastName, user.age, user.isSubscribed, email);
