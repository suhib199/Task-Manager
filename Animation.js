// -------------------To view only a certin boxs (HTML,CSS,JS)--------------------------------

let htmlWord = document.querySelector('.HTML');
let cssWord = document.querySelector('.CSS');
let jsWord = document.querySelector('.JS');
let htmlImg = document.querySelector('#htmlImg');
let jsImg = document.querySelector('#jsImg');

let cssContainer = document.querySelector('.cssColumn');
let jsContainer = document.querySelector('.jsColumn');
let htmlContainer = document.querySelector('.htmlColumn');


function showHtml() {
    cssContainer.style.display = 'none';
    jsContainer.style.display = 'none';
    htmlImg.style.display = 'none';
    cssImg.style.display = 'block';
    htmlContainer.style.display = 'block';
    jsImg.style.display = 'block';

}
htmlWord.addEventListener('click', showHtml);


function showCSS() {
    cssContainer.style.display = 'block';
    jsContainer.style.display = 'none';
    htmlImg.style.display = 'block';
    cssImg.style.display = 'none';
    htmlContainer.style.display = 'none';
    jsImg.style.display = 'block';

}
cssWord.addEventListener('click', showCSS);



function showJS() {
    cssContainer.style.display = 'none';
    jsContainer.style.display = 'block';
    htmlContainer.style.display = 'none';
    htmlImg.style.display = 'block';
    cssImg.style.display = 'block';
    jsImg.style.display = 'none';

}
jsWord.addEventListener('click', showJS);
// -----------------------------------------------AddCard Button-----------------------------------------------------------------

let addCardButton = document.getElementById('addBox');
let mainContainer = document.querySelector(".Container");
let mainDiv = document.querySelector('.main');
let flag = true;

function showOnlyRepo() {

        mainContainer.style.display = "none";
        document.body.style.background = "#fafafa";
    
}



function createInputField(labelName, inputId, placeholder) {
    let container = document.createElement('div');
    let label = document.createElement('label');
    label.textContent = labelName;
    let input = document.createElement('input');
    input.type = 'text';
    input.id = inputId;
    input.placeholder = placeholder;
    container.appendChild(label);
    container.appendChild(input);
    label.style.display = 'block';
    label.style.marginBottom = '5px';
    input.style.width = '100%';
    input.style.padding = '8px';
    input.style.marginBottom = '10px';
   

    document.body.appendChild(container);
    
}
let flag2 = true;
function dataRetrieve() {
   
    if (flag2) {
        flag2 = false;

        createInputField('Date:', 'dateField', 'Enter date');
        createInputField('Title:', 'titleField', 'Enter title');
        createInputField('Description:', 'descriptionField', 'Enter description');
        createInputField('Type:', 'typeField', 'Enter type (css,html,js)');

        let submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        document.body.appendChild(submitButton);
        
       
       
      

       
      
    
        let backWord = document.createElement('a');
        backWord.href = '';
        backWord.style.color = 'red';
        backWord.style.display = 'block';
        backWord.style.margin = '10% 0 0 50%';
        backWord.text = 'Back';
        backWord.style.fontSize = '20px';
        document.body.appendChild(backWord);;
    }
}



addCardButton.addEventListener('click', showOnlyRepo);
addCardButton.addEventListener('click', dataRetrieve);





//---------------------------------------------List for js tasks--------------------------------------------------------------------

let jsTaskMainElements = [
    document.querySelector('.jsTask2-main'),
    document.querySelector('.jsTask1-main'),
    document.querySelector('.jsTask4-main')

];

let jsTaskSecondaryElements = [
    document.querySelector('.jsTask2-Secondary'),
    document.querySelector('.jsTask1-Secondary'),
    document.querySelector('.jsTask4-Secondary')

];

function showTaskList_js(taskIndex) {
    for (let i = 0; i < jsTaskMainElements.length; i++) {
        if (i === taskIndex) {
            jsTaskSecondaryElements[i].style.display = 'block';
        } else {
            jsTaskSecondaryElements[i].style.display = 'none';
        }
    }
}

for (let i = 0; i < jsTaskMainElements.length; i++) {
    jsTaskMainElements[i].addEventListener('click', function () {
        showTaskList_js(i);
    });
}

//---------------------------------------------List for CSS tasks--------------------------------------------------------------------

let taskMainElements = [
    document.querySelector('.cssTask2-main'),
    document.querySelector('.cssTask3-main'),
    document.querySelector('.cssTask4-main'),
    document.querySelector('.cssTask5-main'),
    document.querySelector('.cssTask6-main')
];

let taskSecondaryElements = [
    document.querySelector('.cssTask2-Secondary'),
    document.querySelector('.cssTask3-Secondary'),
    document.querySelector('.cssTask4-Secondary'),
    document.querySelector('.cssTask5-Secondary'),
    document.querySelector('.cssTask6-Secondary')
];

function showTaskList(taskIndex) {
    for (let i = 0; i < taskMainElements.length; i++) {
        if (i === taskIndex) {
            taskSecondaryElements[i].style.display = 'block';
        } else {
            taskSecondaryElements[i].style.display = 'none';
        }
    }
}

for (let i = 0; i < taskMainElements.length; i++) {
    taskMainElements[i].addEventListener('click', function () {
        showTaskList(i);
    });
}

//-------------------------------------------------------------------------------------------------
