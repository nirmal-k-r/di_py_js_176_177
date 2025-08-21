// alert('Site loaded');


function changeColor(){
    document.body.style.backgroundColor = 'lightblue';
}

function originalColor(){
    document.body.style.backgroundColor = '';
}

function userScroll() {
    // console.log('User is scrolling');
    changeColor();
    setTimeout(originalColor, 1000);  //wait - in milliseconds
};


function swapBackgroundColor(){
    document.body.classList.toggle('dark');
}


function imagePopup(){
    alert('Youre hovering over a mountain image');
}


//select the element
firstImage=document.querySelector('#firstImage');
firstImage.addEventListener('mouseover',imagePopup);

//break 


