import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import '../styles/Footer.css';


export default function Footer() {
  return (
    <MDBFooter className='bg-light text-center text-white' >
      <MDBContainer className='p-4 mt-2 '>
        <section className='mb-4'>
          {/* <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn> */}

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='https://twitter.com/CurlyYems96'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          {/* <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn> */}
          {/* <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn> */}

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='https://www.linkedin.com/in/yemny-feliz-4557701bb/'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/YemnyFeliz'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
          
          <div>
            © 2023 Copyright Yemny Feliz
          </div>

        </section>
      </MDBContainer>


      {/* <div className='text-center p-3' style={{ backgroundColor: '#95d5b2' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div> */}
    </MDBFooter>
  );
}