function makeUser() {
    return {
      name: "john",
      ref: this,
    };
  }
  let user = makeUser();
  console.log(user.ref);  // Error: Cannot read property 'name' of undefined
  
  
  ///////////////////////////////////////////////
  
  
  function makeUser() {
      return {
        name: "John",
        ref() {
          return this;
        }
      };
    }
    
    let user = makeUser();
    
  console.log( user.ref().name ); // John
  
  