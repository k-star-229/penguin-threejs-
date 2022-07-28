import { useState, useEffect, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import PuffLoader from "react-spinners/PuffLoader";

import { connect } from 'react-redux';
import { setDStateLoading, setStatus } from '../../actions/dstate';

var obj;
let speed = 0.005;

function loadGLTFModel(scene, glbPath, options) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      glbPath,
      (gltf) => {
        obj = gltf.scene;
        obj.name = 'dstate';
        obj.position.y = 1;
        obj.position.x = -0.2;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });

        resolve(obj);
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
  });
}

const DState = ({ setDStateLoading, setStatus }) => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState();

  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = event => {
      var st = window.pageYOffset || document.documentElement.scrollTop;

      if (obj && st > lastScrollTop){
        obj.rotation.y -= speed;
      } else if (obj && st < lastScrollTop){
        obj.rotation.y += speed;
      }

      lastScrollTop = st <= 0 ? 0 : st;
      if (st >= 0 && st < window.innerHeight) {
        setStatus(0);
      } else if (st >= window.innerHeight && st < window.innerHeight*2) {
        setStatus(1);
      } else if (st >= window.innerHeight*2 && st < window.innerHeight*3) {
        setStatus(2)
      } else if (st >= window.innerHeight*3 && st < window.innerHeight*4) {
        setStatus(3);
      } else if (st >= window.innerHeight*4 && st < window.innerHeight*5) {
        setStatus(4);
      } else if (st == window.innerHeight*5) {
        setStatus(5)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const { current: container } = refContainer;

    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      const scene = new THREE.Scene();
      const scale = 0.9;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      );
      const target = new THREE.Vector3(0, 2, 0);
      const light = new THREE.PointLight(0xFFFFFF);
      scene.add(light);
      light.position.x = 0.2;
      light.position.y = 2.5;
      light.position.z = -0.5;

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = false;
      controls.target = target;
      controls.enableZoom = false;
      controls.enableRotate = false;      

      loadGLTFModel(scene, 'model/DState_Aniamtion.gltf', {
        receiveShadow: false,
        castShadow: false
      }).then(() => {
        animate();
      });

      let req = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);
        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          camera.position.y = 2.5;
          camera.position.x = 0.2;
          camera.position.z = -1.8;
          camera.lookAt(target);
        } else { 
          controls.update();
        }
        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => { 
    setTimeout(() => {
      setLoading(false);
      setDStateLoading(false);
      setStatus(0)
    }, 7000);
  }, []);

  return (
    <div
      style={{ height: '100%', width: '100%', position: 'fixed'}}
      ref={refContainer}
    >
    {loading && ( 
      <video autoPlay muted>
        <source src='/intro.mp4' type='video/mp4' />
      </video>
      // <span style={{ position: 'absolute', left: '40%', top: '30%' }}>
      //   <PuffLoader
      //     color='#23b8fd'
      //     size={300}
      //     loading={true}
      //     speedMultiplier={3}
      //   />
      // </span>
    )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.dstate.isLoading,
  status: state.dstate.status
});

export default connect(mapStateToProps, { setDStateLoading, setStatus })(DState);