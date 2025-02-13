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
   
    let f = document.querySelector("#dateshowTime")
    if (f) {
        f.innerHTML = format;
    }
           

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

// =================================================================================================

// update all recommended movies and events by js in homepage............

// 1. Recommended movies...........

const Recommended_movies = [
    {
        movie_img: "chhava.avif",
        movie_name: "Chhava",
        movie_type: "History",
        movie_lang: "Hindi,Tamil",
        movie_price: "200",
        movie_desc: "Chhaava is an upcoming Indian Hindi-language historical action film based on the life of Maratha king Sambhaji, played by Vicky Kaushal. It is an adaptation of the Marathi novel Chhava by Shivaji Sawant.",
        movie_release_date:"  February 14, 2025",
        movie_director:  " Director:: Laxman Utekar",
        movie_cast:" Cast:: Vicky Kaushal , Rashmika Mandanna , Akshaye Khanna,",
        movie_trailer:"chhava_trailer.mp4"

    },
    {
        movie_img: "captain.avif",
        movie_name: "Captain America: Brave New World",
        movie_type: "Action/Sci-fi",
        movie_lang: "Hindi,English,Tamil,Telugu",
        movie_price: "200",
        movie_desc:"Sam must uncover the reason behind an evil plot before the true mastermind has the world seeing red.",
        movie_release_date:" February 14, 2025 ",
         movie_director:  " Director:: Julius Onah",
        movie_cast: " Cast:: Anthony Mackie , Harrison Ford ,Danny Ramirez , Shira Haas, Israel,Sebastian Stan ",
        movie_trailer:"captain_trailer.mp4"
    },
    {
        movie_img: "narayan.avif",
        movie_name: "Narayana",
        movie_type: "Comedy,Drama,Family",
        movie_lang: "Telugu",
        movie_price: "200",
        movie_desc: "A middle-class family in financial distress agrees to an illegal deal and embarks on a hilarious journey to overcome their problems, discovering the true meaning of family in the process.",
        movie_release_date:"30 Jun, 2023",
         movie_director:  " Director:: Dasari Narayana Rao",
        movie_cast: " Cast:: Arati Podi , Sudhakar Komakula,Ali Reza",
        movie_trailer:"narayana_trailer.mp4"
    },
    {
        movie_img: "emergency.avif",
        movie_name: "Emergency",
        movie_type: "Drama",
        movie_lang: "Hindi",
        movie_price: "200",
        movie_desc: "The incidents that take place under the leadership of Mrs. Indira Gandhi, one of the most powerful women in Indian history.",
        movie_release_date:"31 January 2024 ",
        movie_director:  " Director:: Kangana Ranaut",
        movie_cast: " Cast::Kangana Ranaut, Anupam Kher , Mahima Chaudhry,Shreyas Talpade",
       movie_trailer:"emergency_trailer.mp4"
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
        movie_cast: " Cast:: Ajith Kumar ,Trisha Krishnan ,Arjun Das,Arun Vijay",
        movie_trailer:"vidaa_trailer.mp4"
    },

 
];

const Rec_Movies = document.querySelectorAll(".Movies");

    if (Rec_Movies[0]) {
        Recommended_movies.forEach((mov_detail, index) => {
            const div = document.createElement("div");
            div.classList.add("mov");
            div.innerHTML = `
      <img src="${mov_detail.movie_img}" alt="${mov_detail.movie_name}">
      <h4>${mov_detail.movie_release_date}</h4>
        <h3>${mov_detail.movie_name}</h3>
        <p> ${mov_detail.movie_type}</p>       
        <p>${mov_detail.movie_lang}</p>
         <button class="btn">Book Now </button>
    
    `;
            div.addEventListener("click", () => {
                localStorage.setItem("selectedItem", JSON.stringify(mov_detail));
                window.location.href = "details.html";

    
            });
            document.addEventListener("DOMContentLoaded", () => {
                Rec_Movies[0].appendChild(div);
            })
        }

        );

}
    
