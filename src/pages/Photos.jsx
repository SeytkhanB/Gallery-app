
import React, {useContext} from "react"
import {getClass} from '../utils/index'
import Image from '../components/Image'

import {Context} from '../Context'

export default function Photos() {
    const {allPhotos} = useContext(Context)

    const image = allPhotos.map((img, index) => (
      <Image key={img.id} img={img} className={getClass(index)} />
    ))

    return (
        <main className="photos">
            {image}
        </main>
    )
}