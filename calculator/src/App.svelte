<script lang="ts">
  //creating an array
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];
  //operations
  const operations = ["+", "-", "/", "x", "="];
  //state handling
  let selectedOperation = "";
  let display = "";
  let firstNumber = "";
  let secondNumber = "";
  let isDisplayingResult = false;

  const handleOperation = (operation: string) => {
    if (firstNumber === "") {
      return;
    }
    if (operation === "=") {
      if (!secondNumber) {
        return;
      }
      const firstNum = parseFloat(firstNumber);
      const secondNum = parseFloat(secondNumber);
      let result;
      switch (selectedOperation) {
        case "+":
          result = firstNum + secondNum;
          break;
        case "-":
          result = firstNum - secondNum;
          break;
        case "x":
          result = firstNum * secondNum;
          break;
        case "/":
          result = (firstNum / secondNum).toFixed(2);
          break;
        default:
          break;
      }
      display = result !== undefined ? String(result) : "";
      isDisplayingResult = true;
    } else {
      selectedOperation = operation;
      isDisplayingResult = false;
    }
  };

  const handleClear = () => {
    display = "";
    firstNumber = "";
    secondNumber = "";
    selectedOperation = "";
    isDisplayingResult = false;
  };

  const handleNumbers = (number: string) => {
    if (isDisplayingResult) {
      handleClear();
    }
    if (display === "" && number === "0") {
      return;
    } else if (display.includes(".") && number === ".") {
      return;
    } else if (!selectedOperation) {
      if (display === "" && number === ".") {
        firstNumber = "0.";
        return (display = firstNumber);
      }
      firstNumber = `${firstNumber}${number}`;
      return (display = firstNumber);
    } else if (selectedOperation) {
      if (display === "" && number === ".") {
        secondNumber = "0.";
        return (display = secondNumber);
      }
      secondNumber = `${secondNumber}${number}`;
      return (display = secondNumber);
    }
    // display = `${display}${number}`;
  };
</script>

<main>
  <div class="calculator">
    <div class="result">{display}</div>
    <!-- digits -->
    <div class="digits">
      <button class="btn" on:click={handleClear}>C</button>
      {#each numbers as number}
        <button class={`${number == '0' ? "zero" : ""}`} on:click={() => handleNumbers(String(number))}>{number}</button>
      {/each}
    </div>
    <!-- operators -->
    <div class="operations">
      {#each operations as operation}
        <button class={`${operation == selectedOperation ? "blue" : ""}`} on:click={() => handleOperation(operation)}>{operation}</button>
      {/each}
    </div>
  </div>
</main>

<!-- create a buttons for numbers and operator  -->
<!-- applying css  -->
<!-- working on script  -->

 <style>
  main {
    /* width: 100vw;
    height: 100vh; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .calculator {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .operations {
    grid-column: 4 / span 1;
    /* grid-row: 1 / span 5; */
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 10px;
    
  }
  .digits {
    grid-column: 1 / span 3;
    /* grid-row: 1 / span 5; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 10px;
    
  }
  button{
    background-color: #333;
    color: #ccc;
  }
  .btn {
    grid-column: 1 / span 3;
    
    /*   */
  }
  .zero {
    grid-column: 1 / span 2;
  }
  .result {
    grid-column: 1 / span 4;
    height: 60px;
    border: 2px solid white;
    text-align: right;
    padding: 10px;
    font-size: 2em;
    background-color: #333;
    color: white;
    border-radius: 8px;

  }
  .blue{
    background-color: rgb(36, 36, 187);
    transition: all 0.28s ease-in-out;
  }

</style>
