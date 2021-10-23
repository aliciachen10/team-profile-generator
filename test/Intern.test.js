const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
      const obj = new Intern("alicia", "101", "alicia@chen.com");
      //should return obj = {name: 0}
      expect("name" in obj).toEqual(true);
    });

    it("should set 'name' when initialized with name", () => {
      const obj = new Intern("alicia", "101", "alicia@chen.com");
      const nam = "alicia";

      expect(obj.name).toEqual(nam)
    });

    it("should return an object containing a 'school' property when called with the 'new' keyword", () => {
      const obj = new Intern("alicia", "101", "alicia@chen.com", "UNC");
      //should return obj = {name: 0}
      expect("school" in obj).toEqual(true);
    });

    it("should set 'school' when initialized with school", () => {
      const obj = new Intern("alicia", "101", "alicia@chen.com", "UNC");
      const school = "UNC";

      // const obj = new Intern(nam);

      // expect(obj.name).toEqual(nam);
      //above 2 lines is a a long way of writing this below: 
      expect(obj.school).toEqual(school)
    });

    it("should set 'id' when intialized with id", () => {
      const obj = new Intern("alicia", "101", "alicia@chen.com", "UNC");
      const id = "101";

      // const obj = new Intern(nam);

      // expect(obj.name).toEqual(nam);
      //above 2 lines is a a long way of writing this below: 
      expect(obj.id).toEqual("101")
    });

    it("should set 'email' when initialized with email", () => {
      const obj = new Intern("alicia", "101", "alicia@chen.com", "UNC");
      const email = "alicia@chen.com"

      // const obj = new Intern(nam);

      // expect(obj.name).toEqual(nam);
      //above 2 lines is a a long way of writing this below: 
      expect(obj.email).toEqual(email)
    });

  });

  describe("getName", () => {
    it("should return a new 'Intern' object", () => {
      const obj = new Intern("alicia", "101", "alicia@chen.com", "UNC");

      expect(obj instanceof Intern).toEqual(true); 
    });

    it("should return a new 'Intern''s name", () => {
      const nam = "alicia";

      const aliciaIntern = new Intern("alicia", "101", "alicia@chen.com", "UNC");

      expect(aliciaIntern.getName()).toEqual(nam);
    });
  });

  describe("getRole", () => {

    it("should return a new 'Intern''s role", () => {
      const role = "Intern";

      const aliciaIntern = new Intern("alicia", "101", "alicia@chen.com", "UNC");

      expect(aliciaIntern.getRole()).toEqual(role);
    });
  });

  describe("getschool", () => {

    it("should return a new 'Intern''s school", () => {
      const school = "UNC";

      const aliciaIntern = new Intern("alicia", "101", "alicia@chen.com", "UNC");

      expect(aliciaIntern.getSchool()).toEqual(school);
    });
  });

  describe("getId", () => {

    it("should return a new 'Intern''s id", () => {
      const id = "101";

      const aliciaIntern = new Intern("alicia", "101", "alicia@chen.com", "UNC");

      expect(aliciaIntern.getId()).toEqual(id);
    });
  });

  describe("getEmail", () => {

    it("should return a new 'Intern''s email", () => {
      const email = "alicia@chen.com";

      const aliciaIntern = new Intern("alicia", "101", "alicia@chen.com", "UNC");

      expect(aliciaIntern.getEmail()).toEqual(email);
    });
  });

  // describe("value", () => {
  //   it("should return the 'Intern' object's 'name' value", () => {
  //     const nam = 10;
  //     const obj = new Intern(nam);

  //     const result = obj.value();

  //     expect(result).toEqual(nam);
  //   });
  // });
});
