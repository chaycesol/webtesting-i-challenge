const enhancer = require('./enhancer.js');
// test away!

describe("Item Enhancers", function() {
    describe("item repair", function () {
        it("should repair an actual item", function () {
          const item = {
            name: "fist weapon",
            durability: 50,
            enhancement: 15,
          };
          const expected = {
            name: "fist weapon",
            durability: 100,
            enhancement: 15,
          };
          const actual = enhancer.repair(item);
          expect(actual).toStrictEqual(expected);
        });
        it("should return a message if no durability found", function() {
            const item = {
                name: "Sword",
                enhancement: 15
            }
            const expected = { message: "your item has no durability!"}
            const actual = enhancer.repair(item)
            expect(actual).toStrictEqual(expected)
        });
        it("should return a message you item has max durability", function() {
            const item = {
                name: "Mace",
                durability: 100,
                enhancement: 15
            }
            const expected = { message: "your item's durability is FULL"}
            const actual = enhancer.repair(item)
            expect(actual).toStrictEqual(expected)
        })
        it('should return a message if durability is less than 0', function() {
            const item = {
                name: "polearm",
                durability: -5,
                enhancement: 15
            }
            const expected = { message: "your item is broken"}
            const actual = enhancer.repair(item)
            expect(actual).toStrictEqual(expected)
        })
      });
      describe('item success', function() {
          it.todo("The item's enhancement increases by 1.");
          it.todo("If the item enhancement level is 20, the enhancement level is not changed.");
          it.todo("The durability of the item is not changed.");
      });
      describe('item fail', function() {
        it("should let the user know that enhancements aren't available on this weapon", function() {
            const item = {
                name: "sword",
                durability: 80
            }
            const expected = { message: 'item unable to be enhanced'}
            const actual = enhancer.fail(item)
            expect(actual).toStrictEqual(expected)
        });
        it('should decrease the durability of an item by 10 if the enhancement level is greater than or equal to 15', function() {
            const item = {
                name: "sword",
                durability: 80,
                enhancement: 15
            }
            const expected =  {
                name: "sword",
                durability: 70,
                enhancement: 15
            }
            const actual = enhancer.fail(item)
            expect(actual).toStrictEqual(expected)
        });
        it("should reduce item's durability by 5 if enhancement level is less than 15", function(){
            const item = {
                name: "sword",
                durability: 70,
                enhancement: 14
            }
            const expected = {
                name: "sword",
                durability: 65,
                enhancement: 14
            }
            const actual = enhancer.fail(item)
            expect(actual).toStrictEqual(expected)
        });
        it('should decrease enhancement by one and durability goes down by 10', function() {
            const item = {
                name: "sword",
                durability: 65,
                enhancement: 18
            }
            const expected = {
                name: "sword",
                durability: 55,
                enhancement: 17
            }
            const actual = enhancer.fail(item)
            expect(actual).toStrictEqual(expected)
        });
    });
})
