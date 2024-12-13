import Swordsman from "../class/Swordsman";

test("testing Swordsman", () => {
    const result = new Swordsman('sword')
    const ans = {
        name: 'sword',
        type: "Swordsman",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    }
    expect(result).toEqual(ans)
})