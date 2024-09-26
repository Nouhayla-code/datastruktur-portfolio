import Grid from "./grid.js";

const griddyBasse = new Grid(3, 3);

griddyBasse.set({ row: 1, col: 1, value: "X" });
griddyBasse.set({ row: 0, col: 0, value: "X" });
griddyBasse.set({ row: 2, col: 2, value: "X" });
griddyBasse.set({ row: 1, col: 2, value: "right" });
griddyBasse.set({ row: 1, col: 0, value: "left" });
griddyBasse.set({ row: 0, col: 1, value: "up" });
griddyBasse.set({ row: 2, col: 1, value: "down" });

console.log(griddyBasse.grid);
console.log("" + griddyBasse.get({ row: 0, col: 1 }));
console.log("north: " + griddyBasse.north({ row: 1, col: 1 }));
console.log("south: " + griddyBasse.south({ row: 1, col: 1 }));
console.log("east: " + griddyBasse.east({ row: 1, col: 1 }));
console.log("west: " + griddyBasse.west({ row: 1, col: 1 }));

console.log(griddyBasse.size());
console.log(griddyBasse.getRows());
console.log(griddyBasse.getCols());
console.log(griddyBasse.grid);

griddyBasse.set({ row: 0, col: 2, value: "finger" });

console.log(griddyBasse.indexFor({ row: 1, col: 2 }));
console.log(griddyBasse.grid);

console.log(griddyBasse.rowColFor(9));

console.log(griddyBasse.neighbours({ row: 1, col: 1 }));
console.log(griddyBasse.neighbourValues({ row: 1, col: 1 }));
