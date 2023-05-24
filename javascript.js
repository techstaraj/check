//Slideshow
const img = document.querySelectorAll('.img');
var dot = document.getElementById("dot").querySelectorAll('circle');
var counter = 0;
img.forEach((slide,index) => {
    slide.style.left = `${index*100}%`
});
const setCounter = (i) => {
    counter = i;
}
var x = setInterval(() => {
    for(let i = 0;i<img.length;i++){
        img[i].style.transform = `translateX(-${counter*100}%)`
        if(counter == i){
            dot[i].setAttribute('fill','black')
        }else{
            dot[i].setAttribute('fill','white')
        }
    }
    counter++
    if(counter == img.length){
        counter = 0;
    }
},5000)


//Products Slider
var items = document.querySelectorAll('.item')
items.forEach((item,index) => {
    item.style.left = `${index*20}%`
})
var count = 0;
const prev = () => {
    count--;
    if(count < 0) count = 0;
    slider();
}
const next = () => {
    count++;
    if(count > items.length - 3) count = 0;
    slider();
}
const slider = () => {
    items.forEach((item) => {
        item.style.transform = `translateX(-${count*110}%)`
    })
}


// Accessories Slider
var itemsAC = document.querySelectorAll('.item1')
itemsAC.forEach((item,index) => {
    item.style.left = `${index*20}%`
})
var countAC = 0;
const prevAC = () => {
    countAC--;
    if(countAC < 0) countAC = 0;
    sliderAC();
}
const nextAC = () => {
    countAC++;
    if(countAC > itemsAC.length - 3) countAC = 0;
    sliderAC();
}
const sliderAC = () => {
    itemsAC.forEach((item) => {
        item.style.transform = `translateX(-${countAC*110}%)`
    })
}

//Animation Stopper
var flash = document.querySelectorAll('.flash')
var yesNo = false;
var x = setInterval(() => {
    if(yesNo) {
        flash.forEach((item) => {
            item.style.animation = 'flash 2s infinite';
        })
        yesNo = false;
    }else {
        flash.forEach((item) => {
            item.style.animation = 'none';
        })
        yesNo = true;
    }
},2000)