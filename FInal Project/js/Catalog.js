class Catalog
{
     constructor()
     {
        this.products=
        [
           {id:1, name:"Manchester United", image:"manutd_shirt.jpg", description:`Get ready to root on the Red Devils with this Manchester United 2023/24 
           Home Replica Custom Jersey from adidas. Thanks to AEROREADY technology, you'll feel great during every match this season. 
           The fresh Manchester United graphics and designs will stand out any time you wear it...`,price:159},
           
           {id:2, name:"Paris Saint-Germain",image:"psg_shirt.png", description: `Paying homage to the classic PSG design, the 2023/24 home kit updates the kit from the early 
           2000s with a contemporary twist. The famous red and white stripes of Paris Saint-Germain fade into the blue of the jersey and are inspired by the rays of light that 
           make up the beauty of Paris...`,price:159},
          
           {id:3, name:"Real Madrid", image:"Rma_Shirt.jpg", description:`With a nod to older kits, gold accents from previous kits are re-introduced alongside navy framing. 
           An allover, sublimation print is a subtle update to the classic all-white color, complemented by a new soccer silhouette that lets you 
           take the clubs elegance and style off-pitch. ...`,price:159},
           
           {id:4, name:"AC Milan", image:"milan_shirt.jpg", description:`You cannot separate AC Milan from Milan. So, with the 2023/24 Home jersey, we bring the two even closer together. 
           The signature Red and Black stripes are transformed into a completely new repeat graphic that celebrates the city, the team, and their role at the heart of a community that is 
           constantly evolving, constantly moving things on...`,price:159},
           
           {id:5, name:"Arsenal", image:"ars_shirt.jpg", description:`Arsenal is heritage gets a modern update in the Arsenal 23/24 Home Shirt. Celebrating the 20th anniversary of 
           the Invincibles season, this 23/24 home shirt comes in a bright, new shade of red adorned with lightning bolts and gold details 
           for a sophisticated take on a classic kit... `,price:159}
        ];
     }
     getProducts(){return this.products;}
     getItem(id)
     {
    for (let i=0; i<this.products.length; i+=1)
    {
      if(this.products[i].id==id) 
      return this.products[i];
    }
    return null;
     findItem(name)
     {
           for (let i=0; i<this.products.length; i+=1)
           {
                  if(this.products[i].name==name) return this.products[i].id;
            }
    return -1; }
    }
}