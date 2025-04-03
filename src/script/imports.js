
// Export all image paths as named exports
export const images = {
    logo: 'assets/img/logo.webp',
    graduateHat: 'assets/img/graduate-hat.webp',
    paperPlane: 'assets/img/paper-plane.webp',
    travelBeach: 'assets/img/travel-beach.webp',
    travelKey: 'assets/img/travel-key.webp',
    travelPassport: 'assets/img/travel-passport.webp',
    travelWindow: 'assets/img/travel-window-scene.webp',
    withUs: 'assets/img/with-us.webp',
    womanStudying: 'assets/img/woman-studying.webp',
    PlaneOne: 'assets/img/plane-1.webp',
    PlaneTwo: 'assets/img/plane-2.webp',
    ToAbroad: 'assets/img/to-abroad.webp',
    flags: [
        'assets/svg/flag-1.svg',
        'assets/svg/flag-2.svg',
        'assets/svg/flag-3.svg',
        'assets/svg/flag-4.svg',
        'assets/svg/flag-5.svg',
    ]
};

export function setupImages() {
    // Generic image setup for multiple instances
    const setupImage = (selector, path) => {
        document.querySelectorAll(selector).forEach(el => {
            el.src = path;
        });
    };

    // Specific images
    setupImage('.logo', images.logo);
    setupImage('.hero-image', images.womanStudying);
    setupImage('.travel-window-scene', images.travelWindow);
    setupImage('.travel-key', images.travelKey);
    setupImage('.travel-passport', images.travelPassport);
    setupImage('.travel-beach', images.travelBeach);
    setupImage('.graduate-hat', images.graduateHat);
    setupImage('.paper-plane', images.paperPlane);
    setupImage('.with-us', images.withUs);
    setupImage('.woman-studying', images.womanStudying);
    setupImage('.plane-1', images.PlaneOne);
    setupImage('.plane-2', images.PlaneTwo);
    setupImage('.to-abroad', images.ToAbroad);
    // Add all other images...

    // Flags setup
    document.querySelectorAll('.flag-img').forEach((flag, index) => {
        if (images.flags[index]) {
            flag.src = images.flags[index];
        }
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links a.active')?.classList.remove('active');
        link.classList.add('active');
    });
});