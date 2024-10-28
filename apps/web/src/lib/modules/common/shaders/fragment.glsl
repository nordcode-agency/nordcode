uniform vec3 uSurfaceColor;
uniform vec3 uDepthColor;
uniform vec3 uBackgroundColor;
uniform float uColorMultiplier;
uniform float uColorOffset;

varying float vElevation;
varying vec3 vPosition;

const float THRESHOLD = 0.1;

void main() {
    float mixStrength = (vElevation + uColorOffset) * uColorMultiplier;
    float mixStrengthElevation = vElevation * mixStrength;
    vec3 color = mix(uDepthColor, uSurfaceColor, vElevation * mixStrength);
    gl_FragColor = vec4(color * smoothstep(-1.0, -1.0 + THRESHOLD, vPosition.y) *
            smoothstep(1.0, 1.0 - THRESHOLD, vPosition.y), 1.0
    );
    #include <colorspace_fragment>
}
