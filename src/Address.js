import React from 'react';


export default function Address() {
  const social = [
    { id: 1, name: "facebook", url: "https://www.facebook.com/eamon256", user: "EAMON Dreadlock Solutions Uganda | Kampala" },
    { id: 2, name: "instagram", url: "https://www.instagram.com/eamon_dreads_kampala/", user: "eamomn (@eamon_dreads_kampala)" },
    { id: 3, name: "TikTok", url: "https://www.tiktok.com/discover/eamon-dreadlocks-solution?lang=en", user: "Eamon Dreadlocks Solution" },
    { id: 4, name: "Instagram", url: "https://www.instagram.com/eamon_dreads_kampala/p/C6cnlBqowg3/?locale=es_US", user: "eamon | Unlock your beauty of dreadlocks ..." },
    { id: 5, name: "tiktok", url: "https://www.tiktok.com/@eamondreadssalon/video/7262751627570908421", user: "Eamon dreads salon Kampala (@eamondreadssalon)" },
  ];

  return (
    <div className='address' >
      {social.map((element, index) => (
        <div key={element.id} className='address-div' >
          <h3>{element.user}</h3>
          <b><em>{element.name}</em></b><br />
          <a href={element.url}>Get to our {element.name} site</a>
        </div>
      ))}
      
    </div>
  );
}
