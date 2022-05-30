import {
    Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { PHOTOS } from '../shared/photos'
import { useState } from 'react';
function Photo(props) {
    const [selectImg, setSelectImg] = useState(null)
    return (
        <div className="container">
            <div className="row">
                {

                    selectImg ? (

                        <div className="container d-flex justify-content-center">
                            <div className="row" style={{ width: 'fit-content ' }}>
                                <Card className="descbox">
                                    {selectImg.description}
                                </Card>
                            </div>
                        </div>

                    ) : null
                }
                {

                    PHOTOS.map(
                        photo => {
                            return (
                                <div className="col-3 photomargin">
                                    <Card onClick={() => setSelectImg(photo)}>
                                        <CardImg

                                            src={photo.img}

                                        />

                                    </Card>
                                </div>

                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Photo;