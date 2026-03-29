{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const reasons = ["You are kind", "You are thoughtful", "You treat me so well", "You are handsome", "You are hardworking", "You are caring", "There are a million other reasons but I'll keep it short on here"];\
const plans = ["Travel with you", "Go hiking with you", "Try new restaurants with you", "Explore new places with you", "Literally anything with you"];\
\
let activeFloaters = [];\
\
function showScreen(screenId, bgClass) \{\
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));\
    const screen = document.getElementById(screenId);\
    screen.classList.add('active');\
    if(bgClass) screen.className = `screen active $\{bgClass\}`;\
    \
    // Clear old floaters\
    activeFloaters.forEach(f => f.element.remove());\
    activeFloaters = [];\
\
    // Add new floaters\
    if(screenId === 'reasons-screen') spawnFloaters(reasons, screen);\
    if(screenId === 'future-screen') spawnFloaters(plans, screen);\
\}\
\
function spawnFloaters(list, container) \{\
    list.forEach(text => \{\
        const el = document.createElement('div');\
        el.className = 'floater';\
        el.innerText = text;\
        container.appendChild(el);\
        \
        activeFloaters.push(\{\
            element: el,\
            x: Math.random() * (window.innerWidth - 200),\
            y: Math.random() * (window.innerHeight - 50),\
            dx: (Math.random() - 0.5) * 4,\
            dy: (Math.random() - 0.5) * 4\
        \});\
    \});\
    animate();\
\}\
\
function animate() \{\
    activeFloaters.forEach(f => \{\
        f.x += f.dx;\
        f.y += f.dy;\
\
        if (f.x <= 0 || f.x + f.element.offsetWidth >= window.innerWidth) f.dx *= -1;\
        if (f.y <= 0 || f.y + f.element.offsetHeight >= window.innerHeight) f.dy *= -1;\
\
        f.element.style.left = f.x + 'px';\
        f.element.style.top = f.y + 'px';\
    \});\
    if(activeFloaters.length > 0) requestAnimationFrame(animate);\
\}\
\
function quitGame() \{\
    document.getElementById('fade-overlay').style.opacity = '1';\
\}}