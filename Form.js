var form = [
    { 
    name: "input",
    class:"input",
    id: "columns",
    type:"text", 
    placeholder:"How many columns?"
    },
    {
    name: "input",
    class:"input", 
    id: "rows",
    type:"text",
    placeholder: "How many rows?"
    },
    {
    name: "input",
    class:"input", 
    id: "submit",
    type:"submit",
    placeholder:"Submit"
}]

class FormCreator {

    constructor (form, parentClass) {
        this.form = form;
        this.parentClass = parentClass;
       
    }

    formRender () {

        console.log(this.parentClass);

        this.form.forEach(element => {
           var elem = document.createElement(element.name);
           elem.setAttribute('type', element.type);
           elem.setAttribute('placeholder', element.placeholder);
           elem.setAttribute('class', element.class);
           elem.setAttribute('id', element.id);
           document.querySelector('#'+this.parentClass).appendChild(elem);

           if (element.type == 'submit'){
            document.querySelector('#submit').addEventListener('click', ()=>this.Submit(event))
           }
        
        });
        
    }

    Submit (event){
        event.preventDefault();
        
        var columns, rows;

        columns = document.querySelector('#columns').value;
        rows = document.querySelector('#rows').value;

        if (columns ==0 || rows ==0){
                alert('Please insert a Vaild number');
        }
        else {
            var table = new Table(columns, rows);
            table.tableGrid();
            document.querySelector('#myForm').innerHTML = '';
       
        }
    }
}



let form1 = new FormCreator(form, 'myForm');
form1.formRender();

