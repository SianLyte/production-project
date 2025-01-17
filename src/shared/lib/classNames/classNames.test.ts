import {classNames} from "shared/lib/classNames/classNames"

describe("classNames", () => {
   test("with first param", () => {
    expect(classNames("someClass")).toBe("someClass");
   })

   test("with additional class", () => {
    expect(classNames("someClass", {}, ["class1", "class2"]))
      .toBe("someClass class1 class2");
   })

   test("with mods", () => {
    expect(classNames("someClass", {hovered: true, scrollable: true}, ["class1", "class2"]))
      .toBe("someClass class1 class2 hovered scrollable");
   })

   test("with mods undefined", () => {
    expect(classNames("someClass", {hovered: false, scrollable: true}, ["class1", "class2"]))
      .toBe("someClass class1 class2 scrollable");
   })

   test("with mods false", () => {
    expect(classNames("someClass", {hovered: undefined, scrollable: true}, ["class1", "class2"]))
      .toBe("someClass class1 class2 scrollable");
   })
})