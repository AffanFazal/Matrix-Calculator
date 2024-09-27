const box1 = document.querySelector("#input-box1");
const box2 = document.querySelector("#input-box2");
const form = document.querySelector("#matrix-form");
const calculateBtn = document.querySelector("#calculate");
const resultMatrixDiv = document.querySelector("#matrix-result");

let matrixLength;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    matrixLength = Number(event.target.children[0].value);

    box1.innerHTML = "";
    box2.innerHTML = "";
    resultMatrixDiv.innerHTML = ""; 

    for (let i = 0; i < matrixLength; i++) {
        for (let j = 0; j < matrixLength; j++) {
            box1.innerHTML += `<input type="number" id="matrix1-${i}-${j}" style="width: 30px;" value="0">`;
            box2.innerHTML += `<input type="number" id="matrix2-${i}-${j}" style="width: 30px;" value="0">`;
        }
        box1.innerHTML += "<br>";
        box2.innerHTML += "<br>";
    }
});

calculateBtn.addEventListener("click", () => {
    let resultMatrix = Array.from({ length: matrixLength }, () => Array(matrixLength).fill(0));
    const operation = document.querySelector("#select-options").value;

    for (let i = 0; i < matrixLength; i++) {
        for (let j = 0; j < matrixLength; j++) {
            const value1 = Number(document.querySelector(`#matrix1-${i}-${j}`).value);
            const value2 = Number(document.querySelector(`#matrix2-${i}-${j}`).value);
            if (operation === "add") {
                resultMatrix[i][j] = value1 + value2;
            } else if (operation === "subtract") {
                resultMatrix[i][j] = value1 - value2;
            }
        }
    }
    resultMatrixDiv.innerHTML = "<h2>Result: </h2>";
    for (let i = 0; i < matrixLength; i++) {
        for (let j = 0; j < matrixLength; j++) {
            resultMatrixDiv.innerHTML += `<input type="number" id="result-${i}-${j}" style="width: 30px;" value="${resultMatrix[i][j]}" disabled>`;
        }
        resultMatrixDiv.innerHTML += "<br>";
    }
});