function showtopic(year_div){
    year_div.classList.toggle('multiselect--active');
    year_div.querySelector('.multiselect__content-wrapper').style.display == 'none'? year_div.querySelector('.multiselect__content-wrapper').style.display='block': year_div.querySelector('.multiselect__content-wrapper').style.display = 'none';

    // Get all elements with the class "exampleClass"
        var elements = year_div.querySelectorAll('.multiselect__option');
        

     elements.forEach(function(element) {
       element.addEventListener('click', function() {
        console.log(element)
         element.classList.toggle('multiselect__option--selected');
       });
     });
}

function showyear(year_div){
    year_div.classList.toggle('multiselect--active');
    year_div.querySelector('.multiselect__content-wrapper').style.display == 'none'? year_div.querySelector('.multiselect__content-wrapper').style.display='block': year_div.querySelector('.multiselect__content-wrapper').style.display = 'none';

    // Get all elements with the class "exampleClass"
        var elements = year_div.querySelectorAll('.multiselect__option');
       
     elements.forEach(function(element) {
       element.addEventListener('click', function() {
        var list_items = year_div.querySelectorAll('.multiselect__option');
        list_items.forEach(function(element) {element.classList.remove('multiselect__option--highlight');});
         element.classList.add('multiselect__option--highlight');
       });
     });
}





