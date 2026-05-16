import * as THREE from 'three';

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. LOADING ANIMATION ---
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 1500);

  // --- 2. CUSTOM CURSOR ---
  const cursor = document.querySelector('.cursor');
  const cursorDot = document.querySelector('.cursor-dot');

  document.addEventListener('mousemove', (e) => {
    // We use a slight delay on the outer cursor for a trailing effect
    cursor.animate({
      left: `${e.clientX}px`,
      top: `${e.clientY}px`
    }, { duration: 500, fill: "forwards" });

    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;
  });

  // Hover effects for cursor
  const hoverElements = document.querySelectorAll('a, button, .card');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
  });

  // --- 3. SCROLL PROGRESS BAR ---
  const scrollProgress = document.querySelector('.scroll-progress');

  // --- 4. NAVBAR ANIMATIONS ---
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    // Scroll Progress
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = `${totalScroll / windowHeight * 100}%`;
    scrollProgress.style.width = scroll;

    // Navbar
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // --- 5. TYPING ANIMATION ---
  const typeText = "ACHIEVE. GREATNESS. NOW.";
  const typeTarget = document.getElementById('typewriter');
  let i = 0;

  function typeWriter() {
    if (i < typeText.length) {
      typeTarget.innerHTML += typeText.charAt(i);
      i++;
      setTimeout(typeWriter, 150);
    } else {
      setTimeout(() => {
        typeTarget.innerHTML = '';
        i = 0;
        typeWriter();
      }, 8000);
    }
  }

  // Start typing after loader finishes
  setTimeout(typeWriter, 1600);

  // --- 6. NUMBER COUNTER ANIMATION ---
  const counters = document.querySelectorAll('.counter');
  let hasCounted = false;

  const countUp = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps

      let current = 0;
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.innerText = Math.ceil(current).toLocaleString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };
      updateCounter();
    });
  };

  // --- 7. SCROLL-TRIGGERED REVEALS (Intersection Observer) ---
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Staggered delay for cards
        if (entry.target.classList.contains('card')) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100);
        } else {
          entry.target.classList.add('visible');
        }

        // Trigger counters when stats section is visible
        if (entry.target.id === 'stats' && !hasCounted) {
          countUp();
          hasCounted = true;
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
  });

  // --- 8. BUTTON ANIMATIONS ---
  const buttons = document.querySelectorAll('.btn-primary');
  buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      if (this.classList.contains('btn-loading') || this.classList.contains('btn-success')) return;

      this.classList.add('btn-loading');

      // Simulate action
      setTimeout(() => {
        this.classList.remove('btn-loading');
        this.classList.add('btn-success');

        setTimeout(() => {
          this.classList.remove('btn-success');
        }, 2000);
      }, 1000);
    });
  });

  // --- 8.5 APPLE-LIKE HERO IMAGE SCROLL ANIMATION ---
  const heroImg = document.getElementById('hero-img');
  const heroContent = document.querySelector('.hero-content');
  if (heroImg) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight;
      if (scrollY <= maxScroll) {
        // Zoom out the image as we scroll down
        const scale = 1.05 - (scrollY / maxScroll) * 0.05;
        // Blur the image slightly as we scroll down
        const blur = (scrollY / maxScroll) * 10;
        heroImg.style.transform = `scale(${scale})`;
        heroImg.style.filter = `blur(${blur}px) brightness(${1 - (scrollY / maxScroll) * 0.5})`;
        
        // Fade out text
        if (heroContent) {
          heroContent.style.opacity = 1 - (scrollY / (maxScroll * 0.5));
          heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
      }
    });
  }

  // --- 9. 3D INTERACTIVE ELEMENTS (Three.js) ---
  initThreeJS();
});

function initThreeJS() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const scene = new THREE.Scene();

  // Camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Renderer
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0x00e5ff, 2);
  pointLight.position.set(2, 3, 4);
  scene.add(pointLight);

  const accentLight = new THREE.PointLight(0xffb347, 1.5);
  accentLight.position.set(-2, -3, 2);
  scene.add(accentLight);

  // Group for the dumbbell to easily rotate it together
  const dumbbellGroup = new THREE.Group();

  // Create a stylized 3D Dumbbell representation
  // Handle (cylinder)
  const handleGeo = new THREE.CylinderGeometry(0.2, 0.2, 2, 32);
  const metalMat = new THREE.MeshStandardMaterial({
    color: 0x888888,
    metalness: 0.8,
    roughness: 0.2
  });
  const handle = new THREE.Mesh(handleGeo, metalMat);
  handle.rotation.z = Math.PI / 2;
  dumbbellGroup.add(handle);

  // Weights (hexagonal cylinders)
  const weightGeo = new THREE.CylinderGeometry(0.8, 0.8, 0.4, 6);
  const darkMat = new THREE.MeshStandardMaterial({
    color: 0x111111,
    metalness: 0.9,
    roughness: 0.5
  });

  const weightRight1 = new THREE.Mesh(weightGeo, darkMat);
  weightRight1.position.x = 1.1;
  weightRight1.rotation.z = Math.PI / 2;
  dumbbellGroup.add(weightRight1);

  const weightRight2 = new THREE.Mesh(weightGeo, darkMat);
  weightRight2.position.x = 1.6;
  weightRight2.scale.set(0.8, 1, 0.8);
  weightRight2.rotation.z = Math.PI / 2;
  dumbbellGroup.add(weightRight2);

  const weightLeft1 = new THREE.Mesh(weightGeo, darkMat);
  weightLeft1.position.x = -1.1;
  weightLeft1.rotation.z = Math.PI / 2;
  dumbbellGroup.add(weightLeft1);

  const weightLeft2 = new THREE.Mesh(weightGeo, darkMat);
  weightLeft2.position.x = -1.6;
  weightLeft2.scale.set(0.8, 1, 0.8);
  weightLeft2.rotation.z = Math.PI / 2;
  dumbbellGroup.add(weightLeft2);

  // Position the dumbbell off to the right slightly
  dumbbellGroup.position.set(2, 0, -2);
  scene.add(dumbbellGroup);

  // Floating particles / dust motes
  const particlesGeo = new THREE.BufferGeometry();
  const particlesCount = 200;
  const posArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 15;
  }

  particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  const particleMat = new THREE.PointsMaterial({
    size: 0.02,
    color: 0x00e5ff,
    transparent: true,
    opacity: 0.5
  });

  const particlesMesh = new THREE.Points(particlesGeo, particleMat);
  scene.add(particlesMesh);

  // Mouse Parallax Effect
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  });

  // Animation Loop
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    // Rotate Dumbbell
    dumbbellGroup.rotation.y = elapsedTime * 0.5;
    dumbbellGroup.rotation.x = elapsedTime * 0.2;
    dumbbellGroup.rotation.z = Math.sin(elapsedTime * 0.5) * 0.2;

    // Parallax Dumbbell
    dumbbellGroup.position.x += (mouseX * 0.5 + 2 - dumbbellGroup.position.x) * 0.05;
    dumbbellGroup.position.y += (mouseY * 0.5 - dumbbellGroup.position.y) * 0.05;

    // Rotate Particles
    particlesMesh.rotation.y = -elapsedTime * 0.05;
    particlesMesh.rotation.x = elapsedTime * 0.02;

    renderer.render(scene, camera);
  }

  animate();

  // Handle Resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
