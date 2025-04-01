
// Export all image paths as named exports
export const images = {
    logo: '../assets/img/logo.webp',
    graduateHat: '../assets/img/graduate-hat.webp',
    paperPlane: '../assets/img/paper-plane.webp',
    travelBeach: '../assets/img/travel-beach.webp',
    travelKey: '../assets/img/travel-key.webp',
    travelPassport: '../assets/img/travel-passport.webp',
    travelWindow: '../assets/img/travel-window-scene.webp',
    withUs: '../assets/img/with-us.webp',
    womanStudying: '../assets/img/woman-studying.webp',
    flags: [
        '../assets/svg/flag-1.svg', 
        '../assets/svg/flag-2.svg',
        '../assets/svg/flag-3.svg',
        '../assets/svg/flag-4.svg',
        '../assets/svg/flag-5.svg',
    ]
};

export function setupImages() {
    // Logo
    const logoImg = document.querySelector('.logo');
    if (logoImg) logoImg.src = images.logo;

    // Hero image
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) heroImage.src = images.womanStudying;

    // Flags in hero section
    const flagElements = document.querySelectorAll('.flag-img');
    flagElements.forEach((flag, index) => {
        if (images.flags[index]) {
            flag.src = images.flags[index];
        }
    });

    // Services images
    document.querySelector('.vacation-image')?.setAttribute('src', images.travelBeach);
    document.querySelector('.property-image')?.setAttribute('src', images.travelKey);
    document.querySelector('.flight-image')?.setAttribute('src', images.travelPassport);
    document.querySelector('.study-image')?.setAttribute('src', images.graduateHat);
    document.querySelector('.work-image')?.setAttribute('src', images.travelWindow);
}