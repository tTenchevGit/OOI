const validateURI = uri => /^(?:[a-zA-Z0-9.]+|\*)$/.test(uri);

const validateVersion = version => /^(HTTP\/(0\.9|1\.0|1\.1|2\.0))$/.test(version);

const validateMessage = message => /^[^<>\\&'"]*$/.test(message);

const validateMethod = method => method === "GET" || method === "POST" || method === "DELETE" || method === "CONNECT";

const validateRequest = input => {
    const errors = [];

    if (!validateURI(input.uri)) {
        errors.push("Invalid URI");
    }

    if (!validateVersion(input.version)) {
        errors.push("Invalid version");
    }

    if (!validateMessage(input.message)) {
        errors.push("Invalid message");
    }

    if (!validateMethod(input.method)) {
        errors.push("Invalid method");
    }

    if (errors.length > 0) {
        const errorMessage = "Invalid request header: " + errors.join(", ");
        throw new Error(errorMessage);
    } else {
        console.log('asdas');
    }
};


try {
    validateRequest({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: 'as'
    });
} catch (error) {
    console.error(error.message);
}
