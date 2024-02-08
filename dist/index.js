"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const background = document.getElementById('apresentation-video');
    if (background) {
        background.play().catch(error => {
            console.error('Erro ao iniciar a reprodução do vídeo:', error);
        });
    }
    const imgs = document.getElementById('img');
    const img = document.querySelectorAll('#img img');
    let idx = 0;
    function carrossel() {
        idx++;
        if (idx > img.length - 1) {
            idx = 0;
        }
        imgs.style.transform = `translateX(${-idx * (100)}%)`;
    }
    setInterval(carrossel, 2400);
    // About-me btn lógica
    const scrollToAboutMeBtn = document.getElementById('about-me');
    scrollToAboutMeBtn.addEventListener('click', () => {
        const aboutMeSection = document.querySelector('.about-me');
        aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    });
    // projects Btn logica
    const scrollToProjectsBtn = document.getElementById('projectsbtn');
    scrollToProjectsBtn.addEventListener('click', () => {
        const projectsSection = document.querySelector('.projects');
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    });
    // skills btn logica
    const scrollToMySkillsBtn = document.getElementById('my-skills');
    scrollToMySkillsBtn.addEventListener('click', () => {
        const mySkillsSection = document.querySelector('.my-skills-sec');
        mySkillsSection.scrollIntoView({ behavior: 'smooth', });
    });
    // certificates btn logica
    const scrollToMyCertificatesBtn = document.getElementById('certificates');
    scrollToMyCertificatesBtn.addEventListener('click', () => {
        const myCertificatesSection = document.querySelector('.certificates');
        myCertificatesSection.scrollIntoView({ behavior: 'smooth', });
    });
    let returnToMenu = document.getElementById('return-to-menu-btn');
    returnToMenu.addEventListener('click', () => {
        const menuSection = document.querySelector('.apresentation');
        menuSection.scrollIntoView({ behavior: 'smooth', });
    });
    window.addEventListener('scroll', () => {
        if (window.scrollY > 450) {
            returnToMenu.style.opacity = "1";
        }
        else {
            returnToMenu.style.opacity = "0";
        }
    });
});
