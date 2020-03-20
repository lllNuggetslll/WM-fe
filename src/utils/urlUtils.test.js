import { getParams, setParams, deleteParams } from "./urlUtils";

describe("urlUtils", () => {
  describe("getParams", () => {
    it("should get params", () => {
      const param = getParams("param", "param=value");

      expect(param).toEqual("value");
    });
  });
  describe("setParams()", () => {
    it("should set params", () => {
      const param = setParams({
        param: "param",
        query: "query",
        location: "/"
      });

      expect(param).toEqual("%2F=&param=query");
    });
  });
  describe("deleteParams", () => {
    it("should delete params", () => {
      const param = deleteParams({
        param: "param",
        location: "%2F=&param=query"
      });

      expect(param).toEqual("%2F=");
    });
  });
});
