const userInputString = prompt(
  "Please enter the froyo flavors you want separated by a comma and a space. We offer vanilla, strawberry, and coffee flavors.",
  "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

const stringArray = userInputString.split(", ");

const flavors = {
  vanilla: 0,
  strawberry: 0,
  coffee: 0,
};

for (let i = 0; i < stringArray.length; i++) {
  if (stringArray[i] == "vanilla") {
    flavors["vanilla"] = flavors["vanilla"] + 1;
  } else if (stringArray[i] == "strawberry") {
    flavors["strawberry"] = flavors["strawberry"] + 1;
  } else if (stringArray[i] == "coffee") {
    flavors["coffee"] = flavors["coffee"] + 1;
  }
}
console.log(flavors)
console.table(flavors)

// For some reason both the log and the table only show correctly after refreshing the page with the concole open already. Before refreshing, they both just show up as objects with drop downs showing the information. Despite that inconvenience, everything seems to work correctly! 