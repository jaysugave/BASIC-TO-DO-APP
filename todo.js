document.addEventListener('DOMContentLoaded', function() {
    const myinput = document.getElementById('input');
    const addButton = document.getElementById('addButton');
    const taskContainer = document.getElementById('taskContainer');

    // Function to add task
    function addTask() {
        const inputValue = myinput.value.trim();
        if (inputValue !== '') {
            // Create task header
            const newelement = document.createElement('h1');
            newelement.textContent = inputValue;
            taskContainer.appendChild(newelement);

            // Create DONE button
            const newbutton = document.createElement('button');
            newbutton.textContent = "DONE";
            taskContainer.appendChild(newbutton);

            // Add event to remove task
            newbutton.addEventListener('click', function() {
                newelement.remove();
                newbutton.remove();
            });

            // Clear input
            myinput.value = '';
        }
    }

    // When button is clicked
    addButton.addEventListener('click', addTask);

    // When Enter is pressed in input
    myinput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});