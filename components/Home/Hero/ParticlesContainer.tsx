'use client';
import { Particles } from "react-tsparticles";
import { useCallback } from "react";
import React from "react";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async ( ) => {
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none ">
      {/* Particles component is now scoped to its parent */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent", // Same as Hero background for seamless blending
            },
          },
          fullScreen: {
            enable: false,
            zIndex: -1,
            },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "out",
              },
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "dog",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesContainer;