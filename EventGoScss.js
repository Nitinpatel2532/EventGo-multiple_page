// 1. Login Page Js

// display date and time that change dynamically.........

function date_time() {
    const now = new Date();
    const format = now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second:'2-digit'
    });
    
            document.querySelector("#dateshowTime").textContent = format;

    // to change dynamically we use setInterval method

    setInterval(date_time, 1000);
   


}
document.addEventListener("DOMContentLoaded", () => {
    date_time();
})

// login page_form validation
//  compare data (username or password) with local storage that is stored by signup page.
// if data is matches then reach on another page else show error.. 

const check_data = () => {

    let uname = document.querySelector("#username1").value
    let upassword = document.querySelector("#password1").value

    // get all data from local storage in its original form......
    
    let signup_data = JSON.parse(localStorage.getItem("Data"))

    if (uname != signup_data.username || upassword != signup_data.password) {
        alert("Incorrect Username or password !")
        // document.querySelector("#username1").focus()
        document.querySelector("#password1").focus()

        return false;
    } else {
        return true;
    }
   
}

// ========================================================================================================

// update all recommended movies and events by js in homepage............

const update_container = [
    {
        movie_img: "chhava.avif",
        movie_name: "Sanam Teri Kasam",
        movie_type: "Romantic/Action",
        movie_lang: "Hindi",
        movie_price: "200",
        movie_desc: "Inder is a hunky lone wolf, trapped in an unfulfilling romantic relationship. Saru is a nerdy librarian who has faced more rejections than she can count. In a life so fickle and short, the promise of eternal love ends up binding them to each other",
        movie_release_date:" 16 February 2016",
        movie_director:  " Director:: Radhika Rao, Vinay Sapru",
        movie_cast:" Cast:: Harshvardhan Rane , Mawra Hocane , Manish Chaudhari,Anurag Sinha,",
        movie_trailer:"sanam_trailer.mp4"

    },
    {
        movie_img: "captain.avif",
        movie_name: "padmaavat",
        movie_type: "Romance/Action",
        movie_lang: "Hindi,Tamil,Telugu",
        movie_price: "200",
        movie_desc:"Queen Padmavati is happily married to a Rajput ruler until a ruthless sultan, Alauddin Khalji, declares war on their kingdom due to his obsession with her.",
        movie_release_date:" 25 January 2018 ",
         movie_director:  " Director:: Sanjay Leela Bhansali",
        movie_cast: " Cast:: Ranveer Singh , Sahid Kapoor , Deepkia Padukone , Jim Sarbh ",
        movie_trailer:"padmaavat_trailer.mp4"
    },
    {
        movie_img: "narayan.avif",
        movie_name: "Sky Force",
        movie_type: "Action/Thriller",
        movie_lang: "Hindi",
        movie_price: "200",
        movie_desc: "India and Pakistan engage in airstrike warfare. The conflict escalates, risking severe consequences. A group of individuals seeks the truth behind the war amid rising tensions.",
        movie_release_date:"24 January 2025",
         movie_director:  " Director:: Abhishek Anil Kapur, Sandeep Kewlani",
        movie_cast: " Cast:: Akshay kumar , Veer pahariya,Sara Ali khan",
        movie_trailer:"azaad_trailer.mp4"
    },
    {
        movie_img: "emergency.avif",
        movie_name: "Deva",
        movie_type: "Thriller/Action",
        movie_lang: "Hindi",
        movie_price: "200",
        movie_desc: "A skilled but defiant police officer investigates a major case. The officer discovers layers of lies and betrayal during the investigation.",
        movie_release_date:"Released Date:: 31 January 2025 ",
        movie_director:  " Director:: Rosshan Andrrews",
        movie_cast: " Cast::Sahid kapoor, pooja Hegde , Kubbara sait",
       movie_trailer:"deva_trailer.mp4"
    },
    {
        movie_img: "azaad.avif",
        movie_name: "Azaad",
        movie_type: "Adventure",
        movie_lang: "Hindi",
        movie_price: "200",
        movie_desc: "In 1920s India, a young stable boy bonds with a spirited horse. Amid rebellion and tyranny, his quest to ride the majestic animal becomes a journey of courage, awakening him to the country's fight for freedom.",
        movie_release_date:"17 January 2025",
         movie_director:  " Director:: Abhishek Kapoor",
        movie_cast: " Cast:: Rasha Thadani , Ajay Devgan , Dia pently,mohit malik",
        movie_trailer:"azzad_trailer.mp4"
    },
    {
        movie_img: "interstellar.avif",
        movie_name: "Interstellar",
        movie_type: "Sci-fi/Adventure",
        movie_lang: "English",
        movie_price: "200",
        movie_desc: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
        movie_release_date:"7 November 2014",
         movie_director:  " Director::Christopher Nolan",
        movie_cast: " Cast:: Matthew McConaughey ,Jessica Chastain , Anne Hathaway,Timothée Chalamet",
        movie_trailer:"interstellar_trailer.mp4"
    },
    {
        movie_img: "vidaamuyarchi.avif",
        movie_name: "vidaamuyarchi",
        movie_type: "Thriller/Action",
        movie_lang: "Tamil,Hindi",
        movie_price: "200",
        movie_desc: "A married couple's trip takes an unsettling turn when the wife goes missing, prompting the husband's frantic search while an unknown villain creates obstacles.",
        movie_release_date:" 6 February 2025",
         movie_director:  " Director:: Magizh Thirumeni",
        movie_cast: " Cast:: Harshvardhan Rane , Mawra Hocane , Manish Chaudhari,Anurag Sinha,",
        movie_trailer:"vidaa_trailer.mp4"
    },

 
];

