// const argv = require("yargs").argv;
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const contactOperation = require("./contacts");
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await contactOperation.listContacts();
      console.table(contacts);
      break;

    case "get":
      const contact = await contactOperation.getContactById(id);
      console.log(contact);
      break;

    case "add":
      const newContact = await contactOperation.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const removeContact = await contactOperation.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

//invokeAction(argv);
// invokeAction({ action: "list" });
// const ID = "ddf70377-3fa9-4eaa-95d3-c16480bc35d3";
// invokeAction({ action: "get", id: ID });
// invokeAction({
//   action: "add",
//   name: "Tib",
//   email: "djd@mdk.cc",
//   phone: "22-33-44",
// });
// invokeAction({
//   action: "remove",
//   id: ID,
// });
const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);
