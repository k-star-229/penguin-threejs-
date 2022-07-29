import { connect } from 'react-redux';
import DState from '../components/three';

import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { ImMap2} from 'react-icons/im';
import { BsSpotify } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const Home = ({ isLoading, status }) => {

  const [loading, setLoading] = useState(true);
  const [state, setState] = useState();

  useEffect(() => {
    if(status >= 0) {
      setLoading(isLoading);
      setState(status);
    }
  });

  return (
    <div style={{ width: window.innerWidth-20, height: window.innerHeight * 6, margin: '0 auto' }}>
      <DState />
      {loading == false ? (state == 0 ? 
      <div className='fixed z-[100] w-full'>
        <div className='relative w-full h-screen mt-10'>
          <div className='flex justify-between mt-3 mx-24 items-center'>
            <img width={120} src='/logo.png' />
            <p className='text-white pointer text-3xl border border-white py-1 px-3'
              >&#9776;</p>
          </div>
        </div>
        <div className='relative w-full h-screen bottom-[180px]'>
          <div className='flex justify-between'>
            <div className='text-white mx-24'>
              <p className='title font-[1000] text-[20px]'>WE ARE D. STATE</p>
              <p className='detail text-[20px] tracking-[.1em]'>Define State is the crossroads of Reality and Artificial Intelligence. AI-powered </p>
              <p className='detail text-[20px] tracking-[.1em]'>apps, elastic tokenomics and real world assets provide value to our investors.</p>
            </div>
            <div className='text-white text-3xl mx-36 flex items-center'>
              <p className='border p-2 mx-1'><FaDiscord /></p>
              <p className='border p-2'><FaTwitter /></p>
            </div>
          </div>
        </div>
      </div>
      : '') : ''}
      {loading == false ? (state == 1 ?
      <div className='fixed z-[100]'>
        <div className='grid grid-cols-2 relative w-full h-screen items-center text-white'>
          <div className='ml-24 col-start-2'>
            <p className='title font-[1000] text-[80px] text-right'>CHATTER</p><br />
            <div className='detail text-[28px] text-right tracking-[.15em]'>
              <p>Chatter is our AI-powered social media </p>
              <p>aggregator tool. Get all the news, trends, </p>
              <p>and information you need in one place.</p>
            </div>
          </div>
        </div>
      </div>
      : '') : ''}
      {loading == false ? (state == 2 ?
      <div className='fixed z-[100] w-full h-screen'>
        <div className='flex justify-start relative w-full h-screen items-center text-white'>
          <div className='mx-24'>
            <p className='title font-[1000] text-[160px]'>10,000</p>
            <p className='title font-[1000] text-[48px] mb-5 tracking-wide'>HIGH-QUALITY AVATARS</p>
            <div className='detail mt-5 text-[28px] tracking-[.15em]'>
              <p>in a refreshing art-style. While most</p>
              <p>aggregator tool. Get all the news, trends, </p>
              <p>experimental game theory,  deflationary</p>
              <p> mechanisms and real-world utility behind</p>
              <p> the art to gamify the collection. Please</p>
              <p> see the Campus Map for more information.</p>
            </div>
          </div>
        </div>
      </div>
        : '') : ''}
      {loading == false ? (state == 3 ?
      <div className='fixed z-[100] w-full h-screen'>
        <div className='mt-20 relative grid grid-cols-2'>
          <div className='col-start-2 text-white'>
            <p className='title font-bold text-[70px]'>STUDENTS</p>
            <div className='detail mt-5 text-[28px] tracking-[.15em]'>
              <p>are separated into 4 class types - </p>
              <p> Athletes, Hippies, Punks and Devs. Which </p> 
              <p>one will you be in?</p>
            </div>
            <div className='grid grid-cols-3 gap-x-10 detail mt-5'>
              <div className='detail'>
                <div className=''>
                  <button className='bg-black rounded-md w-full h-full text-white text-[24px] py-10'><p className='title font-bold text-[80px]'>?</p>Atheletes</button>
                </div>
                <div className='mt-10'>
                  <button className='bg-black rounded-md w-full h-full text-white text-[24px] py-10'><p className='title font-bold text-[80px]'>?</p>Punks</button>
                </div>
              </div>
              <div>
                <div className='mt-10'>
                  <button className='bg-black rounded-md w-full h-full text-white text-[24px] py-10'><p className='title font-bold text-[80px]'>?</p>Hippies</button>
                </div>
                <div className='mt-10'>
                  <button className='bg-black rounded-md w-full h-full text-white text-[24px] py-10'><p className='title font-bold text-[80px]'>?</p>Devs</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      : '') : ''}
      {loading == false ? (state == 4 ?
      <div className='fixed z-[100] w-full h-screen'>
        <div className='relative items-center w-full h-screen grid grid-cols-2 '>
          <div className='ml-60 col-start-1 text-white '>
            <p className='title font-bold text-[70px]'>ALMA MATER</p>
            <div className='detail mt-5 text-[28px] tracking-[.15em]'>
              <p>Everything is changing,</p>
              <p>but why bother waiting?</p>
              <p>The world is yours for the taking,</p>
              <p>and you' ll be the one creating.</p>
              <p>Your choices decide your fate,</p>
              <p>so be careful which ones you make.</p>
              <p>Welcome to Define State,</p>
              <p>I hope you enjoy your stay.</p>
            </div>
          </div>
        </div>
      </div>
      : '') : ''}
      {loading == false ? (state == 5 ?
      <div className='fixed bg-black z-[100] w-full h-screen'>
        <div className='relative w-full h-screen text-white'>
          <div className='mt-40 flex justify-center'>
            <p className='title font-[800] text-[200px]'>SOON</p>
          </div>
        </div>
        <div className='relative w-full h-screen bottom-[320px]'>
          <div className='flex justify-center text-white text-3xl gap-2'>
            <p className='border p-2'><FaDiscord /></p>
            <p className='border p-2'><FaTwitter /></p>
            <p className='border p-2'><BsSpotify /></p>
            <p className='border p-2'><ImMap2 /></p>
          </div>
          <div className='flex justify-center mt-5'>
            <div className='detail text-slate-500 mx-24 text-center'>
              <p className='text-[20px]'>Define State is a registered trademark. All Rights Reserved. All logos are registered trademarks of their</p>
              <p className='text-[20px]'> respective owners. All contents of this document, unless otherwise credited, are copyright ©️ 2022 Define State. </p>
            </div>
          </div>
        </div>
      </div>
      : '') : ''}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.dstate.isLoading,
  status: state.dstate.status
});

export default connect(mapStateToProps)(Home);