const Movies = document.querySelector(".Movies");

    if (Movies) {
        update_container.forEach((mov_detail, index) => {
            const div = document.createElement("div");
            div.classList.add("mov");
            div.innerHTML = `
      <img src="${mov_detail.movie_img}" alt="${mov_detail.movie_name}">
      <h4>${mov_detail.movie_release_date}</h4>
        <h3>${mov_detail.movie_name}</h3>
        <p> ${mov_detail.movie_type}</p>
       
        <p>Language: ${mov_detail.movie_lang}</p>
    
    `;
            div.addEventListener("click", () => {
                localStorage.setItem("selectedItem", JSON.stringify(mov_detail));
                window.location.href = "details.html";

    
            });
            document.addEventListener("DOMContentLoaded", () => {
                Movies.appendChild(div);
            })
        }

        );

    }




// function togglepopup() {
//     var popup = document.getElementById("popup");
//     popup.style.display = (popup.style.display === "block") ? "none" : "block";

//     window.onclick = function (event) {
//         if (!event.target.closest('.side_page_icon')) {
//             document.getElementById("popup").style.display = "none";
//         }
//     }
// }


// document.querySelector(".location").addEventListener("click", () => {
//     var loc = document.querySelector(".fetch_location")
//     loc.style.display = (loc.style.display === "block") ? "none" : "block";

//     window.onclick = function (event) {
//         if (!event.target.closest('.location')) {
//             document.getElementsByClassName("fetch_location").style.display = "none";
//         }
//     }
    
// })

// document.querySelector(".signup_btn_icon").addEventListener("click", () => {

//     var sgn = document.querySelector(".signupbar")
//     sgn.style.display = (sgn.style.display === "block") ? "none" : "block";

//     window.onclick = function (event) {
//         if (!event.target.closest('#signup_btn_login')) {
//             document.getElementsByClassName("signupbar").style.display = "none";
//         }
//     }
    
// })

// // ============================================================================================================

// // handling 2html page (event- page ) scroll bar.........................

// const event_wrapper = document.querySelector(".event-wrapper")
// const leftArrow = document.querySelector("#left-arrow")
// const rightArrow = document.querySelector("#right-arrow")

// const scrollAmount = 12;

// leftArrow.addEventListener("click", () => {
//     event_wrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
// });

// rightArrow.addEventListener("click", () => {
//     event_wrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
// });


// =====================================================================
// 3. movie page (get detail of specific movie by click on it)
// and add movies and content by js

// movies inforamtion that stored in object

