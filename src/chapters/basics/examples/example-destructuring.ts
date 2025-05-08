const record = {
  firstName: "John",
  lastName: "Doe",
  address: "4312 Example Drive",
  city: "Burnaby",
};
const { firstName: name, lastName, ...rest } = record;
console.log(name)
// "John"
console.log(rest) 
// { address: "4312 Example Drive", city: "Burnaby" }