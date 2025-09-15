// 等待页面加载完成后初始化粒子效果
window.addEventListener('DOMContentLoaded', function() {
    // 初始化粒子效果
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#00f0ff", "#0066ff", "#ff00ff"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00f0ff",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // 创建更新粒子颜色的函数，以匹配主题
    function updateParticleColors() {
        const particles = window.pJSDom[0].pJS.particles;
        const canvas = window.pJSDom[0].pJS.canvas.canvas;
        const ctx = canvas.getContext('2d');
        
        // 可以根据需要调整颜色
        particles.color.value = ["#00f0ff", "#0066ff", "#ff00ff"];
        particles.line_linked.color = "#00f0ff";
        
        // 重新绘制粒子
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        window.pJSDom[0].pJS.fn.particlesRefresh();
    }

    // 监听窗口大小变化，确保粒子效果适应屏幕
    window.addEventListener('resize', function() {
        if (window.pJSDom && window.pJSDom[0]) {
            window.pJSDom[0].pJS.fn.canvasSize();
        }
    });

    // 添加主题切换效果（可选功能）
    // 可以通过添加一个主题切换按钮来调用此函数
    window.switchParticleTheme = function(theme) {
        const particles = window.pJSDom[0].pJS.particles;
        
        switch(theme) {
            case 'cyberpunk':
                particles.color.value = ["#00f0ff", "#ff00ff"];
                particles.line_linked.color = "#00f0ff";
                break;
            case 'deepspace':
                particles.color.value = ["#0066ff", "#00f0ff", "#ffffff"];
                particles.line_linked.color = "#0066ff";
                break;
            case 'neon':
                particles.color.value = ["#ff00ff", "#00f0ff", "#ffff00"];
                particles.line_linked.color = "#ff00ff";
                break;
            default:
                particles.color.value = ["#00f0ff", "#0066ff", "#ff00ff"];
                particles.line_linked.color = "#00f0ff";
        }
        
        window.pJSDom[0].pJS.fn.particlesRefresh();
    };
});