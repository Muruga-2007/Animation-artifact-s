export const vertexShader = `
  uniform float uTime;
  uniform float uProgress;
  uniform float uScale;
  
  attribute vec3 target1;
  attribute vec3 target2;
  attribute vec3 color;
  attribute float size;
  
  varying vec3 vColor;
  
  // Cubic bezier easing for smoother transitions
  float easeInOutCubic(float t) {
      return t < 0.5
        ? 4.0 * t * t * t
        : 1.0 - pow(-2.0 * t + 2.0, 3.0) / 2.0;
  }
  
  void main() {
    vColor = color;
    
    // Smooth morphing logic using the eased progress
    // We can map uProgress (0-2) to switch between 3 shapes
    // 0 -> 1: Base to Target1
    // 1 -> 2: Target1 to Target2
    
    vec3 currentPos = position;
    vec3 mixedPos = position;
    
    float t = uProgress;
    
    if (t <= 1.0) {
        float ease = easeInOutCubic(t);
        mixedPos = mix(position, target1, ease);
    } else {
        float ease = easeInOutCubic(t - 1.0);
        mixedPos = mix(target1, target2, ease);
    }
    
    // Add some noise/wobble for aliveness
    float noiseFreq = 0.5;
    float noiseAmp = 0.05;
    float wobble = sin(uTime * 2.0 + mixedPos.x * noiseFreq) * noiseAmp;
    
    vec3 finalPos = mixedPos + vec3(wobble);
    
    vec4 mvPosition = modelViewMatrix * vec4(finalPos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Size attenuation (particles get smaller when further away)
    gl_PointSize = size * uScale * (10.0 / -mvPosition.z);
  }
`;

export const fragmentShader = `
  varying vec3 vColor;
  uniform float uOpacity;

  void main() {
    // Triangular particle using gl_PointCoord
    vec2 c = gl_PointCoord - 0.5;
    
    // Simple signed distance field for a triangle or circle
    // Let's stick to a soft circular glow for now as it blends better, 
    // unless "Triangle" is strictly required. 
    // For Dala style, we can use a texture or math.
    
    float dist = length(c);
    
    if (dist > 0.5) discard;
    
    // Soft edge
    float alpha = smoothstep(0.5, 0.3, dist) * uOpacity;
    
    gl_FragColor = vec4(vColor, alpha);
  }
`;
