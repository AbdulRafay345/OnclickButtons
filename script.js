document.getElementById("alertName").onclick = function () {
    document.getElementById("statement").innerHTML = ("")
    document.getElementById("output").innerHTML = ("")
    alert('ABDUL RAFAY')
}

document.getElementById("alertNumber").onclick = function () {
    document.getElementById("statement").innerHTML = ("")
    document.getElementById("output").innerHTML = ("")
    alert("1234")
}

document.getElementById("variables").onclick = function () {
    document.getElementById("statement").innerHTML = ("")
    document.getElementById("output").innerHTML = ("")
    
    document.getElementById("statement").innerHTML = ("<p class='small'>1. A variable name can't contain any spaces.<br>2. A variable name can contain only letters, numbers, dollar signs, and underscores. <br>3. A variable name can't be any of JavaScript's keywords, it can contain keywords,e.g. <code>userAlert</code> and <code>myVar</code> are legal.<br>4. Capital letters are fine, but be careful. Variable names are case sensitive. A rose is not a Rose. If you assign the string 'Floribundas' to the variable rose, and then ask JavaScript for the value assigned to Rose, you'll come up empty.<br>6. Mostly the camelCase naming convention is used, Because a camelCase  name begins in lower case. If there's more than one word in the name, each subsequent word gets an initial cap, creating a hump.<br>7. Please adopt the camelCase convention. It'll make your variable names more readable, and you'll be less likely to get variable names mixed up.</p>")
    
    document.getElementById("output").innerHTML = ('<p class="text-start">Examples of legal variable name:<br>1. let fullName = <code>("Abdul Rafay")</code><br>2. var myRoll = <code>("200120")</code><p>')
}

document.getElementById("camelCases").onclick = function () {
    document.getElementById("statement").innerHTML = ("")
    document.getElementById("output").innerHTML = ("")
    
    document.getElementById("statement").innerHTML = ('<p>Examples of camelCases are given below:<br>1. <code>userResponse</code><br>2. <code>userResponseTime</code><br>3. <code>userResponseTimeLimit</code><br>4. <code>response</code><br> Its makes the code more readable!</p>')  
}

document.getElementById("sumNumber").onclick = function () {
    document.getElementById("statement").innerHTML = ("")
    document.getElementById("output").innerHTML = ("")
    
    let sum1 = 100
    let sum2 = 65
    let sum = sum1 + sum2
    
    
    document.getElementById("statement").innerHTML = ('<p class="text-center"> let <code>sum1 = 100</code><br>let <code>sum2 = 65</code><br> let <code>sum = sum1 + sum2</code></p>')
    
    document.getElementById("output").innerHTML = (sum)
}

document.getElementById("subtract").onclick = function () {
    document.getElementById("statement").innerHTML = ("")
    document.getElementById("output").innerHTML = ("")
    
    let number1 = 200
    let number2 = 167
    let number = number1 - number2
    
    document.getElementById("statement").innerHTML = ('<p class="text-center"> let <code>number1 = 200</code><br>let <code>number2 = 167</code><br> let <code>number = number1 - number2</code></p>')

    document.getElementById("output").innerHTML = (number)
}

document.getElementById("multiply").onclick = function () {
    document.getElementById("statement").innerHTML = ("")
    document.getElementById("output").innerHTML = ("")
    
    let number1 = 20
    let number2 = 7
    let number = number1 * number2
    
    document.getElementById("statement").innerHTML = ('<p class="text-center"> let <code>number1 = 20</code><br>let <code>number2 = 7</code><br> let <code>number = number1 * number2</code></p>')

    document.getElementById("output").innerHTML = (number)
}

document.getElementById("divide").onclick = function () {
    document.getElementById("statement").innerHTML = ("")
    document.getElementById("output").innerHTML = ("")
    
    let number1 = 120
    let number2 = 10
    let number = number1 / number2
    
    document.getElementById("statement").innerHTML = ('<p class="text-center"> let <code>number1 = 120</code><br>let <code>number2 = 10</code><br> let <code>number = number1 / number2</code></p>')

    document.getElementById("output").innerHTML = (number)
}

document.getElementById("calculate").onclick = function () {
    document.getElementById("statement").innerHTML = ("")
    document.getElementById("output").innerHTML = ("")
    
    let calculate = (36 / 6) * 2 + 3**2 * (20-14)
    
    document.getElementById("statement").innerHTML = ('<p class="text-center"> <code>number = 36 / 6 * 2 + 3**2 * (20 - 14)')

    document.getElementById("output").innerHTML = (calculate)
}

document.getElementById("clearStatement").onclick = function () {
    document.getElementById("statement").innerHTML = ("")
}

document.getElementById("clearOutput").onclick = function () {
    document.getElementById("output").innerHTML = ("")
}