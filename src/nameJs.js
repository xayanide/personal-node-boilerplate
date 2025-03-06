function greet(personName) {
    if (typeof personName !== "string" || personName.trim() === "") {
        throw new Error("Invalid name provided");
    }
    return `Hello, ${personName}!`;
}

export { greet };
