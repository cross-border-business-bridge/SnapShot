import React, {useEffect, useContext} from "react";
import PhotoContext from "../context/Context";
import Gallery from "./Gallery";
import Loader from "./Loader";

const ContainerNew = ({searchTerm}) => {
    const {images, loading, runSearch} = useContext(PhotoContext);
    useEffect(() => {
        runSearch(searchTerm);
        // eslint-disable-next-line
    }, [searchTerm]);

    return (
        <div className="photo-container">
            {loading ? <Loader/> : <Gallery data={images}/>}
        </div>
    )

    // return (
    //     <PhotoContext.Consumer>
    //         {
    //             (context) => {
    //                 console.log(this)
    //                 // this.context = context
    //
    //                 return (
    //                     <div className="photo-container">
    //                         {context.loading ? <Loader/> : <Gallery data={context.images}/>}
    //                     </div>
    //                 )
    //             }
    //         }
    //     </PhotoContext.Consumer>
    // )
}

export default ContainerNew;
