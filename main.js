let localStream;
let remoteStream;
let peerConnection;


const servers = {
    iceServers:[
        {
            urls:[`stun.l.google.com:19302`, 'stun1.l.google.com:19302']
        }
    ]
}

// on website load ask permission for camera and audio access- audio set to false for testing purposes.
let init = async ()=>{
localStream= await navigator.mediaDevices.getUserMedia({video:true, audio:false})
document.getElementById('user-1').srcObject=localStream;

createOffer()
};

let createOffer = async()=>{
    // this is a object will provide us with a load of options to be able to connect to the peer.
peerConnection = new RTCPeerConnection(servers)

remoteStream= new MediaStream()
document.getElementById('user-2').srcObject=remoteStream;

let offer = await peerConnection.createOffer()
await peerConnection.setLocalDescription(offer)

console.log('offer:', offer)
}

init()