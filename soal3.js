let domains = {};

class Domain {
  constructor(domain, list) {
    list.forEach((item) => {
      this[item] = `${domain}.${item}`;
    });
  }
};

let createDomainList = (names, domain) => {
  let namesArr = names.split(","); // ==> ["apple", "goole"]
  let domainsArr = domain.split(","); // ==> ["com", "net"]
  namesArr.forEach((name) => {
    domains[name] = new Domain(name, domainsArr);
  });
};

createDomainList("google,yahoo,maktab,apple", "com,net,org,ir");

console.log(domains);



