import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export default function ContactJunior() {
    return (
        <div className=" mt-5 ">
            <div className="w-75  py-2  container-fluid rounded countdownContainer">
                <div className='row align-items-center'>
                    <div className='col text-center'>
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className='col text-center'>
                        <p>Andre Barth, Christian Koschik</p>
                    </div>
                    <div className='col-lg-4 d-none d-lg-block'>
                        <p>+49 152 21096461</p>
                    </div>
                </div>
                <div className='row align-items-center'>
                    <div className='col text-center '>
                        <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div className='col'>
                        <p>Am Mittelweg 5</p>
                    </div>
                    <div className='col-lg-4 d-none d-lg-block'>
                        <p>Kretzschau</p>
                    </div>
                </div>
                <div className='row align-items-center'>
                    <div className='col text-center'>
                        <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div className='col align-items-center'>
                        <p>Mittwoch 16.00 - 17.00</p>
                    </div>
                    <div className='col-lg-4 d-none d-lg-block'>
                        <p>Spiel Sonntag</p>
                    </div>
                </div>


            </div>

        </div>
    )
}