// premiere movies

const premiere = [
    {
        movie_img: "sniper.avif",
        movie_name: "Snipper: The last stand",
        movie_type: "Action",
        movie_lang: "English",
        movie_price: "200",
        movie_desc: "On a mission to stop an arms dealer from unleashing a deadly weapon, ace sniper Brandon Beckett and Agent Zero lead a group of elite soldiers against an unrelenting militia in Costa Verde.",
        movie_release_date:"  january 14, 2025",
        movie_director:  " Director:: Danishka Esterhazy",
        movie_cast:" Cast::Arnold Vosloo , Sharon Taylor , Chad Michael Collins,",
        movie_trailer:"sniper_trailer.mp4"

    },
    {
        movie_img: "butcher.avif",
        movie_name: "Butcher crossing",
        movie_type: "Horror/Suspense",
        movie_lang: "English",
        movie_price: "200",
        movie_desc:"Anyone who crosses their path is dead meat for a family of sadistic butchers in the backcountry.",
        movie_release_date:" 15 October 2020 ",
         movie_director:  " Director:: Adrian Langley",
        movie_cast: " Cast:: Julie Mainville , Michael Swatton ,Simon Phillips , Blake Canning ",
        movie_trailer:"butcher_trailer.mp4"
    },
    {
        movie_img: "lord.avif",
        movie_name: "Lord of the rings",
        movie_type: "Fantasy/Adventure",
        movie_lang: "Mandarin",
        movie_price: "200",
        movie_desc: "An orphan gets caught in a mess among the most powerful in the world of magic when he becomes the disciple of a sorcerer.",
        movie_release_date:"30 Jun, 2016",
         movie_director:  " Director::Guo Jingming",
        movie_cast: " Cast:: Guo Jingming , Fan Bingbing,Cheney Chen",
        movie_trailer:"lord_trailer.mp4"
    },
    {
        movie_img: "lord2.avif",
        movie_name: "L.O.R.D: Legend of Ravaging Dynasties 2",
        movie_type: " Action/Adventure",
        movie_lang: "English",
        movie_price: "200",
        movie_desc: "L.O.R.D.: Legend of Ravaging Dynasties 2 is a 2020 Chinese animated motion capture action fantasy adventure film written and directed by Guo Jingming, the sequel to the first L.O.R.D: Legend of Ravaging Dynasties film.",
        movie_release_date:"4 December 2020",
        movie_director:  " Director::Guo Jingming",
        movie_cast: " Cast:: Guo Jingming , Fan Bingbing,Cheney Chen",
       movie_trailer:"lord_trailer.mp4"
    },
    {
        movie_img: "jurassic.avif",
        movie_name: "jurassic world",
        movie_type: "Action/Sci-fi",
        movie_lang: "English",
        movie_price: "200",
        movie_desc: "A theme park showcasing genetically-engineered dinosaurs turns into a nightmare for its tourists when one of the dinosaurs escapes its enclosure. An ex-military animal expert steps up to save the day.",
        movie_release_date:"10 June 2015 ",
         movie_director:  " Director:: Colin Trevorrow",
         movie_cast: " Cast:: Bryce Dallas Howard ,Chris Pratt,Irrfan Khan",
        movie_trailer:"jurassic_trailer.mp4"
    },
    {
        movie_img: "venom.avif",
        movie_name: "Venom: The Last Dance",
        movie_type: "Action/Sci-fi",
        movie_lang: "English",
        movie_price: "200",
        movie_desc: "Eddie Brock and Venom must make a devastating decision as they're pursued by a mysterious military man and alien monsters from Venom's home world..",
        movie_release_date:"25 October 2024",
         movie_director:  " Director::Kelly Marcel",
        movie_cast: " Cast:: Tom Hardy ,Juno Temple , Rhys Ifans,Clark Backo",
        movie_trailer:"venom_trailer.mp4"
    }
   
 
];

