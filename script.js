document.addEventListener('DOMContentLoaded', function () {
    // Calendar
    const calendarGrid = document.getElementById("calendar-grid");
    const dateInput = document.getElementById("date-input");
    const addDateButton = document.getElementById("add-date");

    function clearSelection() {
        const days = document.querySelectorAll('.day');
        days.forEach(day => {
            day.classList.remove('selected');
        });
    }

    function handleDayClick(event) {
        if (event.target.classList.contains('day')) {
            clearSelection();
            event.target.classList.add('selected');
            dateInput.value = `Day ${event.target.innerText}`;
        }
    }

    function addEvent() {
        const selectedDay = document.querySelector('.day.selected');
        if (selectedDay && dateInput.value) {
            const eventDiv = document.createElement('div');
            eventDiv.className = 'event';
            eventDiv.textContent = dateInput.value;
            selectedDay.appendChild(eventDiv);
            dateInput.value = '';
            clearSelection();
        } else {
            alert("Please select a day and enter an event.");
        }
    }

    calendarGrid.addEventListener('click', handleDayClick);
    addDateButton.addEventListener('click', addEvent);

    // Todo List
    const todoForm = document.getElementById('todo-form');
    const newTaskInput = document.getElementById('new-task');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const taskText = newTaskInput.value.trim();
        
        if (taskText) {
            const listItem = document.createElement('li');
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            
            const label = document.createElement('label');
            label.textContent = taskText;
            
            listItem.appendChild(checkbox);
            listItem.appendChild(label);
            
            todoList.appendChild(listItem);
            
            newTaskInput.value = '';
        }
    });

});
