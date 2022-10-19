# Documentacion

- Comence analizando la pagina para crear una estructura previa de etquetas html que iba a utilizar, ademas de dividirla en secciones

- Linke los estilos ademas de las fuentes e iconos que iba a utilizar

        <link rel="stylesheet" href="./src/style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lora&family=Playfair+Display&family=Work+Sans&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

- Comence a maquetar seccion por seccion pensando en el responsive de una vez, para que todo se hiciera de la manera mas eficiente

- Use tanto grid como flexbox para organizar los elementos, pero principalmente se uso grid

- Trate de no usar muchas mediaquerys para que el diseño fuera los mas fluido posible sin tantos breakpoints, para eso me apolle de grid y flexbox y sus propiedades reponsivas, esto lo logre principalmente con esta propiedad

        grid-template-columns: repeat(auto-fit, minmax(200px,1fr));

con ella lo que hago es un layout responsive y con un flujo automatico que se cuadra en cualquier pantalla sin mediaquerys, el valor "auto-fit" le dice a grid que requiero que ocupe lo que el contenedor mide, que en este caso esta en minimo 200px y maximo 1fr osea el 100% de la pantalla, y con repeat me llena automaticamente los espacios con los elementos que haya, si hay uno solo uno o si hay mas con los que esten.

- Recicle estilos ya que muchas secciones compratian el mismo estilo y solo cambia el fondo por ejemplo

        .ofertas, .p-con{
            padding: 50px 0px;
            display: grid;
            gap: 30px;
            grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
            align-content: center;
        }

- Tambien hice uso de la funcion clamp en algunos tamaños de texto para que cambiaran automaticamente de tamaño con la pantalla de manera fluida y sin mediaquerys

        font-size: clamp(1rem, 4vw, 5rem);

- Ademas use variables ya que muchos elementos comparten valores, y di el cliente requiere cambiar colores, de esta manera solo modifico el valor de la variable

        :root{
            --txt-negro: #333;
            --txt-gris: #575757;
            --txt-verde: #529F0F;
            --lora: 'Lora', serif;
            --playfair: 'Playfair Display', serif;
            --work-sans: 'Work Sans', sans-serif;
        }

- Esta fue la unica mediaquery que use y sus estilos

        @media (max-width: 480px){
            header img{
                margin: auto;
                margin-left: 0;
            }
            nav{
                display: none;
            }
            #menu{
                display: block;
            }
            .inicio{
                height: 50vh;
            }
            .offer{
                width: auto;
            }
            .offer:first-child{
                margin-left: 0;
            }
            .products, footer{
                width: 115%;
                padding: 0 20px;
                transform: translateX(-6.5%);
            }
            .products > p{
                width: auto;
            }
            .p-con{
                padding: 50px 0px 80px;
            }
            .p-con > div{
                width: auto;
            }
            .hoja p:first-of-type{
                width: auto;
            }
            .suscribe form{
                width: 90%;
            }
            .brand{
                padding: 80px 0;
                grid: 1fr / 1fr;
                justify-items: center;
            }
            .brand > *:not(:first-child){
                display: none;
            }
            footer{
                padding: 0;
            }
            .f-m{
                padding: 50px 20px;
            }
            .f-s{
                background: #f3f3f3;
                padding: 20px 0;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                gap: 20px;
            }
        }