const prem_movie = document.querySelectorAll(".Movies");

    if (prem_movie[2]) {
        premiere.forEach((mov_detail, index) => {
            const div = document.createElement("div");
            div.classList.add("mov");
            div.innerHTML = `
      <img src="${mov_detail.movie_img}" alt="${mov_detail.movie_name}">
      <h4>${mov_detail.movie_release_date}</h4>
        <h3>${mov_detail.movie_name}</h3>
        <p> ${mov_detail.movie_type}</p>       
         <p>${mov_detail.movie_lang}</p>
         <button class="btn">Book Now </button>
    
    `;
            div.addEventListener("click", () => {
                localStorage.setItem("selectedItem", JSON.stringify(mov_detail));
                window.location.href = "details.html";

    
            });
            document.addEventListener("DOMContentLoaded", () => {
                prem_movie[2].appendChild(div);
            })
        }

        );

}

// music studio

const music = [
    {
        movie_img: "nikhil1.avif",
        movie_name: "Nikhil Paul George",
        movie_type: "Bollywood",
        movie_lang: "Hindi, English",
        movie_price: "1999",
        movie_desc: "Enjoy an amazing pre valentine Eve with your loved ones as Barfi songs like main kya karun,Itni si hansi fame singer Nikhil Paul George takes the stage for the first time in Bhopal n make your experience a memorable one!!",
        movie_release_date:"  sat 18 feb,3.00pm onwards",
        // movie_director:  " Director:: Laxman Utekar",
        // movie_cast:" Cast:: Vicky Kaushal , Rashmika Mandanna , Akshaye Khanna,",
        // movie_trailer: "chhava_trailer.mp4",
        location:"Location:: Raasta: Bhopal club Gigs"

    },
    {
        movie_img: "lolsing.avif",
        movie_name: "Lollapalooza India 2025",
        movie_type: "EDM, Hip Hop, Pop, Rock",
        movie_lang: "Hindi,English",
        movie_price: "2500",
        movie_desc:"Mumbai, are you ready? Lollapalooza India is all geared up for its third edition in the city of dreams!",
        movie_release_date:"Sat 8 march,2.00pm onwards ",
        //  movie_director:  " Director:: Julius Onah",
        // movie_cast: " Cast:: Anthony Mackie , Harrison Ford ,Danny Ramirez , Shira Haas, Israel,Sebastian Stan ",
        // movie_trailer: "captain_trailer.mp4",
        location:"Location:: mahalaxmi race courrse: mumbai"
    },
    {
        movie_img: "sunburn.avif",
        movie_name: "Sunburn Elite Card 2025",
        movie_type: "EDM | English",
        movie_lang: "English",
        movie_price: "4999",
        movie_desc: "The Annual Membership of Asia’s Biggest Music Festival is back with yet another edition!",
        movie_release_date:"Thu 1 March-sun 4 march",
        //  movie_director:  " Director:: Dasari Narayana Rao",
        // movie_cast: " Cast:: Arati Podi , Sudhakar Komakula,Ali Reza",
        // movie_trailer: "narayana_trailer.mp4",
        location:"Location:: Sunburn Holi ft. Timmy Trumpet - Kolkata"
    },
    {
        movie_img: "altaf.avif",
        movie_name: "Altaf Raja",
        movie_type: "Bollywood, Classical, Ghazal, Sufi ",
        movie_lang: "Hindi,English",
        movie_price: "3000",
        movie_desc: "Don’t miss Altaf Raja live in concert on February 9, 2025, at 8 PM! Experience his soulful voice and iconic hits like | Tum To Thehre Pardesi | in an unforgettable evening of music and nostalgia.",
        movie_release_date:"sun 9 Feb",
        // movie_director:  " Director:: Kangana Ranaut",
        // movie_cast: " Cast::Kangana Ranaut, Anupam Kher , Mahima Chaudhry,Shreyas Talpade",
        // movie_trailer: "emergency_trailer.mp4",
       location:"Location:: Land of liberty : Bhopal"
    },
    {
        movie_img: "edsheeran.avif",
        movie_name: "Ed Sheeran +-*/= 2025 India Tour",
        movie_type: "Indie, International, Pop, Rock, Romantic ",
        movie_lang: "English",
        movie_price: "4500",
        movie_desc: "Ed Sheeran: +-=÷x Tour has broken records across the world and shows no signs of slowing down. Having played a sold-out show in Mumbai in March 2024, the British hitmaker is bringing the tour back to India once again – with a multi-city leg of the Tour – making sure that he reaches audiences",
        movie_release_date:"Thu 30 jan at 4.00pm",
        //  movie_director:  " Director:: Abhishek Kapoor",
        // movie_cast: " Cast:: Rasha Thadani , Ajay Devgan , Dia pently,mohit malik",
        // movie_trailer: "azzad_trailer.mp4",
        location:"Location:: Lesiure venue ground , Gurgaon"
    }

];

