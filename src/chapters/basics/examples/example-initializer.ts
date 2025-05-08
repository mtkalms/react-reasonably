const record = {
  firstName: "Jane",
  lastName: "Doe",
};
const update = {
  firstName: "John",
  city: "Burnaby",
};
console.log({ ...record, ...update });
// { firstName: "John", lastName: "Doe", city: "Burnaby" }