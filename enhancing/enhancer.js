module.exports = {
  success,
  fail,
  repair,
  get,
};

// let item = {
//   name: "Sword",
//   enhancement: "15",
//   durability: "80"
// };

function success(item) {
    // accepts item and returns new item modified 
  if (!item.enhancement) {
    return { message: "item unable to be enhanced" };
  } else if (item.enhancement === 20) {
    // - If the item enhancement level is 20, the enhancement level is not changed.
    return {...item}
  } else {
      //- The item's enhancement increases by 1, The durability of the item is not changed.
    return { ...item, enhancement: item.enhancement + 1 };
  };
};

function fail(item) {
  //accepts item and returns new item obj modified by rules
  if (!item.enhancement) {
    return { message: "item unable to be enhanced" };
  } else if (item.enhancement < 15) {
    // - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
    return { ...item, durability: item.durability - 5 };
  } else if (item.enhancement === 15) {
    // - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
    return { ...item, durability: item.durability - 10 };
  } else if (item.enhancement === 20) {
    // if Item is at MAX enhancement, nothing happens
    return item;
  } else {
    //  - If the item's enhancement is 15 or more, the durability of the item is decreased by 10. 
    //- If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
    if (item.enhancement > 16) {
      return {
        ...item,
        durability: item.durability - 10,
        enhancement: item.enhancement - 1,
      };
    }
  }
}
  
function repair(item) {
  // accepts item and returns new item with XP 100 again
  if(!item.durability) {
    return { message: "your item has no durability!"}
  } else if (item.durability >=100 ) {
    return { message: "your item's durability is FULL"}
  } else if (item.durability <= 0) {
    return { message: "your item is broken"}
  }
  return { ...item, durability: 100 };
}

function get(item) {
  //**stretch
  return { ...item };
}
