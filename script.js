// ==========================
// Search
// ==========================

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function () {

    const keyword = this.value.toLowerCase();

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.indexOf(keyword) > -1) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});


// ==========================
// Copy Prompt
// ==========================

const copyBtns = document.querySelectorAll(".copy-btn");

copyBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        const prompt =
            btn.parentElement.querySelector(".prompt").innerText;

        navigator.clipboard.writeText(prompt);

        const old = btn.innerHTML;

        btn.innerHTML = "✓ 已复制";

        btn.style.background = "#22c55e";

        setTimeout(() => {

            btn.innerHTML = old;

            btn.style.background = "";

        }, 1800);

    });

});


// ==========================
// Back To Top
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


// ==========================
// Scroll Animation
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

cards.forEach(card => {

    observer.observe(card);

});


// ==========================
// Tag Filter
// ==========================

const tagBtns = document.querySelectorAll(".tag");

tagBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        document.querySelector(".tag.active")?.classList.remove("active");

        btn.classList.add("active");

        const tag = btn.innerText.toLowerCase();

        cards.forEach(card => {

            if (tag === "all") {

                card.style.display = "block";

                return;

            }

            const text = card.innerText.toLowerCase();

            if (text.includes(tag)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// ==========================
// Image Preview
// ==========================

const images = document.querySelectorAll(".card img");

const overlay = document.createElement("div");

overlay.id = "preview";

overlay.innerHTML = `
    <span id="closePreview">&times;</span>
    <img id="previewImage">
`;

document.body.appendChild(overlay);

const preview = document.getElementById("previewImage");

images.forEach(img => {

    img.addEventListener("click", () => {

        overlay.classList.add("active");

        preview.src = img.src;

    });

});

document.getElementById("closePreview").onclick = () => {

    overlay.classList.remove("active");

};

overlay.onclick = function(e){

    if(e.target===overlay){

        overlay.classList.remove("active");

    }

};


// ==========================
// Navbar Blur
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.style.background="rgba(15,15,15,.75)";

    }else{

        navbar.style.background="rgba(255,255,255,.05)";

    }

});


// ==========================
// Fade In Hero
// ==========================

window.onload=()=>{

    document.querySelector(".hero").style.opacity=1;

};
/* ===========================
   Scroll Animation
=========================== */

.card{

    opacity:0;

    transform:translateY(50px);

}

.card.show{

    opacity:1;

    transform:translateY(0);

    transition:.8s ease;

}

.hero{

    opacity:0;

    transition:1s;

}


/* ===========================
   Image Preview
=========================== */

#preview{

    position:fixed;

    inset:0;

    background:rgba(0,0,0,.92);

    display:flex;

    justify-content:center;

    align-items:center;

    opacity:0;

    visibility:hidden;

    transition:.3s;

    z-index:9999;

}

#preview.active{

    opacity:1;

    visibility:visible;

}

#preview img{

    width:90%;

    max-width:1200px;

    border-radius:20px;

    box-shadow:0 20px 80px rgba(0,0,0,.6);

}

#closePreview{

    position:absolute;

    top:40px;

    right:60px;

    color:white;

    font-size:60px;

    cursor:pointer;

}