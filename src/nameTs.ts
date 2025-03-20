export function greet(personName: string) {
    if (typeof personName !== "string") {
        throw new Error("Invalid name provided. Must be a string.");
    }
    const trimmedPersonName = personName.trim();
    if (trimmedPersonName.replace(/\s+/gu, "").length === 0) {
        throw new Error("Invalid name provided. Must be a non-empty string.");
    }
    if (trimmedPersonName.length > 1000) {
        throw new Error("Invalid name provided. Name is too long.");
    }
    return `Hello, ${trimmedPersonName}!`;
}
