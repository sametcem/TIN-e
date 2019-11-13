const parseFormJSON = () => {
    const l = document.getElementById('leftOperand').value;
    const r = document.getElementById('rightOperand').value;
    const op = document.getElementById('operator').value;

    const obj = { left: l, right: r, operator: op };
    return JSON.stringify(obj);
};

const outputResult = (text) => {
    document.getElementById('result').textContent = text;
};


document.getElementById('btnSubmit').addEventListener('click',
    (event) => {
        outputResult('');
        const req = new XMLHttpRequest();
        const jsonFile = parseFormJSON();

        console.log(jsonFile);

        req.open('POST', 'http://localhost:3000/');
        req.setRequestHeader('Content-Type', 'application/json');
        req.onreadystatechange = () => {
            if (req.readyState === 4 && req.status === 200) {
                const jsonObj = JSON.parse(req.responseText);
                console.log('Received from server: ', jsonObj);
                outputResult(jsonObj.result);
            }
        };
        req.send(jsonFile);

        event.preventDefault();
    }, true);