import React from 'react';
import { Card, CardImg, Button} from 'reactstrap';
import { PHOTOS } from '../shared/photos'
import { useState } from 'react';
import CommentForm from './CommentForm'


function Photo(props) {
    const [photos, setPhotos] = useState(PHOTOS)
    const [selectImg, setSelectImg] = useState(null)

    const handleSubmit = (data) => {
        let currentImgIndex = photos.findIndex(p => p.id == selectImg.id)
        let photoslist = [...photos]
        photoslist[currentImgIndex].comment.push(data)
        setPhotos(photoslist)
        
    }
    const handleLike = () => {
        let currentImgIndex = photos.findIndex(p => p.id == selectImg.id)
        let photoslist = [...photos]
        photoslist[currentImgIndex].like += 1
        setPhotos(photoslist)
    }
    return (
        <div className="container">
            <div className="row">
                {

                    photos.map(
                        photo => {
                            return (
                                <div className="col-3 photomargin">
                                    <Card onClick={() => setSelectImg(photo)}>
                                        <CardImg

                                            src={photo.img}

                                        />
                                        {
                                            photo.comment.map(comment => {
                                                return (
                                                    <div>
                                                        <b>
                                                        {
                                                            comment.name
                                                        }</b>:
                                                        {
                                                            comment.comment
                                                        } Rating: {
                                                            comment.rating
                                                        }
                                                    </div>
                                                )
                                            })
                                        }

                                    </Card>
                                </div>

                            )
                        }
                    )
                }
                {
                    selectImg ? (

                        <div className="container d-flex justify-content-center">
                            <div className="row" style={{ width: 'fit-content ' }}>
                                
                                <Card className="descbox">
                                    <div className='descmargin'>
                                    <b>{selectImg.description}</b> Like:{selectImg.like}
                                    <br/><Button onClick={handleLike}>
                                       Like 
                                    </Button>
                                    </div>
                                    <CommentForm onSubmit={handleSubmit} />
                                </Card>
                            </div>
                        </div>

                    ) : null
                }
            </div>
        </div>
    )
}



export default Photo;