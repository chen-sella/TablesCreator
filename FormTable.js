class FormToTable extends FormCreator (){

    constructor (form, parentClass){
        super (form, parentClass);
    }

    Sumbit () {
        super.Sumbit();

        var columns, rows;

        columns = document.querySelector('#columns').value;
        rows = document.querySelector('#rows').value;

        if (columns ==0 || rows ==0){
                alert('Please insert a Vaild number');
        }
        else {
            var table = new Table(columns, rows);
            table.tableGrid();
            document.querySelector('.myForm').innerHTML = '';
            // this.secondFormRender(columns, rows);  
        }
    }
}


var tableForm = new FormToTable();
tableForm.Sumbit();