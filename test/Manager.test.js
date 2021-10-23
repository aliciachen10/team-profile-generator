const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
      const obj = new Manager("alicia", "101", "alicia@chen.com");
      //should return obj = {name: 0}
      expect("name" in obj).toEqual(true);
    });

    it("should set 'name' when initialized with name", () => {
      const obj = new Manager("alicia", "101", "alicia@chen.com");
      const nam = "alicia";

      expect(obj.name).toEqual(nam)
    });

    it("should return an object containing a 'officeNumber' property when called with the 'new' keyword", () => {
      const obj = new Manager("alicia", "101", "alicia@chen.com", "A01");
      //should return obj = {name: 0}
      expect("officeNumber" in obj).toEqual(true);
    });

    it("should set 'officeNumber' when initialized with officeNumber", () => {
      const obj = new Manager("alicia", "101", "alicia@chen.com", "A01");
      const officeNumber = "A01";

      // const obj = new Manager(nam);

      // expect(obj.name).toEqual(nam);
      //above 2 lines is a a long way of writing this below: 
      expect(obj.officeNumber).toEqual(officeNumber)
    });

    it("should set 'id' when intialized with id", () => {
      const obj = new Manager("alicia", "101", "alicia@chen.com", "A01");
      const id = "101";

      // const obj = new Manager(nam);

      // expect(obj.name).toEqual(nam);
      //above 2 lines is a a long way of writing this below: 
      expect(obj.id).toEqual("101")
    });

    it("should set 'email' when initialized with email", () => {
      const obj = new Manager("alicia", "101", "alicia@chen.com", "A01");
      const email = "alicia@chen.com"

      // const obj = new Manager(nam);

      // expect(obj.name).toEqual(nam);
      //above 2 lines is a a long way of writing this below: 
      expect(obj.email).toEqual(email)
    });

  });

  describe("getName", () => {
    it("should return a new 'Manager' object", () => {
      const obj = new Manager("alicia", "101", "alicia@chen.com", "A01");

      expect(obj instanceof Manager).toEqual(true); 
    });

    it("should return a new 'Manager''s name", () => {
      const nam = "alicia";

      const aliciaManager = new Manager("alicia", "101", "alicia@chen.com", "A01");

      expect(aliciaManager.getName()).toEqual(nam);
    });
  });

  describe("getRole", () => {

    it("should return a new 'Manager''s role", () => {
      const role = "Manager";

      const aliciaManager = new Manager("alicia", "101", "alicia@chen.com", "A01");

      expect(aliciaManager.getRole()).toEqual(role);
    });
  });

  describe("getOffice", () => {

    it("should return a new 'Manager''s officeNumber", () => {
      const officeNumber = "A01";

      const aliciaManager = new Manager("alicia", "101", "alicia@chen.com", "A01");

      expect(aliciaManager.getOffice()).toEqual(officeNumber);
    });
  });

  describe("getId", () => {

    it("should return a new 'Manager''s id", () => {
      const id = "101";

      const aliciaManager = new Manager("alicia", "101", "alicia@chen.com", "A01");

      expect(aliciaManager.getId()).toEqual(id);
    });
  });

  describe("getEmail", () => {

    it("should return a new 'Manager''s email", () => {
      const email = "alicia@chen.com";

      const aliciaManager = new Manager("alicia", "101", "alicia@chen.com", "A01");

      expect(aliciaManager.getEmail()).toEqual(email);
    });
  });

  // describe("value", () => {
  //   it("should return the 'Manager' object's 'name' value", () => {
  //     const nam = 10;
  //     const obj = new Manager(nam);

  //     const result = obj.value();

  //     expect(result).toEqual(nam);
  //   });
  // });
});
