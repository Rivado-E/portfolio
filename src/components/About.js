import IMG from '../assets/luffy.jpg';

const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className="about-info">
                <p className="about-desc">
                    I am a computer science senior at the University of Maryland College Park. 
                    I am a big fan of anime and manga. My reading list fluctuates between Dostoevsky, Trevor Noah and Kentaro Muria.
                    I love coding. There is so little I know and so much to learn but all I can garantie is that I want to know.

                </p>
                <div className="about-img">
                    <div className="about-img-wrapper">
                        <img src={IMG} alt="Detective" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;