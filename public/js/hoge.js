const chatTextBox = document.getElementById('chat-textbox');
const balloon = document.getElementById('chat-table-body');
const sendButton = document.getElementById('send-button');

sendButton.onclick = () => {
    //console.log('onClick');
    const userText = chatTextBox.value;
    if(userText === '') {
        return;
    }
    balloon.innerHTML += `<tr><td><div class="mycomment"><p>${userText}</p></div></td></tr>`;
    chatTextBox.value = '';
}