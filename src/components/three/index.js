import { useState, useEffect, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ThreeCircles } from  'react-loader-spinner';
import { connect } from 'react-redux';
import { setDStateLoading, setStatus } from '../../actions/dstate';

var obj;

function loadGLTFModel(scene, glbPath, options) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      glbPath,
      (gltf) => {
        obj = gltf.scene;
        obj.name = "dinosaur";
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

      loadGLTFModel(scene, '/DState.glb', {
        receiveShadow: false,
        castShadow: false
      }).then(() => {
        animate();
        setLoading(false);
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

  return (
    <div
      style={{ height: '100%', width: '100%', position: 'fixed'}}
      ref={refContainer}
    >
    {loading && (
      <span style={{ position: 'absolute', left: '40%', top: '30%' }}>
        <ThreeCircles
          color='#23b8fd'
          height={300}
          width={300}
          ariaLabel='three-circles-rotating'
        />
      </span>
    )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.dstate.isLoading
});

export default connect(mapStateToProps, { setDStateLoading, setStatus })(DState);