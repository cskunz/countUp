<!-- a simple counter form that get processed in counter.js -->
<!-- Cameron Kunz 9/5/2016 -->
<html>
    <head>
        <link href="css/counter.css" rel="stylesheet">
        <title>Counter</title>
    </head>
    <body>
        <div id="userInput">
            <h1>Simple Counter</h1>
            <form id="counterForm" onsubmit="return false">
                <label>Amount: </label>
                <input type="number" id="userValue">
                <input type="button" id="submitButton" value="Submit">
            </form>
        </div>
        <div id="divCount"></div>
        <script src="js/counter.js"></script>
    </body>
</html>
