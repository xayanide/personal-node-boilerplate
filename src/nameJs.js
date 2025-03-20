export function greet(personName) {
    if (typeof personName !== "string") {
        throw new Error("Invalid name provided. Must be a string.");
    }
    const trimmedPersonName = personName.trim();
    if (trimmedPersonName === "") {
        throw new Error("Invalid name provided. Must be a non-empty string.");
    }
    return `Hello, ${trimmedPersonName}!`;
}
