function greet(personName, callback) {
    if (typeof personName !== "string" || personName.trim() === "") {
        throw new Error("Invalid name provided");
    }
    callback();
    return `Hello, ${personName}!`;
}

greet("", function () {
    return this;
});

export { greet };
