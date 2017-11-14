export function startSpinner(selector, duration) {
    const allImgs = document.querySelectorAll(selector);
    const totalImgs = allImgs.length;
    const imgHeight = allImgs[0].offsetHeight;
    const totalHeight = imgHeight * totalImgs;

    TweenMax.set(selector, {
        y: (index) => index * imgHeight
    });

    TweenMax.to(selector, duration, {
        y:`+=${totalHeight}`,
        modifiers: {
            y: (y) => y % totalHeight
        },
        ease: Back.easeOut.config(.5),
    });
};
