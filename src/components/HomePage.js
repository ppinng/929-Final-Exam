import React from 'react';
import { Card, CardText, CardBody} from 'reactstrap';

function Home(props) {
    return (
        <React.Fragment>
            <div className='homebg'>
                <div className="container cardoverall">
                    <div className='row'>
                        <div className='d-flex justify-content-center align-item-center'>
                            <div className="col-12 col-md m-1">
                                <Card>
                                    <img
                                        alt="Featured"
                                        src="./assests/images/featured2.jpg"
                                        width="600px"
                                        height={600}

                                    />
                                    <CardBody className="text-center">
                                        <CardText>
                                            Minju from Korean brand called Izone.
                                            She is really cute though.
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-12 col-md m-1">
                                <Card>
                                    <img
                                        alt="Breaking"
                                        src="https://img.freepik.com/free-vector/breaking-news-with-silhouette-earth-map-studio-lights-editable-text_1284-59457.jpg?size=626&ext=jpg"
                                        width="700px"
                                        height={500}
                                    />
                                    <CardBody className="text-center">
                                        <CardText>
                                            Breaking news today. Thailand records 3,854 Covid-19 cases <br />and 26 deathes on Monday 30th May 2022
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;