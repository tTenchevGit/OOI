function extract(string) {
    let index = string.indexOf("\\");

    while (index !== -1) {
        string = string.substring(index + 1)
        index = string.indexOf("\\");
    }
    index = string.lastIndexOf('.')
    const template = string.substring(0, index)
    const file = string.substring(index + 1)
    console.log(`File name: ${template}`);
    console.log(`File extension: ${file}`);
}
extract('C:\\Internal\\training-internal\\Template.pptx')