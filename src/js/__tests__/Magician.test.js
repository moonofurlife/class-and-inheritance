import Magician from "../class/Magician";

test("testing Magician", () => {
    const result = new Magician('mag')
    const ans = {
        name: 'mag',
        type: "Magician",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    }
    expect(result).toEqual(ans)
})