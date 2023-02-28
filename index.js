//typical function for first two tests:


//typical example function for last function:
// const drivers = [
//   {
//     name: 'Bobby',
//     hometown: 'Pittsburgh' },
//   {
//     name: 'Sammy',
//     hometown: 'New York' } ,
//   {
//     name: 'Sally',
//     hometown: 'Cleveland' },
//   {
//     name: 'Annette',
//     hometown: 'Los Angeles' },
//   {
//     name: 'Bobby',
//     hometown: 'Tampa Bay' }
// ];

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

//functions

//findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
function findMatching(collection,name) {
  const found = collection.filter((x)=> x.toLowerCase()=== name.toLowerCase())
  return found
}
//fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.


function fuzzyMatch(collection,letters) {
  const found = collection.filter((x)=> x.toLowerCase().indexOf(letters.toLowerCase())===0)
  console.log(found)
  return found
}


//matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.
function matchName (collection, name){
  const found = collection.filter((x)=> x.name === name)
    console.log(found)
    return found
  }


// matchName(drivers,'Tampa Bay')