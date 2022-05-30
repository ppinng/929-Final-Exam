import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardLink } from 'reactstrap';

function About(props) {
    return (
        <div className="container aboutmargin">
            <div className="row d-flex justify-content-center">
                <div className='col-6 avatar'>
                    <Card>
                        <CardImg
                            alt="Featured"
                            src="./assests/images/avatar.png"
                            height={720}
                        />
                    </Card>
                </div>
                <div className="col-5 d-flex align-item-center motto flex-column">
                    <Card className="cardmargin">
                        <CardText>
                            “You get the best out of others when you give the best of yourself.”
                            <div className="d-flex justify-content-center">
                                – Harvey Firestone
                            </div>
                        </CardText>
                    </Card>
                    <Card className="cardmargin">
                        <CardText>
                            <b>Name:</b> Thiti Sae-lee <br/>
                            <b>Education:</b> <br/>
                            <li><b>University:</b> King mongkut's university of technology thonburi <br/></li>
                            <li><b>Faculty:</b> Computer Science, 1st year <br/></li>
                            <li><b>Graduated from high school:</b> Debsirin School <br/></li>
                            <li><b>Graduated from elementary school:</b> Phratamnaksuankulap School</li>
                        </CardText>
                    </Card>
                    <Card className="cardmargin">
                        <CardText>
                            <ul>
                            <b>Favorite subjects</b>
                            <li><b>English</b> becasue when I was a child I love to watch a cartoon named "Dora the explorer", and I also want to speak with foreigners.</li>
                            <li><b>Science</b> becasue it was fun to do the experiment but the hardest of this subjetc is to lecture the end of experiment like how was it, how the result which is really boring, but it still the second subject that I like.</li>
                            <li><b>P.E</b> because it is the only class that I worked out and played with friends.</li>
                            </ul>
                        </CardText>
                    </Card>
                    <Card className="cardmargin">
                        <CardText>
                            <b>Favorite movies</b>
                            <ul>
                            <li><b>Spider man: far from home</b> because I once wathced this movie with friends and it was 4D, and the feeling while  watching it was really good.</li>
                            <li><b>My neightbor Totoro</b> because I like the production of this studio. This studio is really good at making  movies, the visual art style is captivating, and unique art style, I like all of them</li>
                            <li><b>Cloudy with a chance of meatballs</b> because It is the first movie that I ever wacthed and enjoyed with it, it was a good movie and I still remember story of this movie, I like the happy ending of this movie.</li>
                            </ul>
                        </CardText>
                    </Card> 
                </div>
            </div>

        </div>
    );
}

export default About;
