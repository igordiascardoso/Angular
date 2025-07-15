class CardNews extends HTMLElement {
    constructor(){ 
        super();

        const shadow = this.attachShadow({mode : "open"});
        shadow.appendChild(this.build())
        shadow.appendChild(this.style())


    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","card");

        const autor = document.createElement("span");    
        const cardLeft = document.createElement("div");
        const cardRight = document.createElement("div");
        const linkTitle = document.createElement("a");
        const newsContent = document.createElement("p");
        const newsImage = document.createElement("img")
        
        cardRight.setAttribute("class","card_right");
        cardLeft.setAttribute("class","card_left");




        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");
        newsContent.textContent = this.getAttribute("content");
        newsImage.src = this.getAttribute("photo") || "./assets/foto-default.jpg";
        newsImage.alt = "Foto da notícia";




        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
        cardRight.appendChild(newsImage);
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

       
        return componentRoot;

    }

    style(){
        const style = document.createElement("style");

        style.textContent = 
        
        `
      
        
        .card{
            border: 1px solid gray;
            flex-direction: row; 
            justify-content: space-between;
            display: flex;

        }

        .card a{
            font-size: 25px;
            margin-top: 15px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }

        .card p{
        
            font-size: 17px;
            
        }

        .card_left span{

            font-weight: 400;
            
        }

        .card_left img{
            position: relative;
            top: 3px;
        }

        .card_left {
            
        
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }

        .card_left p{
            color: gray;
        }



        .card_left img{
            width: 22px;
            border-radius: 50%;
        
        }

        .card_right {
        margin: 30px;
        }
                
        
        `        
        ;

        return style;
    }

}


customElements.define("card-news", CardNews);