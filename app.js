
var itemOne = new Vue({
    data:{
        name:"Creed II",
        image:"Images/creed2.jpg",
        desc:"Under the tutelage of Rocky Balboa, heavyweight contender Adonis Creed faces off against Viktor Drago, son of Ivan Drago.",
        available:7,
        inCart:0,
        price:15.99,
        totalPrice: 0
    },
    methods:{
        addItem:function(){
            this.inCart++;
            this.available--;
            this.totalPrice = Number(parseFloat(this.inCart*this.price).toFixed(2));
        }
    }
})

var itemTwo = new Vue({
    data:{
        name:"Fantastic Beasts: The Crimes of Grindelwald",
        image:"Images/fantasticBeasts.png",
        desc:"The second installment of the Fantastic Beasts series featuring the adventures of Magizoologist Newt Scamander.",
        available:7,
        inCart:0,
        price:12.99,
        totalPrice: 0
    },
    methods:{
        addItem:function(){
            this.inCart++;
            this.available--;
            this.totalPrice = Number(parseFloat(this.inCart*this.price).toFixed(2));
        }
    }

})

var itemThree = new Vue({
    data:{
        name:"Bohemian Rhapsody",
        image:"Images/bohemianRapsody.png",
        desc:"A chronicle of the years leading up to Queen's legendary appearance at the Live Aid (1985) concert. ",       
        available:7,
        inCart:0,
        price:13.95,
        totalPrice: 0
    },
    methods:{
        addItem:function(){
            this.inCart++;
            this.available--;
            this.totalPrice = this.inCart*this.price;
            this.totalPrice = Number(parseFloat(this.totalPrice).toFixed(2));
        }
    }
})

var shoppingCart = new Vue({
    el:"#ShoppingCart",
    data:{
        Items:[itemOne,itemTwo,itemThree],
        total:0
    },
    methods:{
        removeItem:function(item){
            this.Items[this.Items.indexOf(item)].available++;
            this.Items[this.Items.indexOf(item)].inCart--;
            this.Items[this.Items.indexOf(item)].totalPrice = this.Items[this.Items.indexOf(item)].inCart*this.Items[this.Items.indexOf(item)].price;
            this.Items[this.Items.indexOf(item)].totalPrice = Number(parseFloat(this.Items[this.Items.indexOf(item)].totalPrice).toFixed(2));
        },
        calculateTotal:function(){
            this.total = 0;
            for(let i = 0;i < this.Items.length;++i){
                this.total+=this.Items[i].totalPrice;
            } 
            this.total = Number(parseFloat(this.total).toFixed(2));    
        }
    }
})