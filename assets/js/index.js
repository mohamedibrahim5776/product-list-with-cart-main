let count = 0;
let [ ...buttons] = document.getElementsByTagName( "button" );
let [...minus] = document.getElementsByClassName( "fa-circle-minus" );
let [ ...plus ] = document.getElementsByClassName( "fa-circle-plus" );
let [ ...xmark ] = document.getElementsByClassName( "fa-circle-xmark" );
let [ ...zero ] = document.getElementsByClassName( "zero" );
let [ ...num ] = document.getElementsByClassName( "num" );
let [ ...title ] = document.getElementsByClassName( "title" );
let [ ...price_order ] = document.getElementsByClassName( "price-order" );
let [ ...total_price ] = document.getElementsByClassName( "total-price" );
let [...order_total_price] = document.getElementsByClassName("order-total-price");
let receipt = document.getElementsByClassName("receipt")
let receipt_final = document.getElementsByClassName("receipt_final")
let empty = document.getElementsByClassName("empty")
let value = document.getElementsByClassName("value")
let [ ...images ] = document.images
wallpaper = document.getElementsByClassName("wallpaper")[0]
let [...confirm] = document.getElementsByClassName("btn-danger")
images = images.slice( 0, 9 )
// Hide and show button minus and plus
    buttons.forEach( function ( e )
    {
        e.onclick = function ( )
        {
            this.children[0].classList.add( "hide" )
            this.children[0].classList.remove( "show" )
            this.children[1].classList.remove("hide")
            this.children[ 1 ].classList.add( "show" )
        }
    } )
    
// Determine the counter value
zero.map(function (e) {
    e.innerHTML = 0
} )
//  to hide receipt if = 0
num.map( function ( e )
{
    e.innerHTML = 0;
    if ( e.innerHTML == 0 )
    {
        e.parentElement.parentElement.parentElement.classList.add('hide')
        e.parentElement.parentElement.parentElement.classList.remove( 'd-flex' )
    } 
} );
document.addEventListener( 'click', function ()
{
    // to show receipt 
    num.map( function ( e ){
        e.parentElement.parentElement.parentElement.classList.remove('hide')
        e.parentElement.parentElement.parentElement.classList.add('d-flex')
    } );

    let classes = [];
    // to hide reciept what not active
    num.map( function ( e ){
        if ( e.innerHTML == 0 ){
            e.parentElement.parentElement.parentElement.classList.add('hide')
            e.parentElement.parentElement.parentElement.classList.remove( 'd-flex' )
        }
        classes.push(e.parentElement.parentElement.parentElement.classList[3]);
        count = classes.filter( (e) =>
                {
                return e == "d-flex"
            })        
    } );
    // your cart
    value[ 0 ].innerHTML = count.length;
    
    // show and hide reciept and empty list
    if (order_total_price[ 0 ].innerHTML == 0)
        {
        receipt[ 0 ].classList.add( "hide" )
        empty[0].classList.remove("hide")
    } else
    {
        receipt[0].classList.remove("hide")
        empty[0].classList.add("hide")
};
})
// minus function
minus.map( function ( e )
{
    e.onclick = function ()
    {
    
        if ( this.parentElement.children[ 1 ].innerHTML == 0 )
        {
            console.log( 'e' );
        } else
        {
            this.parentElement.children[ 1 ].innerHTML--;
            title.map( ( e, i ) =>
            {
                if ( this.parentElement.parentElement.parentElement.children[ 1 ].innerHTML === e.innerText )
                {
                    e.parentElement.children[ 1 ].children[ 0 ].innerHTML = 0;
                    e.parentElement.children[ 1 ].children[ 0 ].innerHTML = ( +this.parentElement.children[ 1 ].innerHTML ) - ( +e.parentElement.children[ 1 ].children[ 0 ].innerHTML );
                    total_price[ i ].innerHTML = +price_order[ i ].innerHTML * +this.parentElement.children[ 1 ].innerHTML;
                };
                y = +order_total_price[ 0 ].innerHTML;
                m = total_price.reduce( ( t, v, i ) =>
                {
                    return t + +v.innerHTML;
                }, 0 );
            } );
            order_total_price[ 0 ].innerHTML = m;
        };
    };
} );
// plus function
plus.map( function ( e )
{
    e.onclick = function ()
    {
        this.parentElement.children[ 1 ].innerHTML++;
        title.map( ( e, i, arr ) =>
        {
            if ( this.parentElement.parentElement.parentElement.children[ 1 ].innerHTML == e.innerHTML )
            {
                e.parentElement.children[ 1 ].children[ 0 ].parentElement.parentElement.children[ 3 ].innerHTML = e.parentElement.children[ 1 ].children[ 0 ].parentElement.parentElement.children[ 2 ].innerHTML;
                e.parentElement.children[ 1 ].children[ 0 ].innerHTML = 0;
                e.parentElement.children[ 1 ].children[ 0 ].innerHTML = ( +e.parentElement.children[ 1 ].children[ 0 ].innerHTML ) + ( +this.parentElement.children[ 1 ].innerHTML );
                e.parentElement.children[ 1 ].children[ 0 ].parentElement.parentElement.children[ 3 ].innerHTML = ( +e.parentElement.children[ 1 ].children[ 0 ].parentElement.parentElement.children[ 3 ].innerHTML ) * ( +this.parentElement.children[ 1 ].innerHTML );
            };
            y = +order_total_price[ 0 ].innerHTML;
            m = total_price.reduce( ( t, v, i ) =>
            {
                return t + +v.innerHTML;
            }, 0 );
        } );
        order_total_price[ 0 ].innerHTML = m;
    };
} );

if (window.innerWidth < 768) {
    console.log( "mobile" )
    images.map( (e) =>
        {
            e.src.replace( "desktop", "mobile" )
    })
} else if ( window.innerWidth < 1200 )
{
    images.map( (e) =>
        {
            e.src.replace( "desktop", "tablet" )
    })
}

confirm[ 0 ].onclick = function ( e )
{
    receipt_final[0].innerHTML = receipt[0].innerHTML
    wallpaper.style.display = "block"
    receipt_final[ 0 ].style.padding = "70px"
    document.getElementsByClassName("btn-danger")[1].onclick = function () {
        receipt_final[ 0 ].innerHTML = ""
        wallpaper.style.display = "none"
        receipt_final[ 0 ].style.padding = "0px"
    }
};
// xmark.map( (e) =>
// {
//     e.onclick = function (params) {
//         console.log(e.parentElement.children[1].children[1].children[0].innerHTML = 0)
//     }
// })