const music_std = document.querySelectorAll(".Movies");

    if (music_std[3]) {
        music.forEach((mov_detail, index) => {
            const div = document.createElement("div");
            div.classList.add("mov");
            div.innerHTML = `
      <img src="${mov_detail.movie_img}" alt="${mov_detail.movie_name}">
      <h4>${mov_detail.movie_release_date}</h4>
        <h3>${mov_detail.movie_name}</h3>
        <p> ${mov_detail.movie_type}</p>       
        <p>${mov_detail.movie_lang}</p>
         <button class="btn">Book Now </button>
    
    `;
            div.addEventListener("click", () => {
                localStorage.setItem("selectedItem", JSON.stringify(mov_detail));
                window.location.href = "details.html";

    
            });
            document.addEventListener("DOMContentLoaded", () => {
                music_std[3].appendChild(div);
            })
        }

        );

}

// outdoor events

const outdoor_event = [
    {
        movie_img: "bassi.avif",
        eventer_name:"Anubhav singh Bassi",
        movie_name: "Kisi ko Batana mat",
        movie_type: "Comedy",
        movie_lang: "Hindi",
        movie_price: "999",
        movie_desc: "After the great success of his previous show Bas kar bassi, Anubhav Singh Bassi is coming back to perform live on stage. This time, he will bring a whole new set of funny stories and jokes that will keep you entertained. Get ready to enjoy an exciting and hilarious performance that will make yo",
        movie_release_date:" sun 9 March 2025",
        // movie_director:  " Director:: Laxman Utekar",
        // movie_cast:" Cast:: Vicky Kaushal , Rashmika Mandanna , Akshaye Khanna,",
        // movie_trailer: "chhava_trailer.mp4",
        location:"Location:: Ravindra Bhavan auditorium Bhopal"

    },
    {
        movie_img: "sahil.avif",
        eventer_name:"Manhar seth",
        movie_name: "MAIN SHAYAR TOH NAHI",
        movie_type: "Comedy",
        movie_lang: "Hindi,English",
        movie_price: "499",
        movie_desc:"Manhar Seth's pomedy set “Main Shayar Toh Nahi” along with some crowdwork",
        movie_release_date:"Sun 8 march,onwards ",
        //  movie_director:  " Director:: Julius Onah",
        // movie_cast: " Cast:: Anthony Mackie , Harrison Ford ,Danny Ramirez , Shira Haas, Israel,Sebastian Stan ",
        // movie_trailer:"captain_trailer.mp4"
         location:" Location:: Ravindra Bhavan auditorium Bhopal"
    },
    {
        movie_img: "harshGujral.jpeg",
        eventer_name:"Harsh Gujral",
        movie_name: "Jo Bolta Hai Wohi Hota",
        movie_type: "Comedy",
        movie_lang: "Hindi,English",
        movie_price: "799",
        movie_desc: "It takes exemplary courage to sit in the first two rows of a Harsh Gujral`s show because he will get you with his highly witty yet charming style.",
        movie_release_date:"30 Jun, 2025",
        //  movie_director:  " Director:: Dasari Narayana Rao",
        // movie_cast: " Cast:: Arati Podi , Sudhakar Komakula,Ali Reza",
        // movie_trailer: "narayana_trailer.mp4",
        location:"Location:: Multiple venues"
    },
    {
        movie_img: "single.avif",
        // eventer_name:"Harsh Gujral",
        movie_name: "Small world single meetup",
        movie_type: "Dating, Self Improvement",
        movie_lang: "Bengali, English, Hindi, Kannada, Malayalam, Tamil, Telugu",
        movie_price: "99",
        movie_desc: "Welcome to the `Single`s Meetup` a unique meetup designed specifically for singles who are eager to connect, share, and celebrate the solo journey. In the hustle of everyday life, finding a space to openly discuss the experiences, challenges, and triumphs of being single is rare. That`s where",
        movie_release_date:"Sun 2 Feb",
        // movie_director:  " Director:: Kangana Ranaut",
        // movie_cast: " Cast::Kangana Ranaut, Anupam Kher , Mahima Chaudhry,Shreyas Talpade",
        // movie_trailer: "emergency_trailer.mp4",
       location:"Location:: latte Love Bhopal"
    },
    {
        movie_img: "halki.avif",
        eventer_name:"Vikash kush sharma",
        movie_name: "Halki Halki fati?",
        movie_type: "Comedy",
        movie_lang: "Hindi,English",
        movie_price: "499", 
        movie_desc: "The comedic maestro, the crowd whisperer, the one and only Vikas Kush Sharma! This guy`s crowd work and the most viral modern shayar of Instagram is so brilliant, it`s like he`s got a PhD in decoding laughter! He`s the master of turning awkward situations into uproarious punchlines, especially when it comes to relationships.",
        movie_release_date:"sat 25 Feb 2025",
        //  movie_director:  " Director:: Abhishek Kapoor",
        // movie_cast: " Cast:: Rasha Thadani , Ajay Devgan , Dia pently,mohit malik",
        // movie_trailer: "azzad_trailer.mp4",
        location:"Location:: Khayal kalapremiyon ka : Bhopal"
    }

 
];

