async function trainPhoto() {
    const photoData = document.getElementById('photoData').value;
    const response = await fetch('/train/photo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: photoData })
    });
    const result = await response.json();
    alert(result.status);
}

async function trainVideo() {
    const videoData = document.getElementById('videoData').value;
    const response = await fetch('/train/video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: videoData })
    });
    const result = await response.json();
    alert(result.status);
}

async function trainChat() {
    const chatData = document.getElementById('chatData').value;
    const response = await fetch('/train/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: chatData })
    });
    const result = await response.json();
    alert(result.status);
}

async function generatePhoto() {
    const photoDescription = document.getElementById('photoDescription').value;
    const response = await fetch('/generate/photo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: photoDescription })
    });
    const result = await response.json();
    alert(result.photo);
}

async function generateVideo() {
    const videoDescription = document.getElementById('videoDescription').value;
    const response = await fetch('/generate/video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: videoDescription })
    });
    const result = await response.json();
    alert(result.video);
}

async function generateChat() {
    const chatPrompt = document.getElementById('chatPrompt').value;
    const response = await fetch('/generate/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: chatPrompt })
    });
    const result = await response.json();
    alert(result.response);
}

async function downloadData() {
    const response = await fetch('/download_data', { method: 'GET' });
    const result = await response.json();
    alert(result.status);
}

async function uploadData() {
    const filePath = prompt("Enter the file path for uploading data:");
    const response = await fetch('/upload_data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ file_path: filePath })
    });
    const result = await response.json();
    alert(result.status);
}
