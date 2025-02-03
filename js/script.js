document.addEventListener('DOMContentLoaded', function () {
    const mainHeader = document.querySelector('.disc-about-header');
    const header = document.querySelector('.disc-about-header-nav');
    const headerLinks = document.querySelectorAll('.disc-about-header-nav-links a');
    const headerDarkLogo = document.querySelector('.disc-about-header-nav-dark-logo');
    const headerLightLogo = document.querySelector('.disc-about-header-nav-white-logo');
    const animationUnderlines = document.querySelectorAll('.disc-about-header-nav-span');
    const headerMenuIconBorder = document.querySelector('.disc-gall-header-nav-menu-option');
    const headerMenuIcon = document.querySelector('.disc-gall-header-nav-menu-option p');

    const firstMainHeading = document.querySelector('.disc-about-main-text-container p:first-of-type')
    const seondMainHeading = document.querySelector('.disc-about-main-text-container p:last-of-type')

    firstMainHeading.style.opacity = 0
    firstMainHeading.style.transform = 'translateY(50px)'
    firstMainHeading.style.transition = 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
    seondMainHeading.style.opacity = 0
    seondMainHeading.style.transform = 'translateY(50px)'
    seondMainHeading.style.transition = 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)'

    const firstPara = document.querySelectorAll('.disc-about-main-text h2 div')

    const subContainerCard1MainText = document.querySelectorAll('.disc-about-main-sub-container-card-text > h2 > div')
    const subContainerCard1SecondaryText = document.querySelectorAll('.disc-about-main-sub-container-card-text > div > div')

    const carouselHeading = document.querySelector('.disc-about-sub-container-carousel-heading > div')
    
    carouselHeading.style.opacity = 0
    carouselHeading.style.transform = 'translateY(50px)'
    carouselHeading.style.transition = 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)'

    subContainerCard1MainText.forEach((text, idx) => {
        text.style.opacity = 0
        text.style.transform = 'translateY(50px)'
        text.style.transition = 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
    })

    subContainerCard1SecondaryText.forEach((text, idx) => {
        text.style.opacity = 0
        text.style.transform = 'translateY(50px)'
        text.style.transition = 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
    })

    const builderHeading = document.querySelector('.disc-about-sub-container-discover-1-card > h2')
    const builderDesc = document.querySelectorAll('.disc-about-sub-container-discover-1-card-text div')

    builderHeading.style.opacity = 0
    builderHeading.style.transform = 'translateY(50px)'
    builderHeading.style.transition = 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)'

    builderDesc.forEach((text, idx) => {
        text.style.opacity = 0
        text.style.transform = 'translateY(50px)'
        text.style.transition = 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
    })

    const lastImageText1 = document.querySelector('.disc-about-main-sub-container-last-image-text h2')
    const lastImageText2 = document.querySelectorAll('.disc-about-main-sub-container-last-image-text div')

    lastImageText1.style.opacity = 0
    lastImageText1.style.transform = 'translateY(50px)'
    lastImageText1.style.transition = 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)'

    lastImageText2.forEach((text, idx) => {
        text.style.opacity = 0
        text.style.transform = 'translateY(50px)'
        text.style.transition = 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
    })
    // console.log("firstPara", firstPara)

    setTimeout(() => {
        firstMainHeading.style.opacity = 1
        firstMainHeading.style.transform = 'translateY(0)'
        seondMainHeading.style.opacity = 1
        seondMainHeading.style.transform = 'translateY(0)'
    }, 500)

    const isMobile = () => window.innerWidth < 768;

    mainHeader.style.position = 'fixed';
    mainHeader.style.width = '100%';
    mainHeader.style.top = '0';
    mainHeader.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    mainHeader.style.zIndex = '3';

    const footer = document.querySelector('footer');
    const footerContainer = document.querySelector('.disc-about-footer-container')
    const main = document.querySelector('main');

    if(!isMobile()){
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
        footer.style.left = '0';
        footer.style.width = '100%';
        footer.style.zIndex = '1';
        footerContainer.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        footerContainer.style.transformOrigin = 'bottom center';
    }

    const wrapper = document.createElement('div')
    wrapper.style.position = 'relative';
    wrapper.style.zIndex = '2';
    wrapper.style.backgroundColor = 'rgb(16, 16, 16)';
    wrapper.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';

    main.parentNode.insertBefore(wrapper, main);
    wrapper.appendChild(main);

    const footerHeight = footer.offsetHeight;
    const visibleBuffer = 100;

    let lastScrollPosition = window.scrollY;

    //carousel mount
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        focusAt: 'center',
        autoplay: 3000,
        hoverpause: true
    }).mount();

    let ticking = false;

    document.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScroll = window.scrollY;
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;
                const maxScroll = documentHeight - windowHeight;

                // Header color logic
                if (currentScroll > 50) {
                    header.style.backgroundColor = '#ffffff';
                    header.style.transition = 'background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                    headerLinks.forEach(link => {
                        link.style.color = '#000000';
                        link.style.transition = 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                    });
                    headerLightLogo.style.display = 'none';
                    headerDarkLogo.style.display = 'block';
                    animationUnderlines.forEach(span => span.style.backgroundColor = '#000000');
                    headerMenuIcon.style.color = '#000000';
                    headerMenuIconBorder.style.borderColor = '#000000';
                } else {
                    header.style.backgroundColor = 'transparent';
                    headerLinks.forEach(link => link.style.color = '#ffffff');
                    headerDarkLogo.style.display = 'none';
                    headerLightLogo.style.display = 'block';
                    animationUnderlines.forEach(span => span.style.backgroundColor = '#ffffff');
                    headerMenuIcon.style.color = '#ffffff';
                    headerMenuIconBorder.style.borderColor = '#ffffff';
                }

                // Header hide/show logic
                if (currentScroll > 150) {
                    if (currentScroll > lastScrollPosition) {
                        mainHeader.style.transform = 'translateY(-100%)';
                    } else {
                        mainHeader.style.transform = 'translateY(0)';
                    }
                } else {
                    mainHeader.style.transform = 'translateY(0)';
                }

        
                if (currentScroll > 320) {
                    firstPara.forEach((text, idx) => {
                        console.log("text", text)
                        setTimeout(() => {
                            text.style.transform = 'translateY(0)';
                            text.style.opacity = '1';
                            text.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
                        }, idx * 80);
                    }
                    )
                }

                if (currentScroll > 800) {
                    subContainerCard1MainText.forEach((text, idx) => {
                        setTimeout(() => {
                            text.style.transform = 'translateY(0)';
                            text.style.opacity = '1';
                            text.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
                        }, idx * 80);
                    });
                }

                if (currentScroll > 1000) {
                    subContainerCard1SecondaryText.forEach((text, idx) => {
                        setTimeout(() => {
                            text.style.transform = 'translateY(0)';
                            text.style.opacity = '1';
                            text.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
                        }, idx * 80);
                    });
                }

                if (currentScroll > 1600) {
                    carouselHeading.style.transform = 'translateY(0)';
                    carouselHeading.style.opacity = '1';
                    carouselHeading.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
                }

                if (currentScroll > 5000) {
                    builderHeading.style.transform = 'translateY(0)';
                    builderHeading.style.opacity = '1';
                    builderHeading.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
                }
                if(currentScroll > 5200){
                    builderDesc.forEach((text, idx) => {
                        setTimeout(() => {
                            text.style.transform = 'translateY(0)';
                            text.style.opacity = '1';
                            text.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
                        }, idx * 80);
                    });
                }

                if(currentScroll > 5800){
                    lastImageText1.style.transform = 'translateY(0)';
                    lastImageText1.style.opacity = '1';
                    lastImageText1.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
                    lastImageText2.forEach((text, idx) => {
                        setTimeout(() => {
                            text.style.transform = 'translateY(0)';
                            text.style.opacity = '1';
                            text.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
                        }, idx * 80);
                    });
                }

                // Wrapper and footer translation/scale logic
                if (!isMobile() && currentScroll > maxScroll - footerHeight) {
                    const maxTranslation = footerHeight + visibleBuffer;
                    if (currentScroll > maxScroll - maxTranslation) {
                        const remainingScroll = maxScroll - currentScroll;
                        const translation = Math.min(maxTranslation - remainingScroll, maxTranslation);
                        const progress = translation / maxTranslation;
                        const scale = 0.85 + (0.15 * progress); // Adjusted scale range for snappier effect
                        
                        wrapper.style.transform = `translateY(-${translation}px)`;
                        footerContainer.style.transform = `scale(${scale})`;
                    } else {
                        wrapper.style.transform = 'translateY(0)';
                        footerContainer.style.transform = 'scale(0.85)';
                    }
                }

                lastScrollPosition = currentScroll;
                ticking = false;
            });
        }
        ticking = true;
    });

    window.addEventListener('resize', function () {
        if (isMobile()) {
            footer.style.position = 'static';
            footerContainer.style.transform = 'none';
            wrapper.style.transition = 'none';
            wrapper.style.transform = 'translateY(0)';
        } else {
            footer.style.position = 'fixed';
            footer.style.bottom = '0';
            footer.style.left = '0';
            footer.style.width = '100%';
            footer.style.zIndex = '1';
            footerContainer.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
            footerContainer.style.transformOrigin = 'bottom center';
            wrapper.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        }
    });
});