const outdoor = document.querySelectorAll(".Movies");

    if (outdoor[4]) {
        outdoor_event.forEach((mov_detail, index) => {
            const div = document.createElement("div");
            div.classList.add("mov");
            div.innerHTML = `
      <img src="${mov_detail.movie_img}" alt="${mov_detail.movie_name}">
      <h4>${mov_detail.movie_release_date}</h4>
        <h3>${mov_detail.movie_name}</h3>
        <p> ${mov_detail.movie_type}</p>       
        <p>${mov_detail.movie_lang}</p>
         <button class="btn">Book Now </button>
    
    `;
            div.addEventListener("click", () => {
                localStorage.setItem("selectedItem", JSON.stringify(mov_detail));
                window.location.href = "details.html";

    
            });
            document.addEventListener("DOMContentLoaded", () => {
                outdoor[4].appendChild(div);
            })
        }

        );

}

// ======================================================================================================================
// form validation of booking_ticket page

document.addEventListener("DOMContentLoaded", () => {
    

    document.querySelector("#UserName").addEventListener("focus", () => {
        document.querySelector("#UserName").style.backgroundColor = "lightblue";
    })
    document.querySelector("#UserName").addEventListener("blur", () => {
        document.querySelector("#UserName").style.backgroundColor = "";
    })

    document.querySelector("#UserEmail").addEventListener("focus", () => {
        document.querySelector("#UserEmail").style.backgroundColor = "lightblue";
    })
    document.querySelector("#UserEmail").addEventListener("blur", () => {
        document.querySelector("#UserEmail").style.backgroundColor = "";
    })

    document.querySelector("#UserContact").addEventListener("focus", () => {
        document.querySelector("#UserContact").style.backgroundColor = "lightblue";
    })
    document.querySelector("#UserContact").addEventListener("blur", () => {
        document.querySelector("#UserContact").style.backgroundColor = "";
    })

    document.querySelector("#UserAge").addEventListener("focus", () => {
        document.querySelector("#UserAge").style.backgroundColor = "lightblue";
    })
    document.querySelector("#UserAge").addEventListener("blur", () => {
        document.querySelector("#UserAge").style.backgroundColor = "";
    })

})

