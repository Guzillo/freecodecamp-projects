const inventory = [];

function checkIfProductIsCorrect(productObj) {
  //check if it's an object and if it has correct properties
  if((typeof productObj === 'object' && !Array.isArray(productObj) && productObj !== null) &&
    ('name' in productObj && 'quantity' in productObj)) {
    return true;     
  }
  return false;
}

function findProductIndex(productName) {
    let productNameLowerCase = productName.toLowerCase();
    let index = -1;
    let counter = 0;
    for(const item of inventory){
      if(item.name === productNameLowerCase) {
        index = counter;
      }
    counter++;
    }
  return index;
}

function addProduct(productObject) {
  if(checkIfProductIsCorrect(productObject)) {
    productObject.name = productObject.name.toLowerCase();
    const inventoryProductIndex = findProductIndex(productObject.name);
    const isInInventory = (inventoryProductIndex !== -1);
    if(isInInventory) {
      const accessedProduct = inventory[inventoryProductIndex];
      accessedProduct.quantity += productObject.quantity;
      console.log(`${accessedProduct.name.toLowerCase()} quantity updated`);
    } else {
      inventory.push(productObject);
      console.log(`${productObject.name.toLowerCase()} added to inventory`);
    }
  }else {
    console.log("provided product is incorrect")
  }
}

function removeProduct(productName, quantityToSub) {
  let prodName = productName.toLowerCase();
  const prodIndex = findProductIndex(prodName);
  if(prodIndex !== -1) {
    const inventoryProduct = inventory[prodIndex];
    if(inventoryProduct.quantity > quantityToSub) {
      inventoryProduct.quantity -= quantityToSub;
      console.log(`Remaining ${prodName} pieces: ${inventoryProduct.quantity}`);
    }else if (inventoryProduct.quantity === quantityToSub){
      inventory.splice(prodIndex, 1);
    } else {
      console.log(`Not enough ${prodName} available, remaining pieces: ${inventoryProduct.quantity}`);
    }
  }else {
    console.log(`${prodName} not found`);
  }  
}