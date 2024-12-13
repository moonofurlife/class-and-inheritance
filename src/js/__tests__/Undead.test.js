import Undead from "../class/Undead";

test("testing Undead", () => {
    const result = new Undead('und')
    const ans = {
        name: 'und',
        type: "Undead",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    }
    expect(result).toEqual(ans)
})