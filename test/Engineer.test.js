const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
      const obj = new Engineer("alicia", "101", "alicia@chen.com");
      //should return obj = {name: 0}
      expect("name" in obj).toEqual(true);
    });

    it("should set 'name' when initialized with name", () => {
      const obj = new Engineer("alicia", "101", "alicia@chen.com");
      const nam = "alicia";

      // const obj = new Engineer(nam);

      // expect(obj.name).toEqual(nam);
      //above 2 lines is a a long way of writing this below: 
      expect(obj.name).toEqual(nam)
    });

    it("should return an object containing a 'github' property when called with the 'new' keyword", () => {
      const obj = new Engineer("alicia", "101", "alicia@chen.com", "aliciachen10");
      //should return obj = {name: 0}
      expect("github" in obj).toEqual(true);
    });

    it("should set 'github' when initialized with github", () => {
      const obj = new Engineer("alicia", "101", "alicia@chen.com", "aliciachen10");
      const github = "aliciachen10";

      // const obj = new Engineer(nam);

      // expect(obj.name).toEqual(nam);
      //above 2 lines is a a long way of writing this below: 
      expect(obj.github).toEqual(github)
    });

    it("should set 'id' when intialized with id", () => {
      const obj = new Engineer("alicia", "101", "alicia@chen.com", "aliciachen10");
      const id = "101";

      // const obj = new Engineer(nam);

      // expect(obj.name).toEqual(nam);
      //above 2 lines is a a long way of writing this below: 
      expect(obj.id).toEqual("101")
    });

    it("should set 'email' when initialized with email", () => {
      const obj = new Engineer("alicia", "101", "alicia@chen.com", "aliciachen10");
      const email = "alicia@chen.com"

      // const obj = new Engineer(nam);

      // expect(obj.name).toEqual(nam);
      //above 2 lines is a a long way of writing this below: 
      expect(obj.email).toEqual(email)
    });

  });

  describe("getName", () => {
    it("should return the name of the Engineer", () => {
      const obj = new Engineer("alicia", "101", "alicia@chen.com", "aliciachen10");

      expect(obj instanceof Engineer).toEqual(true); 
    });

    it("should return a new 'Engineer''s name", () => {
      const nam = "alicia";

      const aliciaEngineer = new Engineer("alicia", "101", "alicia@chen.com", "aliciachen10");

      expect(aliciaEngineer.getName()).toEqual(nam);
    });
  });

  describe("getRole", () => {
    it("should return a new 'Engineer' object", () => {
      const obj = new Engineer("alicia", "101", "alicia@chen.com", "aliciachen10");

      expect(obj instanceof Engineer).toEqual(true);
    });

    it("should return a new 'Engineer''s role", () => {
      const role = "Engineer";

      const aliciaEngineer = new Engineer("alicia", "101", "alicia@chen.com", "aliciachen10");

      expect(aliciaEngineer.getRole()).toEqual(role);
    });
  });

  describe("getGitHub", () => {
    it("should return a new 'Engineer' object", () => {
      const obj = new Engineer("alicia", "101", "alicia@chen.com", "aliciachen10");

      expect(obj instanceof Engineer).toEqual(true);
    });

    it("should return a new 'Engineer''s github", () => {
      const github = "aliciachen10";

      const aliciaEngineer = new Engineer("alicia", "101", "alicia@chen.com", "aliciachen10");

      expect(aliciaEngineer.getGitHub()).toEqual(github);
    });
  });

  describe("getId", () => {
    it("should return a new 'Engineer' object", () => {
      const obj = new Engineer("alicia", "101", "alicia@chen.com", "aliciachen10");

      expect(obj instanceof Engineer).toEqual(true);
    });

    it("should return a new 'Engineer''s id", () => {
      const id = "101";

      const aliciaEngineer = new Engineer("alicia", "101", "alicia@chen.com", "aliciachen10");

      expect(aliciaEngineer.getId()).toEqual(id);
    });
  });

  describe("getEmail", () => {
    it("should return a new 'Engineer' object", () => {
      const obj = new Engineer("alicia", "101", "alicia@chen.com", "aliciachen10");

      expect(obj instanceof Engineer).toEqual(true);
    });

    it("should return a new 'Engineer''s email", () => {
      const email = "alicia@chen.com";

      const aliciaEngineer = new Engineer("alicia", "101", "alicia@chen.com", "aliciachen10");

      expect(aliciaEngineer.getEmail()).toEqual(email);
    });
  });

  // describe("value", () => {
  //   it("should return the 'Engineer' object's 'name' value", () => {
  //     const nam = 10;
  //     const obj = new Engineer(nam);

  //     const result = obj.value();

  //     expect(result).toEqual(nam);
  //   });
  // });
});
