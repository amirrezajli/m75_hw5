const copyObject = (object) => {
    let copiobj = {};
  
    for (let key in object) {
      if (typeof object[key] === "object")
        copiobj[key] = { ...copyObject(object[key]) };
      else copiobj[key] = object[key];
    }
    return copiobj;
  };
  
  const mainObj = {
    id: {
      name: "pouya",
      grades: {
        Mathmatics: 18,
        physics: 19,
        english: 15,
      },
    },
  };
  
  let c = copyObject(mainObj);
  mainObj.id.grades.physics= 14;
  
  console.log(c.id.grades.physics);
  