function convertToCamelCase() {
    const inputText = document.getElementById('inputText').value;
    const variableNames = inputText.split('\n');
    let output = '';

    for (let i = 0; i < variableNames.length; i++) {
        const words = variableNames[i].split('_');
        let camelCaseName = words[0];

        for (let j = 1; j < words.length; j++) {
            camelCaseName += words[j].charAt(0).toUpperCase() + words[j].slice(1);
        }

        output += camelCaseName + '<br>';
    }

    document.getElementById('output').innerHTML = output;
}