function fetch_data() {
    // event.preventDefault();

    let UserName = document.querySelector("#UserName").value
    let UserEmail = document.querySelector("#UserEmail").value;
    const feedbackElement = document.getElementById('emailFeedback');
    let UserContact = document.querySelector("#UserContact").value;
    let UserAge = document.querySelector("#UserAge").value;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(UserEmail)) {
        feedbackElement.textContent = ''; // Clear feedback
        feedbackElement.style.color = 'green';
        feedbackElement.textContent = '✓ Valid email format';
        // Proceed with form submission or further processing
    } else {
        feedbackElement.style.color = 'red';
        feedbackElement.textContent = 'Please enter a valid email address.';
        document.querySelector("#UserEmail").focus()
        return false;
    }

    
       

        
        if (UserName == "" || UserEmail == "" || UserContact == "" || UserAge == "") {
            alert("All fields are mandoratory...");
            return false;
        }else if (UserContact.length < 10 || UserContact.length > 10) {
            alert("Contact length must be of 10 digit..")
            document.querySelector("#UserContact").focus()
            return false;

        } else if (isNaN(UserContact)) {
            alert("Only numbers are allowed ")
            document.querySelector("#UserContact").focus()
            return false;    
        
        }  else if (UserAge < 5) {
            alert("Age must be greater than 5")
            document.querySelector("#UserAge").focus()
            
            return false;
        
        }
        else {
            // stored in a json database.........
             
            let movie_information=JSON.parse(localStorage.getItem("selectedItem"))

            const user_book_info = {
                user_name: document.querySelector("#UserName").value,
                user_email: document.querySelector("#UserEmail").value,
                user_contact: document.querySelector("#UserContact").value,
                user_age: document.querySelector("#UserAge").value,
                user_ticket_price: selected_price,
                user_ticket_type: selected_type,
                user_total_quantity: quantity,
                user_total_pay: total_pay,
                movie_name: movie_information.movie_name,
                movie_img:movie_information.movie_img
                
                   
            }
            localStorage.setItem("user_book_infor", JSON.stringify(user_book_info));

            // stored all user information  in json database

            fetch("http://localhost:3000/ user_booking",{
                method: "POST",
                Headers: {                              //headers -> tell the user what type of data we are sending and trying to insert into json
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user_book_info)      // body will we pass as a key
                    
                
            }).then(r=>alert("Payment Successfull.........."))

            // alert("Payment successfull ...........")
           
    }
    
    }
    
    

    
//  ============================================================================================================================
// Booking_online_ticket


let selected_price = 1;
let selected_type;
let quantity;
let total_pay;

function selected_ticket(ticket_type, price) {
    selected_price = price;
    selected_type = ticket_type;


updateTotal();

}
function updateTotal() {
   quantity= document.querySelector("#quantity").value
  total_pay = selected_price * quantity;

 document.querySelector("#total").innerText = total_pay;
 }



// ==============================================================================================================




function togglepopup() {
    var popup = document.getElementById("popup");
    popup.style.display = (popup.style.display === "block") ? "none" : "block";

    window.onclick = function (event) {
        if (!event.target.closest('.side_page_icon')) {
            document.getElementById("popup").style.display = "none";
        }
    }
}


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
