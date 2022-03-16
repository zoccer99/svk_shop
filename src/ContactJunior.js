import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export default function ContactJunior(props) {
    return (
        <div className=" mt-5 ">
            <div className="  py-3  container-fluid rounded countdownContainer">
                <div className='d-flex align-items-center mb-2'>
                    <div className='col text-center'>
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className='col text-center '>
                        <p className='mb-0'>{props.verantwortliche}</p>
                    </div>
                    <div className='col-lg-4 d-none d-lg-block text-center'>
                        <p className='mb-0'>{props.telefon}</p>
                    </div>
                </div>
                <div className='d-flex align-items-center mb-2'>
                    <div className='col text-center '>
                        <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div className='col text-center'>
                        <p className='mb-0'>{props.anschrift}</p>
                    </div>
                    <div className='col-lg-4 d-none d-lg-block text-center'>
                        <p className='mb-0'>{props.ort}</p>
                    </div>
                </div>
                <div className='d-flex align-items-center mb-2'>
                    <div className='col text-center'>
                        <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div className='col text-center'>
                        <p className='mb-0'>{props.zeit}</p>
                    </div>
                    <div className=' d-none d-lg-block col-lg-4 text-center'>
                        <p className='mb-0'>{props.spieltag}</p>
                    </div>
                </div>


            </div>

        </div>
    )
}
