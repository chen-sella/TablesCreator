// const { green } = require("color-name");

class Table {

    constructor (columns, rows) {
        this.columns = columns;
        this.rows = rows;
    }

    tableGrid () {
        var container, table, row, header, cell, input;

        container = document.createElement('div');
        container.setAttribute('class', 'container');

        table = document.createElement('table');
        table.setAttribute('class', 'table');

        document.querySelector('body').appendChild(container);
        document.querySelector('body').appendChild(table);

       

        for (var i=0; i< this.rows; i++){
           row = document.createElement('tr');
           row.setAttribute('id', 'row-'+i);

           for(var j=0 ; j< this.columns; j++){
            if (i==0){
                header = document.createElement('th');
                header.setAttribute('id', 'header-'+ j);
                header.setAttribute('class', 'headers');

                input = document.createElement('input');
                input.setAttribute('class', 'cellInput');
                input.setAttribute('id', 'cellInput-'+i+j);
                input.setAttribute('placeholder', 'insert text');
                input.addEventListener('click', (event)=> this.dropDown(event));

                header.appendChild(input);
                row.appendChild(header);
            }
            else {
                cell = document.createElement('td');
                cell.setAttribute('class', 'cells')


                input = document.createElement('input');
                input.setAttribute('class', 'cellInput');
                input.setAttribute('id', 'cellInput-'+i+j);
                input.setAttribute('placeholder', 'insert text');
                input.addEventListener('click', (event)=> this.dropDown(event));

                cell.appendChild(input);
                row.appendChild(cell);
            }  
           }
           table.appendChild(row);
           container.appendChild(table);
        }

    }

    dropDown (event) {
        
        var id = event.target.id;
        var drop = document.querySelector('.dropdown-container');
        drop.innerHTML = "";

        var color = new DropDown('color');
        var textAlign = new DropDown('textAlign', ['left', 'right', 'center']);
        var design = new DropDown('fontStyle', ['italic', 'oblique', 'normal']);
        var size = new DropDown('fontSize');
        var weight = new DropDown('fontWeight', ['normal', 'bold', 'bolder']);
        var backgroundColor = new DropDown('backgroundColor');
        var fontFamily = new DropDown('fontFamily');
        var opacity = new DropDown('opacity');
        

        color.renderDropDown(id);
        textAlign.renderDropDown(id);
        design.renderDropDown(id);
        size.renderDropDown(id);
        weight.renderDropDown(id);
        backgroundColor.renderDropDown(id);
        fontFamily.renderDropDown(id);
        opacity.renderDropDown(id);
        
    }
}