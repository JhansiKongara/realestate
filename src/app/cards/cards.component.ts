import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  images = [
    'https://ap.rdcpix.com/77fd5b6c016a73e183971cfdf6850acfl-m2203931600od-w480_h360_x2.webp?w=3840&q=75',
    'https://trakukaimynyste.lt/wp-content/uploads/2023/11/Traku-kaimynyste-2-var.-1.jpg',
    'https://www.asianpaints.com/content/dam/Colourpro-new/Article_Page/waterfall-house/waterfall-house-carousel-2.jpg',
  ];
  members = [
    {
      id: '1',
      price: '$3000-$4000',
      location: 'Hyderabad',
      title: ' Find Your Perfect Getaway',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://keyvendors.com/blogs/wp-content/uploads/2023/06/interior-design-company-1-1024x602.jpg',
    },
    {
      id: '2',
      price: '$3000-$4000',
      location: 'Hyderabad',
      title: ' Find Your Perfect Getaway',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://housing.com/news/wp-content/uploads/2023/03/Flat-interior-design-ideas-Tips-to-design-your-dream-home-01.jpg',
    },
    {
      id: '3',
      price: '$3000-$4000',
      location: 'Hyderabad',
      title: ' Find Your Perfect Getaway',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/f_auto,q_auto/v1647506927/Website/CMS-Uploads/aqxnv6kurdiziavjxsjh.jpg',
    },
    {
      id: '4',
      price: '$3000-$4000',
      location: 'Hyderabad',
      title: ' Find Your Perfect Getaway',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/f_auto,q_auto/v1647506927/Website/CMS-Uploads/aqxnv6kurdiziavjxsjh.jpg',
    },
    {
      id: '5',
      price: '$3000-$4000',
      location: 'Hyderabad',
      title: ' Find Your Perfect Getaway',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/f_auto,q_auto/v1647506927/Website/CMS-Uploads/aqxnv6kurdiziavjxsjh.jpg',
    },
    {
      id: '6',
      price: '$3000-$4000',
      location: 'Hyderabad',
      title: ' Find Your Perfect Getaway',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://keyvendors.com/blogs/wp-content/uploads/2023/06/interior-design-company-1-1024x602.jpg',
    },
    {
      id: '7',
      price: '$3000-$4000',
      location: 'Hyderabad',
      title: ' Find Your Perfect Getaway',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://housing.com/news/wp-content/uploads/2023/03/Flat-interior-design-ideas-Tips-to-design-your-dream-home-01.jpg',
    },
    {
      id: '8',
      price: '$3000-$4000',
      location: 'Hyderabad',
      title: ' Find Your Perfect Getaway',
      subtitle: 'Subtitle',
      content: 'Content here',
      url: 'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2021/05/26144958/RIS_147-1.jpg',
    },
  ];
}
