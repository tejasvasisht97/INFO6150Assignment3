document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('fullName').textContent = 'Tejas Vasisht';
    document.getElementById('nuid').textContent = '002892433';

    document.getElementById('addStudent').addEventListener('click', function() {
        var table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2); 
        var cell4 = row.insertCell(3); 
        var cell5 = row.insertCell(4); 
        var cell6 = row.insertCell(5); 
        var cell7 = row.insertCell(6); 
        var cell8 = row.insertCell(7); 
        var cell9 = row.insertCell(8); 

        cell1.innerHTML = '<input type="checkbox" class="checkbox">';   
        cell2.innerHTML = '<button class="arrow">➜</button>';
        cell3.innerHTML = 'Student ' + (rowCount + 1);
        cell4.innerHTML = 'Teacher ' + (rowCount + 1);
        cell5.innerHTML = 'Approved'
        cell6.innerHTML = 'Fall'
        cell7.innerHTML = 'TA'
        cell8.innerHTML = '12345' 
        cell9.innerHTML = '100' 

        alert(`Student ${rowCount+1} added successfully`)
        document.getElementById('submitBtn').disabled = false;
    });  

    document.getElementById('studentTable').addEventListener('change', function(event) {
        var checkbox = event.target;
        if (checkbox.type === 'checkbox') {
            var row = checkbox.parentElement.parentElement;
            if (checkbox.checked) {
                row.style.backgroundColor = 'yellow';
                document.getElementById('submitBtn').style.backgroundColor = 'orange';

                var deleteCell = row.insertCell(9);
                deleteCell.innerHTML = '<button class="deleteBtn">Delete</button> <button class="editBtn">Edit</button>';
            } else {
                row.style.backgroundColor = '';
                document.getElementById('submitBtn').style.backgroundColor = '';
                document.getElementById('submitBtn').disabled = true;

                row.deleteCell(9); 
            }
        }

    });
    function collapseExpandedRow(row) {
        console.log('in collapse')
        console.log(row)
        var expandedRow = row.nextElementSibling;
        console.log(expandedRow)
        if (expandedRow) {
           expandedRow.remove();
        }
    }

    function handleEditClick(event) {
        var target = event.target;
        if (target.classList.contains('editBtn')) {
            var row = target.parentElement.parentElement;
            var rowIndex = row.rowIndex;
            prompt("Edit details for Student " + rowIndex);
        }
    }
    document.getElementById('studentTable').addEventListener('click', handleEditClick);

    function handleArrowClick(event) {
        var target = event.target;
        if (target.classList.contains('arrow')) {
            var row = target.parentElement.parentElement;
            var expandedRow = row.nextElementSibling;
            if (expandedRow) {
                console.log("collapse")
                var row1 = document.getElementsByClassName('expanded-info')
                console.log(row1)
                collapseExpandedRow(row);
            } else {
                addExpandedRow(row);
            }
        }
    }
    function addExpandedRow(row) {
        var expandedRow = document.createElement('tr');
        expandedRow.innerHTML = '<td colspan="9" class="expanded-info"><p>Advisor: </p><p>Budget No: </p></td>';
        row.parentNode.insertBefore(expandedRow, row.nextSibling);
    }

    function handleDeleteClick(event) {
        var target = event.target;
        var table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
        var rowCount = table.rows.length;
        if (target.classList.contains('deleteBtn')) {
            var row = target.parentElement.parentElement;
            var rowIndex = row.rowIndex;
            row.remove();
            alert(`Record of Student ${rowIndex} removed successfully`);
        }
    }

    document.getElementById('studentTable').addEventListener('click', handleDeleteClick);

    document.getElementById('studentTable').addEventListener('click', handleArrowClick);

});
