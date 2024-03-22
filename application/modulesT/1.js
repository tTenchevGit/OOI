function httpReq(input) {
    const method = input.method;
    const uri = input.uri;
    const version = input.version;
    const message = input.message;

    const checkURI = /^(?:[a-zA-Z0-9.]+|\*)$/;
    const checkVersion = /^(HTTP\/(0\.9|1\.0|1\.1|2\.0))$/;
    const checkMessage = /^[^<>\\&'"]*$/;

    const errors = [];

    if (!checkURI.test(uri)) {
        errors.push("Invalid URI");
    }

    if (!checkVersion.test(version)) {
        errors.push("Invalid version");
    }

    if (!checkMessage.test(message)) {
        errors.push("Invalid message");
    }

    if (method !== "GET" && method !== "POST" && method !== "DELETE" && method !== "CONNECT") {
        errors.push("Invalid method");
    }

    if (errors.length > 0) {
        const errorMessage = "Invalid request header: " + errors.join(", ");
        throw new Error(errorMessage);
    } else {
        console.log('asdas');
    }
}

httpReq({ method: 'POST', uri: 'home.bash', message: 'rm -rf /*' });