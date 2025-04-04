
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

fetch("app-form.html")
    .then((r) => r.text())
    .then((html) => {
        document.getElementById("form-container").innerHTML = html;
        if (window.setupImages) setupImages();
    });




document.addEventListener('DOMContentLoaded', function () {
    // Property details toggle
    document.querySelectorAll('input[name="property"]').forEach(radio => {
        radio.addEventListener('change', function () {
            document.getElementById('property-details-container').classList.toggle('hidden', this.id !== 'property-yes');
        });
    });

    // Guarantor details toggle
    document.querySelectorAll('input[name="guarantor"]').forEach(radio => {
        radio.addEventListener('change', function () {
            document.getElementById('guarantor-details-container').classList.toggle('hidden', this.id !== 'guarantor-yes');
        });
    });

    // Savings balance toggle
    document.querySelectorAll('input[name="savings-account"]').forEach(radio => {
        radio.addEventListener('change', function () {
            document.getElementById('savings-balance-container').classList.toggle('hidden', this.id !== 'savings-yes');
        });
    });
});

// Show/hide conditional fields based on radio button selection
document.addEventListener('DOMContentLoaded', function () {
    // Resignation reason toggle
    document.querySelectorAll('input[name="resigned"]').forEach(radio => {
        radio.addEventListener('change', function () {
            document.getElementById('resignation-reason-container').classList.toggle('hidden', this.id !== 'resigned-yes');
        });
    });

    // Contract duration toggle
    document.querySelectorAll('input[name="contract"]').forEach(radio => {
        radio.addEventListener('change', function () {
            document.getElementById('contract-duration-container').classList.toggle('hidden', this.id !== 'contract-yes');
        });
    });

    // Bond details toggle
    document.querySelectorAll('input[name="bond"]').forEach(radio => {
        radio.addEventListener('change', function () {
            document.getElementById('bond-details-container').classList.toggle('hidden', this.id !== 'bond-yes');
        });
    });
});





document.addEventListener('DOMContentLoaded', function () {
    // Toggle "Other" reason text input
    const otherCheckbox = document.getElementById('reason-other');
    const otherTextInput = document.getElementById('reason-other-text');

    otherCheckbox.addEventListener('change', function () {
        otherTextInput.disabled = !this.checked;
        if (!this.checked) otherTextInput.value = '';
    });

    // Return to Ghana explanation toggle
    document.querySelectorAll('input[name="return-ghana"]').forEach(radio => {
        radio.addEventListener('change', function () {
            const showExplanation = (this.id === 'return-no' || this.id === 'return-maybe');
            document.getElementById('return-explanation-container').classList.toggle('hidden', !showExplanation);
        });
    });

    // Loan details toggle
    document.querySelectorAll('input[name="loans"]').forEach(radio => {
        radio.addEventListener('change', function () {
            document.getElementById('loan-details-container').classList.toggle('hidden', this.id !== 'loans-yes');
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Family responsibility details toggle
    document.querySelectorAll('input[name="family-responsibility"]').forEach(radio => {
        radio.addEventListener('change', function () {
            document.getElementById('family-details-container').classList.toggle('hidden', this.id !== 'family-yes');
        });
    });

    // Spouse/children details toggle
    document.querySelectorAll('input[name="spouse-children"]').forEach(radio => {
        radio.addEventListener('change', function () {
            document.getElementById('spouse-details-container').classList.toggle('hidden', this.id !== 'spouse-yes');
        });
    });

    // Community involvement details toggle
    document.querySelectorAll('input[name="community-involvement"]').forEach(radio => {
        radio.addEventListener('change', function () {
            document.getElementById('community-details-container').classList.toggle('hidden', this.id !== 'community-yes');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Conviction details toggle
    document.querySelectorAll('input[name="conviction"]').forEach(radio => {
        radio.addEventListener('change', function () {
            document.getElementById('conviction-details-container').classList.toggle('hidden', this.id !== 'conviction-yes');
        });
    });

    // Form submission handling
    const form = document.querySelector('.form-container');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!document.getElementById('declaration-check').checked) {
            alert('Please confirm the declaration before submitting');
            return;
        }
        // Add form submission logic here
        alert('Application submitted successfully!');
    });
});