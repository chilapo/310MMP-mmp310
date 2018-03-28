const images = [
    "images/cat.jpg", 
    "images/dog.jpg" , 
    "images/bird.jpg" ,  
    "images/lizard.jpg"
               ];
                
const captions = [
    "I'm a cat",
    "I'm a dog",
    "Helo, I'm a bird",
    "I'm a lizard",
];

const (let i = 0; )

for (let i = 0; i < images.length; i++){
    const img = new Image();
    img.src = images[i];
    img,id = "img"+i;
    img.classList.add("slide");
    document.body.appendChild(img);

    const caption = document.createElement('p');
    caption.classList.add(caption);
    caption.textContent = captions[i];
    document.body.appendChild(caption);
}