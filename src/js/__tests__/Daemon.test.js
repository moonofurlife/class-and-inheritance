import Daemon from "../class/Daemon";

test("testing Daemon", () => {
    const result = new Daemon('demon')
    const ans = {
        name: 'demon',
        type: "Daemon",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    }
    expect(result).toEqual(ans)
})