const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
      const obj = new Employee("alicia", "101", "alicia@chen.com");
      //should return obj = {name: 0}
      expect("name" in obj).toEqual(true);
    });

    it("should set 'name' when initialized with name", () => {
      const obj = new Employee("alicia", "101", "alicia@chen.com");
      const nam = "alicia";

      // const obj = new Employee(nam);

      // expect(obj.name).toEqual(nam);
      //above 2 lines is a a long way of writing this below: 
      expect(obj.name).toEqual(nam)
    });

    it("should set 'id' when intialized with id", () => {
      const obj = new Employee("alicia", "101", "alicia@chen.com");
      const id = "101";

      // const obj = new Employee(nam);

      // expect(obj.name).toEqual(nam);
      //above 2 lines is a a long way of writing this below: 
      expect(obj.id).toEqual(id)
    });

    it("should set 'email' when initialized with email", () => {
      const obj = new Employee("alicia", "101", "alicia@chen.com");
      const email = "alicia@chen.com"

      // const obj = new Employee(nam);

      // expect(obj.name).toEqual(nam);
      //above 2 lines is a a long way of writing this below: 
      expect(obj.email).toEqual(email)
    });

  });

  describe("getName", () => {
    it("should return the name of the Employee", () => {
      const obj = new Employee("alicia", "101", "alicia@chen.com");

      expect(obj instanceof Employee).toEqual(true); 
    });

    it("should return a new 'Employee''s name", () => {
      const nam = "alicia";

      const aliciaEmployee = new Employee("alicia", "101", "alicia@chen.com");

      expect(aliciaEmployee.getName()).toEqual(nam);
    });
  });

  describe("getRole", () => {
    it("should return a new 'Employee' object", () => {
      const obj = new Employee("alicia", "101", "alicia@chen.com");

      expect(obj instanceof Employee).toEqual(true);
    });

    it("should return a new 'Employee''s role", () => {
      const role = "Employee";

      const aliciaEmployee = new Employee("alicia", "101", "alicia@chen.com");

      expect(aliciaEmployee.getRole()).toEqual(role);
    });
  });

  describe("getId", () => {
    it("should return a new 'Employee' object", () => {
      const obj = new Employee("alicia", "101", "alicia@chen.com");

      expect(obj instanceof Employee).toEqual(true);
    });

    it("should return a new 'Employee''s id", () => {
      const id = "101";

      const aliciaEmployee = new Employee("alicia", "101", "alicia@chen.com");

      expect(aliciaEmployee.getId()).toEqual(id);
    });
  });

  describe("getEmail", () => {
    it("should return a new 'Employee' object", () => {
      const obj = new Employee("alicia", "101", "alicia@chen.com");

      expect(obj instanceof Employee).toEqual(true);
    });

    it("should return a new 'Employee''s email", () => {
      const email = "alicia@chen.com";

      const aliciaEmployee = new Employee("alicia", "101", "alicia@chen.com");

      expect(aliciaEmployee.getEmail()).toEqual(email);
    });
  });

  // describe("value", () => {
  //   it("should return the 'Employee' object's 'name' value", () => {
  //     const nam = 10;
  //     const obj = new Employee(nam);

  //     const result = obj.value();

  //     expect(result).toEqual(nam);
  //   });
  // });
});
