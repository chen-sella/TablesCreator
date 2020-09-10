class DropDown{

    constructor (title, list){
        this.title= title;
        this.list= list;
        
    }

    renderDropDown (id){
        console.log(id);
        var dropdown, container, div, title;

        dropdown = document.createElement('div');
        dropdown.setAttribute('class', 'dropdown');
        container = document.querySelector('.dropdown-container');
        container.appendChild(dropdown);

        title = document.createElement('a');
        title.textContent = `${this.title}`
        title.setAttribute('class', 'droptitle');
        title.setAttribute('id', 'droptitle-'+this.title);
        dropdown.appendChild(title);

        div = document.createElement('div');
        div.setAttribute('class', 'dropdown-content');
        div.setAttribute('id', `dropdown-content-${this.title}`);
        dropdown.appendChild(div);

        console.log(this.list);
        console.log(typeof(this.list));
        console.log(this.title);
        console.log(typeof(this.title));

        if (typeof(this.list) != 'undefined') {
            
            this.list.forEach(element => {
                var listItem = document.createElement('li');
                listItem.textContent = element;
                listItem.setAttribute('href', '#');
                listItem.setAttribute('class', 'values');
                listItem.setAttribute('id', element);
                listItem.addEventListener('click', (event)=>this.selectValue(element,id));
                div.appendChild(listItem);
                title.addEventListener('click' ,(event)=> this.toggleDropDown());
            })
        }
        else{
            var miniform = [
                {
                name: "input", 
                id: "input-"+this.title,
                class: "dropdownInputs",
                type:"text",
                placeholder: `${this.title}`
            }]

            let userInput = new FormCreator(miniform, 'dropdown-content-'+this.title);
            userInput.formRender();
            title.addEventListener('click' ,(event)=> this.toggleDropDown());
            var userInputElement = document.querySelector('#input-'+this.title);
            userInputElement.addEventListener('change', (event)=>this.insertVale(id));
        }
    }

    toggleDropDown (){
        console.log(this.title);
        document.querySelector('#dropdown-content-'+this.title).classList.toggle("show");
    }

    selectValue (element, id){
        var title, text, sty;

        title = document.querySelector( '#droptitle-'+this.title);
        text = document.getElementById(id);
        title.textContent = element;
        sty = this.title.toString();
        text.style[sty] = element.toString();
    }

    insertVale (id ) {
        var content, title, text, sty;

        content = document.getElementById(event.path[0].id).value;
        title = document.querySelector( '#droptitle-'+this.title);
        text = document.getElementById(id);
        sty = this.title.toString();
        text.style[sty] = content.toString();

        if (content != " "){
            title.textContent = content;
        }
    
    }
}

// window.onclick = function(event) {
//     if (!event.target.matches('.droptitle') || !event.target.matches('.dropdownInputs')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

