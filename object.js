const object = {
    name: "Nehal",
    age: 24,
    location: {
        city: "Delhi",
        country: "India",
    },
};

const newObject = Object.create(object);
const me = Object.create(object);

// newObject.location.city = "Goa";

console.log({
    Orignal: object,
    New: newObject,
    me,
});
