# Model Viewer

Add scroll and rotation controls for your 3D CSS models.
Allows rotating and zooming in and out of your model.

## Usage

### Create your CSS model and wrap it in a container div. Your model must be wrapped in a single element within your model container.

```html
<div class="model-container">
    <!-- Your model here -->
</div>
```

The container is used to add the basic styles and as a base for the controls.

### Create the model viewer with your container

```javascript
import { createModelViewer } from "@nordcode/model-viewer";

const container = document.querySelector(".model-container");
createModelViewer(container, {
    rotateSpeedFactor: 0.4,
    perspective: 720,
    defaultZoom: 30,
    preventBaseStyles: false,
});
```

A full example with a base model can be found in the `index.html` file.

### Enjoy!
