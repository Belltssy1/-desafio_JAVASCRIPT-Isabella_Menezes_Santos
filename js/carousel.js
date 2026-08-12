
let carouselArr = [];

//class Carousel
class Carousel {

    constructor(image, title,Url) {
        this.image = image;
        this.title = title;
        this.link = Url;
    }

    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._arr = arr;
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Show();
                Carousel._interval = setInterval(function(){ Carousel.Next(); }, 500);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }
    static Show() {
        let item = Carousel._arr[Carousel._sequence];
        document.getElementById("carousel").innerHTML = `<a href="${item.link}"><img src="img/${item.image}" alt="${item.title}"></a>`;
    
        document.getElementById("carousel-title").innerHTML = `<p>${item.title}</p>`;
    }
    static Next(){
        if (Carousel._size > 0) {
            Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
            Carousel.Show();
        
            clearInterval(Carousel._interval);
            Carousel._interval = setInterval(function(){ Carousel.Next(); }, 5000);
        }
    }

    static Prev(){
        if (Carousel._size > 0) {
            Carousel._sequence = (Carousel._sequence - 1 + Carousel._size) % Carousel._size;
            Carousel.Show();
        
            clearInterval(Carousel._interval);
            Carousel._interval = setInterval(function(){ Carousel.Next(); }, 5000);
        }
    }
};