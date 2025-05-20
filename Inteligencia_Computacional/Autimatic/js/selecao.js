export function selection(conflicts) {
    const values = [...conflicts].sort((a, b) => a - b);
    const best = values[0];
    const random = conflicts[Math.floor(Math.random() * conflicts.length)];

    return [best, random];
}
