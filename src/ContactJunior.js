import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export default function ContactJunior() {
    return (
        <div className=" mt-5 ">
            <div className="w-75  py-3  container-fluid rounded countdownContainer">
                <div className='d-flex align-items-center mb-2'>
                    <div className='col text-center'>
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className='col text-center '>
                        <p className='mb-0'>Andre Barth, Christian Koschik</p>
                    </div>
                    <div className='col-lg-4 d-none d-lg-block text-center'>
                        <p className='mb-0'>+49 152 21096461</p>
                    </div>
                </div>
                <div className='d-flex align-items-center mb-2'>
                    <div className='col text-center '>
                        <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div className='col text-center'>
                        <p className='mb-0'>Am Mittelweg 5</p>
                    </div>
                    <div className='col-lg-4 d-none d-lg-block text-center'>
                        <p className='mb-0'>Kretzschau</p>
                    </div>
                </div>
                <div className='d-flex align-items-center mb-2'>
                    <div className='col text-center'>
                        <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div className='col text-center'>
                        <p className='mb-0'>Mittwoch 16.00 - 17.00</p>
                    </div>
                    <div className='col-lg-4 d-none d-lg-block text-center'>
                        <p className='mb-0'>Spiel Sonntag</p>
                    </div>
                </div>


            </div>

        </div>
    )
}
