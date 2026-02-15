// camera.js
let stream = null;

async function startCamera() {
  try {
    if (stream) return; // prevent multiple streams

    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (err) {
    alert("Camera permission denied");
  }
}

function stopCamera() {
  if (!stream) return;
  stream.getTracks().forEach(t => t.stop());
  stream = null;
}
