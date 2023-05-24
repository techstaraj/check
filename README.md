# check
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="CSS/nav.css">
    <link rel="stylesheet" href="CSS/footer.css">
    <title>Omkar Enterprises</title>
</head>
<body>
    <nav>
        <div class="logo">
            <h1>Omkar Enterprises</h1>
        </div>
        <div class="address">
            <svg width="15" height="20" style="margin-right:5px;margin-top:5px">
                <circle cx="7" cy="10" r="3" fill="none" stroke="white" stroke-width="2" />
                <path d="M7 20 L3 15 C-7 0 20 0 11 15 Z " fill="none" stroke="white" stroke-width="2" />
            </svg>
            <div class="addr">
                <p>Hello</p>
                <h4>Select Address</h4>
            </div>
        </div>
        <div class="search">
            <input type="text" placeholder="Search Items" id="search">
            <button onclick="search()">
                <ion-icon name="search-outline" class="searchIcon"</ion-icon>
            </button>
        </div>
        <div class="lang">
            <select name="language" id="lang">
                <option value="En">English</option>
                <option value="Hi">Hindi</option>
                <option value="Mar">Marathi</option>
            </select>
        </div>
        <div class="addr">
            <p>Returns</p>
            <h4>& Order</h4>
        </div>
        <div class="cart">
            <ion-icon name="cart-outline" style="color: white;font-size: 50px;"></ion-icon>
            <p style="color: white;font-weight: 600;align-self: center;">Cart</p>
        </div>
    </nav>
    <h3 class="warning">The Services are currently available near Pune City Only</h3>
    <main>
        <div class="head">
            <svg width="500" height="20" id="dot">
                <circle cx="10" cy="10" r="6" stroke="black" stroke-width="2" fill="black" onclick="setCounter(0)"/>
                <circle cx="30" cy="10" r="6" stroke="black" stroke-width="2" fill="White" onclick="setCounter(1)"/>
                <circle cx="50" cy="10" r="6" stroke="black" stroke-width="2" fill="White" onclick="setCounter(2)"/>
                <circle cx="70" cy="10" r="6" stroke="black" stroke-width="2" fill="White" onclick="setCounter(3)"/>
                <circle cx="90" cy="10" r="6" stroke="black" stroke-width="2" fill="White" onclick="setCounter(4)"/>
            </svg>
            <div class="images">
                <div class="img"><h1>First Div</h1></div>
                <div class="img"><h1>Second Div</h1></div>
                <div class="img"><h1>Third Div</h1></div>
                <div class="img"><h1>Fourth Div</h1></div>
                <div class="img"><h1>Fifth Div</h1></div>
            </div>
        </div>
        <div class="brands">
            <div class="brand">
                <!--Brand Details-->
                <div class="flash"></div>
            </div>
            <div class="brand">
                <!--Brand Details-->
                <div class="flash"></div>
            </div>
            <div class="brand">
                <!--Brand Details-->
                <div class="flash"></div>
            </div>
            <div class="brand">
                <!--Brand Details-->
                <div class="flash"></div>
            </div>
            <div class="brand">
                <!--Brand Details-->
                <div class="flash"></div>
            </div>
        </div>
        <div class="products">
            <h2>Top Products</h2>
            <svg id = "prev" width="50" height="50" onclick="prev()">
                <line x1="32" y1="10" x2="12" y2="25" stroke="black" stroke-width="4" stroke-linecap="round" />
                <line x1="32" y1="40" x2="12" y2="26" stroke="black" stroke-width="4" stroke-linecap="round" />
            </svg>
            <svg id = "next" width="50" height="50" onclick="next()">
                <line x1="18" y1="10" x2="38" y2="25" stroke="black" stroke-width="4" stroke-linecap="round" />
                <line x1="18" y1="40" x2="38" y2="26" stroke="black" stroke-width="4" stroke-linecap="round" />
            </svg>
            <div class="items">
                <div class="item">A</div>
                <div class="item">B</div>
                <div class="item">C</div>
                <div class="item">D</div>
                <div class="item">E</div>
                <div class="item">F</div>
                <div class="item">G</div>
                <div class="item">H</div>
                <div class="item">J</div>
                <div class="item">I</div>
            </div>
        </div>
        <div class="products">
            <h2>Accessories</h2>
            <svg id = "prev" width="50" height="50" onclick="prevAC()">
                <line x1="32" y1="10" x2="12" y2="25" stroke="black" stroke-width="4" stroke-linecap="round" />
                <line x1="32" y1="40" x2="12" y2="26" stroke="black" stroke-width="4" stroke-linecap="round" />
            </svg>
            <svg id = "next" width="50" height="50" onclick="nextAC()">
                <line x1="18" y1="10" x2="38" y2="25" stroke="black" stroke-width="4" stroke-linecap="round" />
                <line x1="18" y1="40" x2="38" y2="26" stroke="black" stroke-width="4" stroke-linecap="round" />
            </svg>
            <div class="items">
                <div class="item1">A</div>
                <div class="item1">B</div>
                <div class="item1">C</div>
                <div class="item1">D</div>
                <div class="item1">E</div>
                <div class="item1">F</div>
                <div class="item1">G</div>
                <div class="item1">H</div>
                <div class="item1">J</div>
                <div class="item1">I</div>
            </div>
        </div>
    </main>
    <footer>
        <div class="links">
            <a href="">Omkar Enterprises</a>
            <a href="">Top brands</a>
            <a href="">Accessories</a>
            <a href="">Cart</a>
            <a href="">Orde&#8377;</a>
            <a href="">Brands</a>
            <a href="">Brands</a>
            <a href="">Brands</a>
            <a href="">Brands</a>
            <a href="">Brands</a>
            <a href="">Brands</a>
            <a href="">Brands</a>
            <a href="">Brands</a>
            <a href="">Brands</a>
            <a href="">Brands</a>
            <a href="">Brands</a>
            <a href="">Brands</a>
            <a href="">Brands</a>
            <a href="">Brands</a>
            <a href="">Brands</a>
        </div>
        <div class="contact">
            <div class="details">
                <b>Company Name : </b>Omkar Enterprises <br>
                <b>Phone Number : </b><a href="">+91 738722775</a> <br>
                <b>Address : </b>A/p Hiware Kumbhar Tal.Shirur Dist.Pune Pin - 412208<br>
            </div>
            <div class="social-media">
                <ion-icon name="logo-instagram"></ion-icon>
                <ion-icon name="logo-youtube"></ion-icon>
                <ion-icon name="logo-twitter"></ion-icon>
                <ion-icon name="logo-linkedin"></ion-icon>
                <ion-icon name="logo-whatsapp"></ion-icon>
                <ion-icon name="logo-snapchat"></ion-icon>
            </div>
        </div>
    </footer>
    <script src="javascript.js"></script>
    <script src="search.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>
</html>