const movie_info = [
    {
        movie_img: "stk2.jpg",
        movie_name: "Sanam Teri Kasam",
        movie_type: "Romantic/Action",
        movie_lang: "Hindi",
        movie_price: "200",
        movie_desc: "Inder is a hunky lone wolf, trapped in an unfulfilling romantic relationship. Saru is a nerdy librarian who has faced more rejections than she can count. In a life so fickle and short, the promise of eternal love ends up binding them to each other",
        movie_release_date:"Released Date:: 16 February 2016",
        movie_director:  " Director:: Radhika Rao, Vinay Sapru",
        movie_cast:" Cast:: Harshvardhan Rane , Mawra Hocane , Manish Chaudhari,Anurag Sinha,",
        movie_trailer:"sanam_trailer.mp4"

    },
    {
        movie_img: "padmaavat.avif",
        movie_name: "padmaavat",
        movie_type: "Romance/Action",
        movie_lang: "Hindi,Tamil,Telugu",
        movie_price: "200",
        movie_desc:"Queen Padmavati is happily married to a Rajput ruler until a ruthless sultan, Alauddin Khalji, declares war on their kingdom due to his obsession with her.",
        movie_release_date:"Released Date:: 25 January 2018 ",
         movie_director:  " Director:: Sanjay Leela Bhansali",
        movie_cast: " Cast:: Ranveer Singh , Sahid Kapoor , Deepkia Padukone , Jim Sarbh ",
        movie_trailer:"padmaavat_trailer.mp4"
    },
    {
        movie_img: "skyforce.avif",
        movie_name: "Sky Force",
        movie_type: "Action/Thriller",
        movie_lang: "Hindi",
        movie_price: "200",
        movie_desc: "India and Pakistan engage in airstrike warfare. The conflict escalates, risking severe consequences. A group of individuals seeks the truth behind the war amid rising tensions.",
        movie_release_date:" Released Date:: 24 January 2025",
         movie_director:  " Director:: Abhishek Anil Kapur, Sandeep Kewlani",
        movie_cast: " Cast:: Akshay kumar , Veer pahariya,Sara Ali khan",
        movie_trailer:"azaad_trailer.mp4"
    },
    {
        movie_img: "deva.avif",
        movie_name: "Deva",
        movie_type: "Thriller/Action",
        movie_lang: "Hindi",
        movie_price: "200",
        movie_desc: "A skilled but defiant police officer investigates a major case. The officer discovers layers of lies and betrayal during the investigation.",
        movie_release_date:"Released Date:: 31 January 2025 ",
        movie_director:  " Director:: Rosshan Andrrews",
        movie_cast: " Cast::Sahid kapoor, pooja Hegde , Kubbara sait",
       movie_trailer:"deva_trailer.mp4"
    },
    {
        movie_img: "azaad.avif",
        movie_name: "Azaad",
        movie_type: "Adventure",
        movie_lang: "Hindi",
        movie_price: "200",
        movie_desc: "In 1920s India, a young stable boy bonds with a spirited horse. Amid rebellion and tyranny, his quest to ride the majestic animal becomes a journey of courage, awakening him to the country's fight for freedom.",
        movie_release_date:"Released Date:: 17 January 2025",
         movie_director:  " Director:: Abhishek Kapoor",
        movie_cast: " Cast:: Rasha Thadani , Ajay Devgan , Dia pently,mohit malik",
        movie_trailer:"azzad_trailer.mp4"
    },
    {
        movie_img: "interstellar.avif",
        movie_name: "Interstellar",
        movie_type: "Sci-fi/Adventure",
        movie_lang: "English",
        movie_price: "200",
        movie_desc: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
        movie_release_date:"Released Date:: 7 November 2014",
         movie_director:  " Director::Christopher Nolan",
        movie_cast: " Cast:: Matthew McConaughey ,Jessica Chastain , Anne Hathaway,Timothée Chalamet",
        movie_trailer:"interstellar_trailer.mp4"
    },
    {
        movie_img: "vidaamuyarchi.avif",
        movie_name: "vidaamuyarchi",
        movie_type: "Thriller/Action",
        movie_lang: "Tamil,Hindi",
        movie_price: "200",
        movie_desc: "A married couple's trip takes an unsettling turn when the wife goes missing, prompting the husband's frantic search while an unknown villain creates obstacles.",
        movie_release_date:"Released Date:: 6 February 2025",
         movie_director:  " Director:: Magizh Thirumeni",
        movie_cast: " Cast:: Harshvardhan Rane , Mawra Hocane , Manish Chaudhari,Anurag Sinha,",
        movie_trailer:"vidaa_trailer.mp4"
    },

    {
        movie_img: "badass.avif",
        movie_name: "Badass Ravi Kumar",
        movie_type: "Musical/Action",
        movie_lang: "Hindi",
        movie_price: "200",
        movie_desc: "Badass Ravi Kumar is a 2025 Indian Hindi-language musical action comedy film directed by Keith Gomes and produced by Himesh Reshammiya Melodies. It is a spin off film of the 2014 film The Xpose, with Himesh Reshammiya reprising his role as Ravi Kumar.",
        movie_release_date:"Released Date:: 7 February 2025",
         movie_director:  " Director::Keith Gomes",
        movie_cast: " Cast:: Sonia Kapur , Himesh Resmaniya ,prabhu deva",
        movie_trailer:"badass_trailer.mp4"
    },
    {
        movie_img: "loveyapa.avif",
        movie_name: "Loveyapa",
        movie_type: "Romance/Comedy",
        movie_lang: "Hindi",
        movie_price: "200",
        movie_desc: "A couple swaps mobile phones, leading to shocking revelations about their relationship. As they uncover hidden secrets, their trust crumbles and chaos ensues.",
        movie_release_date:"Released Date:: 7 February 2025",
        movie_director:  " Director::  Advait Chandan",
        movie_cast: " Cast:: Junaid khan , Khusi kapoor , Ashutosh Rana,Yogi babu,",
       movie_trailer:"loveyapa_trailer.mp4"
    },
    {
        movie_img: "thandel.avif",
        movie_name: "Thandel",
        movie_type: "Thriller/Drama",
        movie_lang: "Hindi,Tamil,Telugu",
        movie_price: "200",
        movie_desc: "The film is based on the true events of fishermen from Srikakulam who endure a harrowing journey after drifting into Pakistani waters while ...",
        movie_release_date:"Released Date:: 7 February 2025",
         movie_director:  " Director:: Chandoo Mondeti",
        movie_cast: " Cast:: Naga Chaitanya ,Sai Pallavi , Prakash Belawadi",
        movie_trailer:"thandel_trailer.mp4"
    },
 
   
    {
        movie_img: "letsmeet.avif",
        movie_name: "Lets Meet",
        movie_type: "Romance",
        movie_lang: "Hindi",
        movie_price: "200",
        movie_desc: "Romance.Let's Meet explores the chance connection between Nikhil, a TV actor, and Priya, a finance professional. During a forced break from work her friend coaxes her to get on to a social network... Read all. During a forced break from work her friend coaxes her to get on to a social networking site.",
        movie_release_date:"Released Date:: 7 February 2025",
         movie_director:  " Director:: Ricky Sandhu",
        movie_cast: " Cast:: Suman Rana ,Tanuj Virwani ,Sohit Soni,",
        // movie_trailer:"sanam_trailer.mp4"
    },
    {
        movie_img: "barelikibarfi.avif",
        movie_name: "Bareilly ki Barfi",
        movie_type: " Romance/Comedy",
        movie_lang: "Hindi",
        movie_price: "200",
        movie_desc: "After reading a book that changes her life, Bitti is intent on meeting the author. Her quest takes her to a publisher, Chirag, who leads her to believe that the writer is Pritam Vidrohi.",
        movie_release_date:"Released Date:: 18 August 2017 ",
         movie_director:  " Director::Ashwiny Iyer Tiwari",
        movie_cast: " Cast:: Rajkummar Rao , Kriti Sanon ,Ayushmann Khurrana,Pankaj Tripathi,",
        movie_trailer:"barfi_trailer.mp4"
    }
];

const movie_container = document.querySelector(".book_movies2");
if (movie_container) {
    movie_info.forEach((mov_detail, index) => {
        const div = document.createElement("div");
        div.classList.add("mov_detail");
        div.innerHTML = `
      <img src="${mov_detail.movie_img}" alt="${mov_detail.movie_name}">
        <h3>${mov_detail.movie_name}</h3>
        <p> ${mov_detail.movie_type}</p>
       
        <p>Language: ${mov_detail.movie_lang}</p>
    
    `;
        div.addEventListener("click", () => {
            localStorage.setItem("selectedItem", JSON.stringify(mov_detail));
            window.location.href = "details.html";

    
        });
        document.addEventListener("DOMContentLoaded", () => {
            movie_container.appendChild(div);
    })
       
   
   
    }

    );

}