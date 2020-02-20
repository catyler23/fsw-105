var shoppingCart = {
  firstName: "Caprease", //(string)
  lastName: "Tyler",
  howManyItem: 25, //Number                                    // (Object)
  howManyItemExpected: 50, //Number
  shoppingFruitList: ["strawberry", "mango", "grape", "kiwi"], //Array & (string)
  isItFull: false, //Boolean

  fullName: function() {
    console.log(this.firstName + " " + this.lastName);
  }
};
console.log(shoppingCart.fullName());
console.log(shoppingCart);
console.log(shoppingCart.howManyItemExpected - shoppingCart.howManyItem); //Method
console.log(shoppingCart.howManyItemExpected);
console.log(shoppingCart.shoppingFruitList[1]); //my Favorite fruit!!
