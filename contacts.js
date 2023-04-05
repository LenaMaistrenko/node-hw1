const { v4 } = require("uuid");
const path = require("path");
const contactsPath = path.resolve("./db/contacts.json");
const fs = require("fs").promises;

async function listContacts() {
  const data = await fs.readFile(contactsPath, "utf8");
  const contacts = JSON.parse(data);
  return contacts;
}

async function getContactById(contactId) {
  const data = await fs.readFile(contactsPath, "utf8");
  const contacts = JSON.parse(data);
  const result = contacts.find((item) => item.id === contactId);
  if (!result) {
    console.log("error");
    return null;
  }
  return result;
}

async function removeContact(contactId) {
  const data = await fs.readFile(contactsPath, "utf8");
  const contacts = JSON.parse(data);
  const idx = contacts.findIndex((item) => item.id === contactId);
  if (idx === -1) {
    return null;
  }
  const [removeContact] = contacts.splice(idx, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return removeContact;
}

async function addContact(name, email, phone) {
  const data = await fs.readFile(contactsPath, "utf8");
  const contacts = JSON.parse(data);
  const newContact = { id: v4(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
// listContacts();
// const ID = "rsKkOQUi80UsgVPCcLZZW";
// getContactById(ID);

// console.log("hi!");
// const { getCurrentDate } = require("./dateUtils");
// global.testData = "123";
// console.log("result:", getCurrentDate());
// console.log(global.testData);
// console.log(process.argv);
// console.log(__dirname);
// console.log(__filename);
// const Calc = require("calc-js").Calc;
// console.log(process.argv);
// const [, , a, b] = process.argv;
// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());
// const path = require("path");
// console.log(path.resolve("dateUtils.js"));

// const fs = require("fs")
/////асинхронное чтение из файла, синхр лучше не исрльзовать!
// fs.readFile("./data.txt", "utf8", (error, data) => {
//   if (error) {
//     console.log(error);
//   }
//   console.log(data);
// });
//
// fs.readFile(path.resolve("./data.txt"), "utf8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));
//console.log("sinhron");

// (async () => {
//   try {
//     const data = await fs.readFile(path.resolve("./db/contacts.json"), "utf8");
//     const contacts = JSON.parse(data);
//     //console.log(data[1]);
//     console.log(contacts[1]);
//     // const newContent = `${data}NEWtest`;
//     // await fs.writeFile("./data1.txt", newContent, "utf8");
//   } catch (err) {
//     console.error(err);
//   }
// })();
