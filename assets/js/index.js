class PictureGallery {
    constructor(container_id, button_id) {
        this.container_id = container_id;
        this.button_id = button_id;

        this.button = document.querySelector(this.button_id);
        this.main_container = document.querySelector(container_id);
        this.containers = this.main_container.querySelectorAll(".photography-container");

        this.MAX = this.containers.length;
        this.LOAD_MORE = 6;

        this.shown = 6;

        this.setButtonEvent();
        this.hideNotShown();
    }

    setButtonEvent() {
        this.button.addEventListener("click", () => {
            this.changeVisibility()
        });
    }

    changeVisibility() {
        this.shown += this.LOAD_MORE;

        for (let i = this.shown - this.LOAD_MORE; i < this.shown; i++)
        {
            try {
                this.containers[i].classList.remove("d-none");
            } catch(e) {
                this.button.remove();
                break;
            }
        }
    }

    hideNotShown() {
        for (let i = this.shown; i < this.MAX; i++)
        {
            this.containers[i].classList.add("d-none");
        }
    }

    createCloserImageLook() {

    }
}

new PictureGallery("#design-picture-container", "#load-more-designs");
new PictureGallery("#photography-pictures", "#load-more-photography");

document.querySelectorAll("img").forEach((element) => {
    element.addEventListener("click", () => {
        const imageViewContainer = document.querySelector("#image-view-container");

        imageViewContainer.querySelector(".image-view-image").src = element.src;

        imageViewContainer.classList.remove("d-none");
    });
});

document.querySelector("#image-view-close").addEventListener("click", () => {
    document.querySelector("#image-view-container").classList.add("d-none");
});
