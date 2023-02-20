import React from 'react';
import { Container } from 'react-bootstrap';

export default class About extends React.Component {


    render() {
        return (
            <Container fluid className='w-75 h-100'>
                <h1 className='text-center display-1'>About ADSB One</h1>
                <p className='lead'><b>Mission:</b> To collect, store, and distribute unfiltered Mode S and similar publicly available data related to aircraft locations and operations around the world</p>
                <p className='lead'><b>Purpose and Activities:</b></p>
                <ul className='lead'>
                    <li>Create a sustainable organization that can ensure the continued availability of information by ensuring that the value created by a community network accrues for the benefit of the community as a whole.</li>
                    <li>Build awareness of aircraft operations, procedures, and safety.</li>
                    <li>Collect, receive, store, organize, and share all data and information collected by the network (except to the extent required by final, non-appealable order of a government authority with jurisdiction over the organization). In short - this site discloses nothing if not required.</li>
                    <li>Gather information related to uses of public resources such as publicly owned airports and government aircraft.</li>
                    <li>Provide a sustainable source of unfiltered data to academics, researchers, journalists, and the general public to further the activities of an informed populace and the free press.</li>
                    <li>Create means to monitor threats to human rights and the use of aircraft to intrude on individual and community rights to privacy and dignity.</li>
                    <li>Promote political accountability by providing a baseline for evaluating the effect of restrictions on use of government data or programs to obfuscate airframe identity.</li>
                    <li>Track data to measure the impact of public and private aviation operations on communities, human health and safety, and the environment.</li>
                    <li>Support and promote the development of hardware, software and promotion of other organizations conducting activities consistent with the mission of this organization.</li>
                    <li>Collect, receive, store, organize, and share other permanent data and information consistent with the mission of the organization.</li>
                    <li>Conduct such other activities and programs to promote safety, transparency and the responsible use of technology in the public interest in the transportation sector.</li>
                </ul>
            </Container>
        );
    }
}
