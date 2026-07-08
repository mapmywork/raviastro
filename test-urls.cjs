const https = require('https');

const urls = [
  'https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=400',
  'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=400',
  'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=400',
  'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=400',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400',
  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=400',
  'https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?q=80&w=400',
  'https://images.unsplash.com/photo-1581579438747-1dc8d1e0ca96?q=80&w=400',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400',
  'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=400',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400',
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=400',
  'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=400',
  'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?q=80&w=400',
  'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=400',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400',
  'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=400',
  'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=400',
  'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=400',
  'https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=400',
  'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=400',
  'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=400',
  'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=400',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400',
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400',
  'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=400',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=400',
  'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=400'
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (e) => {
      resolve({ url, status: e.message });
    });
  });
}

async function main() {
  for (const url of urls) {
    const res = await checkUrl(url);
    if (res.status !== 200) {
      console.log(`Failed: ${res.url} - ${res.status}`);
    }
  }
}

main();
