import"./header.css";
import youtubeIcon from"./images/youtubeIcon.jpg";
import instagramIcon from"./images/instagramIcon.jpg";
import facebookIcon from"./images/facebookIcon.jpg";
import tiktokIcon from"./images/tiktokIcon.jpg";


function Header(){
    return(
        <header id="headerDiv">
            <h1 id="headerTxt">The Shepherds</h1>
            <p>"A Shepherd's duty is to push humanity towards a better future."  ~Jacob Larcabal</p>
            <p>Get to know us:</p>
            <div id="socialDiv">
                <a href="https://www.youtube.com/@choicecoltstarting">
                    <figure>
                        <img className="socialIcons" src={youtubeIcon} alt="YouTube Channel Link" />
                    </figure>
                </a>
                <a href="https://www.instagram.com/choicecoltstarting/?next=%2F">
                    <figure>
                        <img className="socialIcons" src={instagramIcon} alt="instagram page link" />
                    </figure>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100091308695400&sk=about">
                    <figure>
                        <img className="socialIcons" src={facebookIcon} alt="facebook page link" />
                    </figure>
                </a>
                <a href="https://www.tiktok.com/@choicecoltstarting">
                    <figure>
                        <img className="socialIcons" src={tiktokIcon} alt="tiktok page link" />
                    </figure>
                </a>    
            </div>
            <p>Step in the arena:</p>
            <p>Address: Little Elm, Texas</p>
            <p>Phone number: (714)296-4155 or (801)735-4675</p>
            <p>Email: shepherdsoftheworld@gmail.com</p>
        </header>
    );
};

export {Header};